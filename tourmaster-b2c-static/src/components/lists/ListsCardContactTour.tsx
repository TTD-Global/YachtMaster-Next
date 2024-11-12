import { cn } from '@/helpers/clsx';
import { CardContactTourProps } from '@/utils/types';
import React from 'react'
import { CardContactTour } from '@/components/card';

interface ListsCardContactTourProps {
    className?:string;
    items: CardContactTourProps[],
}
const ListsCardContactTour:React.FC<ListsCardContactTourProps> = ({ className, items }) => {
  return (
    <div className={cn(`w-full ` , className)}>
        {items.map((item)=>(
            <CardContactTour key={item.header} item={item}/>
        ))}
    </div>
  )
}

export default ListsCardContactTour;