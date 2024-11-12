import { cn } from '@/helpers/clsx';
import React from 'react'

interface DiscListProps {
    className?: string;
    title?: string;
    content: string[] | undefined;
}

const DiscList:React.FC<DiscListProps> = ({
    className,
    title,
    content
}) => {
  return (
    <>
        {title && <h3 className='text-[16px] font-[600] mb-3'>{title}</h3>}
        <div className="description-content">
            <ul className={cn(`list-discX list-insideX text-primary-600 custom-discX`, className)}>
                {content?.map((item, index) => (
                    <li key={index} className='pl-[16px]'><span>{item}</span></li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default DiscList;
