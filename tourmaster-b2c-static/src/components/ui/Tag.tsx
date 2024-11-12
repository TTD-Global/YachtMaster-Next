import { cn } from '@/helpers/clsx';
import { Tag, TagProps } from 'antd';
import { FC } from 'react'
interface TagComponentsProps extends TagProps {
    className?: string;
    children?: React.ReactNode;
    checked?: boolean;
}

const TagComponents:FC<TagComponentsProps> = ({ className, checked, children, ...props}) => {
  return (
    <>
    <Tag
        className={cn(`${checked? "bg-primary-500": ""}`, className)}
        {...props}
    >
        {children}
    </Tag>
    </>
  )
}

export default TagComponents;