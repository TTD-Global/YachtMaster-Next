"use client"
import { Carousel, FormInputSearchHome } from '@/components/ui'

import Image from 'next/image';
import { cn } from '@/helpers/clsx';
// import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { data_carousel_slider } from '@/utils/simple-data';

interface HeroSectionProps {
    className?:string;
} 
const HeroSection:React.FC<HeroSectionProps> = ({className}) => {
    // const t = useTranslations("HomePage")
    const [search , setSearch] = useState();
      
    return (
        <>
            <section className={cn(`w-full hero-section h-[516px] overflow-hidden rounded-xl`, className)}>
                <div className="hero-section__bg-image">
                    <Carousel 
                        customArrow={true}
                        speed={1800}
                        autoplay
                        autoplaySpeed={3900}
                        dots={true}
                        infinite={true}
                    >
                        {data_carousel_slider.map((item:any, index) => (
                            <div key={index} className='relative h-[516px] mb-2 overflow-hidden'>
                                <Image
                                    src={item.image}
                                    fill
                                    sizes='(max-width:768px) 100vw, 50vw'
                                    alt={''}
                                    className='object-cover transform group-hover:scale-110 transition-transform duration-500'
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="hero-section__content pt-[119px]">
                    {/* <h1 className="h1-font-size font-[300] text-white leading-[99px]">{t('explore')}</h1> */}
                    <h1 className="h1-font-size font-[300] text-white leading-[99px]">{'explore'}</h1>
                    <h2 className="h2-font-size font-[400] text-white leading-[56px]">
                        Unforgettable Travel <span className="text-primary-500">Experiences.</span> 
                    </h2>
                    <div className="w-full mx-auto px-2 md:px-0 max-w-[580px] leading-6  mt-[65px]"> 
                        <form className="search-btn-fromX"> 
                            <FormInputSearchHome 
                                placeholder="Search for destinations and experiences"
                                name='search'
                                search={search}
                                setSearch={setSearch}
                            />
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
