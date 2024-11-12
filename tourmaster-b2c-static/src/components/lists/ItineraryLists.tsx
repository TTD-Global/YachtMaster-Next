import React from 'react'
import { PackageItineraryProps } from '@/utils/types';
import { IconInfoCircle } from '@/components/icons';
import { cn } from '@/helpers/clsx';
import { ItineraryListsItem } from '@/components/common';

interface ItineraryListProps {
    className?:string;
    lists: PackageItineraryProps[] | undefined;
}

const ItineraryLists:React.FC<ItineraryListProps> = ({
    className,
    lists
}) => {
    // console.log("Itinerary : ", lists)
  return (
    
    <div className={cn(`flex flex-col gap-3 mb-6 `, className)}>
        {lists?.map((list, index) => (
            <div className="flex" key={index}>
                <ItineraryListsItem icons={index === 0 || index ===lists.length -1 ? "no" : "yes"} list={list}/>
            </div>
        ))}
        <div className="flex gap-3">
            <IconInfoCircle className='text-gray-500' />
            <span className="text-[12px] text-gray-500">For reference only. Itineraries are subject to change.</span>
        </div>
    </div>
  )
}

export default ItineraryLists;
