import React from 'react';
import {
    Card,
    Button,
} from "@/components/ui";
import {
    IconCalendarB,
    IconCalendar,
    IconEdit,
} from '@/components/icons';
import { formatPriceCurrency } from '@/helpers/numberformat';

interface AvailabilitySelectedOptCardProps {
    currency: string;
    name:string;
    optionName: string;
    price: number;
    startTime: string;
    dateTravel: string | undefined | null;
    quantity: {qty: number, product_unit_name: string, product_units_id: string}[];
    executeScroll?: () => void; 
    onClick?: () => void;
}
const AvailabilitySelectedOptCard:React.FC<AvailabilitySelectedOptCardProps> = ({ 
    currency, 
    price, 
    name, 
    optionName,
    startTime, 
    dateTravel, 
    quantity, 
    executeScroll,
    onClick 
}) => {
  return (
    <Card className='shadow-none'>
        <div className="">
            <h1 className='text-[20px] font-[500] text-gray-900 tracking-[0.15px]'>{name}</h1>
            <div className='my-4 flex justify-between items-center'>
                <span className="inline-flex font-[400] text-[16px] tracking-[0.5]">
                    <IconCalendarB className='text-primary-500 mr-2 w-6 h-6'/>
                    Sat, Oct 30, 2024
                </span>
                <Button
                    variant={'tertiary-color'}
                    className='px-[14px] h-[36px]'
                    shape={'round'}
                    size={'md'}
                    onClick={executeScroll}
                >
                    <IconEdit className='mr-2'/>Edit
                </Button>
            </div>
            <div className='flex justify-between items-start border-gray-200 border-t pt-4 pb-[8px]'>
                <span className="text-gray-500 font-[400] text-[14px] tracking-[0.5]text-start">Option</span>
                <span className="text-black font-[400] text-[14px] tracking-[0.5] text-end">{`${optionName}`}</span>
            </div>
            <div className='flex justify-between items-start py-2'>
                <span className="text-gray-500 font-[400] text-[14px] tracking-[0.5]text-start">Starting time</span>
                <span className="text-black font-[400] text-[14px] tracking-[0.5] text-end">{`${startTime}`}</span>
            </div>
            <div className='flex justify-between items-start pb-4 pt-[8px]'>
                <span className="text-gray-500 font-[400] text-[14px] tracking-[0.5]">Quantity</span>
                <div className="text-black font-[400] text-[14px] tracking-[0.5] text-end flex flex-col text-empty">
                    {quantity && quantity.map((item) => {
                        return item.qty !== 0
                            ? <span key={item.product_units_id} className="">{`${item.product_unit_name} x ${item.qty}`}</span> 
                            : undefined
                    })}
                </div>
                
            </div>
            <div className='mb-4 text-[24px] font-[500] text-gray-500 flex justify-between pt-4 border-t border-gray-200'>
                <span className="text-gray-500 text-[14px] leading-normal font-[400] tracking-[0.5]">Payment amount</span>
                <span className='text-primary-500 text-[20px] font-[500] tracking-[0.15]'>{formatPriceCurrency(price, currency)}</span>
            </div>
        </div>
        <Button
        className='btn-availability-check'
        shape={'round'}
        size={'lg'}
        onClick={onClick}
        >
            <IconCalendar className='mr-2'/>Book now
        </Button>
    </Card>
  )
}

export default AvailabilitySelectedOptCard;
