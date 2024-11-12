'use client'
import React, { useRef } from 'react'
import { Carousel, CarouselProps } from 'antd';
import { cn } from '@/helpers/clsx';
import { Button } from '@/components/ui'
import { IconChevronLeft, IconChevronRight } from '@/components/icons';

type T = any;
interface CarouselComponentProps extends CarouselProps {
    className?: string;
    children: React.ReactNode;
    customArrow?: boolean;
}

const CarouselComponent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselComponentProps
>(({ className, children, customArrow, ...props }, ref) => {
// const CarouselComponent:React.FC<CarouselComponentProps> = ({ className, children, ...props }) => {
  const sliderRef:React.MutableRefObject<T> = useRef(null);
  const handlePrev = () => sliderRef.current?.prev();
  const handleNext = () => sliderRef.current?.next();
  return (
    <>
      {customArrow && (
        <>
          <Button 
            variant="secondary-color"  
            shape={"circle"} 
            size="icon-lg" 
            className='hero-section__left-button z-10  bg-transparent' 
            onClick={handlePrev}
          >
              <IconChevronLeft className="w-6 h-6"/>
          </Button>
          <Button 
            variant="secondary-color"  
            shape={"circle"} 
            size="icon-lg" 
            className='hero-section__right-button z-10  bg-transparent ' 
            onClick={handleNext}
          >
              <IconChevronRight className="w-6 h-6"/>
          </Button>
        </>
      )}
      <Carousel
        ref={sliderRef}
        {...props}
        className={cn(`my-component `, className)}
      >
        {children}
      </Carousel>
    </>
  )
  
})
CarouselComponent.displayName = "CarouselComponent"

export default CarouselComponent;
