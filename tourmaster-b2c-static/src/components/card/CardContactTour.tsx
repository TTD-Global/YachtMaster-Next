import { cn } from '@/helpers/clsx';
import { CardContactTourProps } from '@/utils/types';
import React from 'react'
import { IconChevronRight } from '@/components/icons'

interface ComponentsProps {
    className?:string;
    item: CardContactTourProps;
}
const CardContactTour:React.FC<ComponentsProps> = ({ className, item }) => {
  return (
    <div className={cn(`p-5 bg-gray-50 rounded-[20px] justify-start items-center gap-4 flex ` , className)}>
        <div className="w-full flex-col justify-between items-center gap-5 inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-3 flex">
            <div className="p-1 bg-sky-100 rounded-full border-8 border-sky-50 justify-start items-center gap-2.5 inline-flex">
              <div className="w-8 h-8 justify-center items-center flex">
                {item.icon}
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-sky-600 text-xl font-medium tracking-tight">{item.header}</div>
              <div className="self-stretch text-gray-500 text-base font-normal tracking-wide">{item.content}</div>
            </div>
          </div>
        </div>

        <div className="w-12 h-12 p-3 rounded-3xl border border-gray-300 justify-center items-center gap-2 inline-flex">
          <div className="w-6 h-6 justify-center items-center flex">
            <div className="w-6 h-6 relative text-[#026AA2]">
              <IconChevronRight />
            </div>
          </div>
        </div>

    </div>
  )
}

export default CardContactTour
