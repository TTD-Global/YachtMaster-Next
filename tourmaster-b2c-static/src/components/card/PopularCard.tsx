'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PopularCardProps } from '@/utils/types';
import { useRef } from 'react';
import { formatCompactNumber, formatLocaleString, formatPriceCurrency } from '@/helpers/numberformat';
import {
  FavoriteToggleButton,
  Price,
  PopularRating, 
  WishlistButton, 
  BookedReview 
} from '@/components/common';


interface LoadingCardProps {
  list: PopularCardProps;
}

const PopularCard = ({list} : LoadingCardProps) => {
  const isWishlist = false;
  const router = useRouter();
  const wishRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleCardClick = (event:any, id:any) => {
    if (
      cardRef.current &&
      !wishRef.current?.contains(event.target)
    ) {
      console.log("go next page");
      router.push(`/product/${id}`)
    }
  }

  return (
    <article className='group card hover-card-anim overflow-hidden'>
      <div ref={cardRef} className='flex flex-col justify-between cursor-pointer' onClick={(e) => handleCardClick(e, list.id)}>
        <div className='image'>
          <Image
            src={list.image}
            fill
            sizes='(max-width:768px) 100vw, 50vw'
            alt={''}
            className='rounded-t-xl object-cover'
          />
        </div>
        <div className="absolute right-2 top-2" ref={wishRef} >
          {isWishlist && <WishlistButton className='mr-0 h-[24px] w-[24px]' variant={'outline-white'}/>}
        </div>
        <div className='px-[12px] flex justify-between items-center text-[12px] leading-[18px] '>
          <PopularRating rating={list.rating} count={formatLocaleString(list.count)} />
          <BookedReview booked={formatCompactNumber(list.booked)}/>
        </div>
        <p className='px-[12px] text-md mt-1 font-semibold text-primary-900 line-clamp-2'>
          {list.name}
        </p>
        <div className="px-[12px] flex-1">
          <FavoriteToggleButton lists={list.tagline}/>
        </div>
        <div className='px-[12px] pb-[12px] mt-[2em] mr-0 ml-0 mb-0'>
          <Price price={formatPriceCurrency(list?.price, list?.currency)} discount={`${list.discount ? list.discount : ''}`}/>
        </div>
      </div>
    </article>
  )
}

export default PopularCard;

export const PopularCardSkeleton = () => {
  return (
    <div role="status" className="max-w-sm border border-gray-200 rounded-xl shadow animate-pulse dark:border-gray-700 overflow-hidden">
        <div className="flex items-center justify-center h-48 mb-4 rounded-t bg-gray-300 dark:bg-gray-700 overflow-hidden">
            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
            </svg>
        </div>
        <div className='p-4'>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <div className="flex items-center mt-4">
              <div>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                  <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
    </div>
  );
};
