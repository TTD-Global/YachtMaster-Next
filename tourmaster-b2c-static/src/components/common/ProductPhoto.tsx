'use client'
import React, { useState } from 'react'
import { Button, Modal } from '@/components/ui'
import { IconGallery } from '@/components/icons';
import Image from 'next/image';
import { SliderProps } from '@/utils/types';
import { ModalPhotoGallery } from '@/components/modal';
import { cn } from '@/helpers/clsx';

interface ProductPhotoProps {
  images: SliderProps[] | undefined;
  className?: string;
}
const ProductPhoto:React.FC<ProductPhotoProps> = ({ images, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCancel = () => {
    setIsOpen(false);
  }
  return (
    <>
      <ModalPhotoGallery isOpen={isOpen} setIsOpen={setIsOpen} handleCancel={handleCancel} slides={images}/>
      <div className={cn(`w-full relative`, className)}>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-2 grid__gallery min-h-[410px] my-4 rounded-2xl overflow-hidden'>
          {
            images?.slice(0, 3).map((item, index) => (
              // <div key={index} className='px-2 w-full bg-gray-200 bg-img-cover' style={{backgroundImage: `url(${item.imageSrc})`}}></div>
              <div className="relative w-full h-full" key={index} >
                <Image
                  src={`${item.imageSrc}`}
                  fill
                  sizes='(max-width:768px) 100vw, 50vw'
                  alt={''}
                  className='rounded-md object-cover'
                />
              </div>
            ))
          }
        </div>
        <Button 
          className='absolute bottom-8 right-8' 
          variant="secondary-color" 
          shape={'round'} 
          onClick={() => setIsOpen(true)}
        >
          <IconGallery className='mr-1.5'/>
          Show all photos
        </Button>
      </div>
    </>
  )
}

export default ProductPhoto;
