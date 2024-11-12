import { cn } from '@/helpers/clsx';
import React from 'react'
import { DiscList } from '@/components/common';

interface DiscListContentProps {
    className?: string;
    content: string[] | undefined;
    title?: string;
}

const DiscListContent:React.FC<DiscListContentProps> = ({
    className,
    content,
    title,
}) => {
    return (
        <div className="w-full relative overflow-hidden">
            <DiscList title={title} content={content} className={cn(`[&>li]:text-[#1A1A1A]`, className)} />
        </div>
    )
}

export default DiscListContent;