import { cn } from '@/helpers/clsx';
import React from 'react'

interface MainLayoutProps {
    className?: string;
    children: React.ReactNode;
}
const MainLayout:React.FC<MainLayoutProps> = ({ className, children}) => {
  return (
    <main className={cn(`w-full`, className)}>{children}</main>
  )
}

export default MainLayout;