import { IconCloseCircle, IconTickCircle } from '@/components/icons';
import { cn } from '@/helpers/clsx';
import { PackageIsExcludeProps } from '@/utils/types';
import React from 'react'

interface IncludedListsItemDetailProps {
    className?: string;
    list: PackageIsExcludeProps;
}
const IncludedListsItem:React.FC<IncludedListsItemDetailProps> = ({
    className,
    list
}) => {
  return (
    <>
      {list.type || list.type === 'in'
        ? (<div className={cn(`flex flex-row gap-3 text-success-500 `, className)}><div><IconTickCircle className='w-8 h-8'/></div> <span className="text-[16px] font-[400] text-[#1A1A1A]">{list.title}</span></div>)
        : (<div className={cn(`flex flex-row gap-3 text-error-500 `, className)}><div><IconCloseCircle className='w-8 h-8'/> </div><span className="text-[16px] font-[400] text-[#1A1A1A]">{list.title}</span></div>)
      }
    </>
  )
}

export default IncludedListsItem;