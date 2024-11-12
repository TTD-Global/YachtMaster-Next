'use client'
import { IconDot, IconStar } from '@/components/icons';
import Link from 'next/link';
import React from 'react'
import WishlistButton from './WishlistButton';
import { formatCompactNumber, formatLocaleString } from '@/helpers/numberformat';

interface FavoriteSectionProps {
  rating: string | undefined;
  review?: number  | undefined;
  booked: number | undefined;
  wishlist?: boolean  | undefined;
  hidWishlist?:boolean;
  id?: number;
  className?: string;
}
const FavoriteSection:React.FC<FavoriteSectionProps> = ({
  className,
  rating,
  review,
  hidWishlist,
  booked,
  wishlist,
  id
}) => {

  return (
    <div className={`w-full col-span-3 flex flex-wrap justify-between items-center my-2`}>
      <div className='flex flex-wrap flex-row gap-x-2 items-center'>
        <IconStar className='text-warning-400'/>
        <div className='inline-block'>
          <span className="bg-warning-400 px-3 rounded-[4px] text-[14px] text-white h-[26px]">
            {rating}
          </span>
        </div>
        {review || review === 0 ?  (
          <div 
            className='mx-[14px]' 
            onClick={() => {
              var el = document.getElementById('scroll-to-reviews');
              if(el){
                window.scrollTo({
                  top: el?.offsetTop - 80, 
                  behavior: "smooth" 
                });
              }
            }}
          >
            <div className='underline text-primary-600 cursor-pointer'>
              <span className="text-[14px] py-2">{`${formatCompactNumber(review)} reviews`}</span>
            </div>
          </div> 
          ) : (<></>)
        }
        
        <div className='text-[14px] py-2 mx-[14px] flex items-center'>
          <IconDot className='w-1 h-1 mr-2'/>
          {`${formatCompactNumber(booked)} booked`}
        </div>
      </div>
      {!hidWishlist &&
        <WishlistButton  labelHidden={false} id={id} wishlist={wishlist}/>
      }
      
    </div>
  )
}

export default FavoriteSection;
