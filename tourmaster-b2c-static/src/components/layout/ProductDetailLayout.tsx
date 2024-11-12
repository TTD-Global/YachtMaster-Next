import { cn } from '@/helpers/clsx';
import React from 'react'

interface ProductDetailLayoutProps {
    children: React.ReactNode;
    rightContent?: React.ReactNode;
    className?: string;
}
const ProductDetailLayout:React.FC<ProductDetailLayoutProps> = ({children, rightContent, className}) => {
  return (
    <>
    <div className={cn(`grid grid-cols-1 auto-rows-auto md:grid-cols-3 grid__product--layout gap-8`, className)}>
        <div>{children}</div>
        <div>{rightContent}</div>
    </div>
    </>
  )
}

export default ProductDetailLayout;