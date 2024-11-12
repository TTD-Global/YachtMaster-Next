import React, { useRef, useState } from 'react';
import { Modal } from '@/components/ui';
import Button from "@/components/ui/Button";
import IconCloseModal from "@/components/icons/IconCloseModal";
import { IconChevronLeft, IconChevronRight } from "@/components/icons";
import Image from 'next/image';
import { SliderProps } from '@/utils/types';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

interface ModalPhotoGalleryProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  handleCancel: () => void;
  slides: SliderProps[] | undefined;
}
const ModalPhotoGallery:React.FC<ModalPhotoGalleryProps> = ({ isOpen, setIsOpen, handleCancel, slides }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [currentLabel, setCurrentLabel] = useState(1);
  const swiperRef = useRef<any>(null);
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className='max-w-[944px] bg-transparent border-none shadow-none'>
      <div className="w-full flex flex-wrap justify-between items-center pb-4 mb-4 border-b border-gray-300">
        <h3 className='text-white text-[24px] font-[500]'>{`${currentLabel} / ${slides?.length}`}</h3>
        <Button
          variant="tertiary-color" 
          shape={'circle'} 
          size="icon-md"        
          onClick={handleCancel}
          className="bg-translate border-gray-300 "
        >
          <IconCloseModal className="w-[24px] h-[24px]" />
        </Button>
      </div>
            
      <div className='w-full container'>
        <div className="w-full relative ">
          <Swiper
            ref={swiperRef}
            onSlideChange={(swiper) => setCurrentLabel(swiper.activeIndex  + 1)}
            // loop={true}
            spaceBetween={16}
            navigation={false}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 h-[245px] md:h-[531px] transition-all duration-300 ease-in-out"
          >
            {slides?.map((slide, index) => (
              <SwiperSlide key={index} className=''>
                <Image
                  src={slide.imageSrc}
                  fill
                  sizes='(max-width:768px) 100vw, 50vw'
                  alt={slide.imageAlt}
                  className='object-cover rounded-md'
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Button
            variant="tertiary-color" 
            shape={'circle'} 
            size="icon-md"        
            onClick={() => swiperRef?.current?.swiper.slidePrev()}
            className="bg-translate border-gray-300 absolute -left-[55px] top-[50%] -translate-y-[50%]"
          >
            <IconChevronLeft className="w-[24px] h-[24px]" />
          </Button>
          <Button
            variant="tertiary-color" 
            shape={'circle'} 
            size="icon-md"        
            onClick={() => swiperRef?.current?.swiper.slideNext()}
            className="bg-translate border-gray-300 absolute -right-[55px] top-[50%] -translate-y-[50%]"
          >
            <IconChevronRight className="w-[24px] h-[24px]" />
          </Button>
        </div>
        <div className="w-full mt-2">
          <Swiper
            onSwiper={setThumbsSwiper}
            // loop={true}
            spaceBetween={8}
            slidesPerView={8}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {slides?.map((slide, index) => (
              <SwiperSlide key={index} className='min-h-[34px] md:min-h-[104px]'>
                  <Image
                      src={slide.imageSrc}
                      fill
                      sizes='(max-width:768px) 100vw, 50vw'
                      alt={slide.imageAlt}
                      className={`object-cover transition duration-200 rounded-md cursor-pointer ${currentLabel === index + 1? "border-[2px]" : " "}`}
                  />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
    </Modal>
  )
}

export default ModalPhotoGallery;
