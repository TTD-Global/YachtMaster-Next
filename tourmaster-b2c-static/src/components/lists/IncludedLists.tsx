import { cn } from '@/helpers/clsx';
import { PackageIsExcludeProps } from '@/utils/types';
import React from 'react'
import { IncludedListsItem } from '@/components/common';


interface IncludedListsProps {
    className?:string;
    lists: PackageIsExcludeProps[] | undefined;
}
const IncludedLists:React.FC<IncludedListsProps> = ({
    className,
    lists
}) => {
  return (
    <>
        <div className={cn(`flex flex-col gap-3 mb-6`, className)}>
            {lists?.map((list, index) => (
                <div className="flex" key={index}>
                    <IncludedListsItem list={list} />
                </div>
            ))}
        </div> 
    </>
  )
}

export default IncludedLists;
