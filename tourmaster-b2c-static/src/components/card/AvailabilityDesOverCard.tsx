import React from 'react'
import {
    Card,
    Button,
    EllipsisText,
} from "@/components/ui";
import {
  FavoriteSection,
} from '@/components/common';
import {
    IconCalendar,
} from '@/components/icons';
import { formatPriceCurrency } from '@/helpers/numberformat';

interface AvailabilityDesOverCardProps {
  id?: number;
  onscreen?: boolean;
  height?: number;
  currency: string;
  name:string;
  price: number;
  rating: string | undefined;
  booked: number | undefined;
  onClick?: () => void;
  description: string;
}

const AvailabilityDesOverCard:React.FC<AvailabilityDesOverCardProps> = ({ 
  id,
  onscreen,
  height,
  currency,
  name,
  price,
  description,
  rating,
  booked,
  onClick
}) => {
  return (
    <Card className='shadow-none'>
      <p>{`${onscreen} - ${height}`}</p>
      <div className="">
        <h1 className='text-[20px] font-[500] text-gray-900 tracking-[0.15px]'>{name}</h1>
        <div className="w-full font-normal">
          <FavoriteSection
            rating={rating}
            booked={booked}
            hidWishlist={true}
            id={id}
          />
        </div>
        <EllipsisText onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {description}
        </EllipsisText>
        <p className='mb-4 text-[24px] font-[500] text-gray-500 flex justify-between pb-4 border-b border-gray-200'>
          <span className="text-gray-500 text-[24px] leading-normal font-[500] pr-2">From</span>
          {formatPriceCurrency(price, currency)}
        </p>
      </div>
      <Button
        className='btn-availability-check'
        shape={'round'}
        size={'lg'}
        onClick={onClick}
      >
        <IconCalendar className='mr-2'/>Check availability
      </Button>
    </Card>
  )
}

export default AvailabilityDesOverCard;