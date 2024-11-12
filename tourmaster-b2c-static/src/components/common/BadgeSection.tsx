import { cn } from '@/helpers/clsx';
import { Tag } from 'antd';
import React from 'react'

interface BadgeSectionProps {
  lists: string[] | undefined;
  className?: string;
}
const BadgeSection:React.FC<BadgeSectionProps> = ({lists, className}) => {
  

  return (
    <div className={cn(`w-full flex flex-wrap gap-y-2 items-center my-2`, className)}>
      {lists?.map((list, key) => (
        <Tag key={key} bordered={false} data-targetid={key} className='tag-popular font-kanit'>{list}</Tag>
      ))}
    </div>
  )
}

export default BadgeSection;
