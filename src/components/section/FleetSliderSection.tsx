'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useEffect, useRef, useState } from 'react'

export default function FleetSliderSection({images}:any) {
  const [file, setFile]:any = useState(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const childrenPrevRef = useRef<HTMLDivElement>(null);
  const childrenNextRef = useRef<HTMLDivElement>(null);
  const imagRef = useRef<HTMLImageElement>(null);

  const handlePrevItem = (event:any) => {

    let newKey:any = event-1;
    if(newKey < 1) {
      newKey = 1;
    }
    const image = images.find((image:any) => image.key === newKey);
    // const image2 = [...images.filter((evt:any) => evt.key === newKey)]
    imagRef?.current?.classList.add("fadeOut");
    setTimeout(() => {
      imagRef?.current?.classList.remove("fadeOut");
      setFile(image)
      imagRef?.current?.classList.add("fadeIn");
    }, 500);

  };
  const handleNextItem = (event:any) => {
    // const divNode = imagRef.current;
    // divNode !== null && divNode.classList.add("fadeOut");
    let newKey:any = event+1;
    if(newKey > images.length) {
      newKey = images.length;
    }
    const image = images.find((image:any) => image.key === newKey);
    imagRef?.current?.classList.add("fadeOut");
    setTimeout(() => {
      imagRef?.current?.classList.remove("fadeOut");
      setFile(image)
      imagRef?.current?.classList.add("fadeIn");
    }, 500);
  };

  // useEffect(() => {
  //   if(file?.key) {
  //     console.log(file?.key)
  //   }
  // })
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        parentRef.current?.contains(event.target) &&
        childrenPrevRef?.current &&
        !childrenPrevRef?.current.contains(event.target) &&
        childrenNextRef?.current &&
        !childrenNextRef?.current.contains(event.target)
        
      ) {
        setFile(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <section className="spacer-b-2">
        <div className="container">
          <section id="image-carousel" className="splide" aria-label="Beautiful Images">
          {file && (
            <div 
              id='element'
              ref={parentRef} 
              className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50  bg-[rgba(0,0,0,0.85)] transition ease-in-out duration-300 " 
              style={{ display: file ? 'inline-flex' : 'none'}} 
            > 
                <div ref={childrenPrevRef} className="text-[#fff] pr-2" onClick={() => handlePrevItem(file.key)}>Prev</div>
                <div className="inline-block relative">
                  <div className="border-solid border-4 rounded-xl bg-white">
                    <img ref={imagRef} className='rounded-lg' src={file.src}/>
                  </div>
                  <span className='text-white'>image {file.key} of {images.length}</span>
                </div>
                <div ref={childrenNextRef}  className="text-[#fff] pl-2" onClick={()=> handleNextItem(file.key)}>Next</div>
            </div>
             )}
            <div className='container'>
              <Swiper
                navigation
                slidesPerView={3}
                spaceBetween={30}
                pagination={{ type: 'fraction' }}
                modules={[Navigation]}
                // onSwiper={swiper => console.log(swiper)}
                // className='h-96 w-full rounded-lg'
                className='w-full rounded-lg'
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  400:{
                    slidesPerView:1,
                  },
                  639: {
                    slidesPerView: 1,
                  },
                  865:{
                    slidesPerView:2
                  },
                  1000:{
                    slidesPerView:2
                  },
                  1500:{
                    slidesPerView:3
                  },
                  1700:{
                    slidesPerView:3
                  }
                }}
              >
                {images.map((image:any, index:any) => (
                  <SwiperSlide key={index}>
                    <div className='flex h-full w-full items-center justify-center splide_image_round cursor-pointer' onClick={() => setFile({...image, key: index+1})}>
                        <img  src={image.src} alt={image.alt} className='w-full h-auto rounded-xl' />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
