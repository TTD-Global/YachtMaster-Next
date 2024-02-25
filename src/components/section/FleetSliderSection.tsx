'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useEffect, useState } from 'react'

export default function FleetSliderSection({images}:any) {
  const [file, setFile]:any = useState(null);

  useEffect(() => {
    console.log(file)
  })
  return (
    <>
      <section className="spacer-b-2">
        <div className="container">
          <section id="image-carousel" className="splide" aria-label="Beautiful Images">
            <div 
              id='element' 
              className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50  bg-[rgba(0,0,0,0.85)] transition ease-in-out duration-300 " 
              style={{ display: file ? 'inline-flex' : 'none'}} onClick={() => setFile(null)} > 
              {file && (
                <div className="inline-block relative">
                  <img className='border-solid border-4 rounded-xl' src={file.src}/>
                  <span className='text-white'>image {file.key} of {images.length}</span>
                </div>
              )}
            </div>
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
                        <img src={image.src} alt={image.alt} className='w-full h-auto rounded-xl' />
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
