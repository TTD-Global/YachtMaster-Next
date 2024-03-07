import Catamaran2 from '@/assets/icons/catamaran2'
import FleetSliderSection from '@/components/section/FleetSliderSection'
import FleetTextSection from '@/components/section/FleetTextSection'
import FormInterSection from '@/components/section/FormInterSection'
import TeaserSection from '@/components/section/TeaserSection'
import TextRightSection from '@/components/section/TextRightSection'
import ImageLayerSection from '@/components/section/home/ImageLayerSection'
import ServiceSection from '@/components/section/speedboat3/ServiceSection'
import Image from 'next/image'
import React from 'react'

export default function FleetPowerCat() {
  const images = [
    { src: '/images/sliders/catamaran/_0000_IMG_0277.jpg', alt: 'catamaran', key: 1},
    { src: '/images/sliders/catamaran/_0001_IMG_0278.jpg', alt: 'catamaran' , key: 2},
    { src: '/images/sliders/catamaran/_0002_Power_CatamaranArtboard_11.jpg', alt: 'catamaran' , key: 3},
    { src: '/images/sliders/catamaran/_0003_Power_CatamaranArtboard_9.jpg', alt: 'catamaran' , key: 4},
    { src: '/images/sliders/catamaran/_0004_Power_cat.jpg', alt: 'catamaran' , key: 5},
    { src: '/images/sliders/catamaran/_0006_IMG_3399.jpg', alt: 'catamaran' , key: 6},
    { src: '/images/sliders/catamaran/_0007_IMG_3417.jpg', alt: 'catamaran' , key: 7},
    { src: '/images/sliders/catamaran/_0008_IMG_3261.jpg', alt: 'catamaran' , key: 8},
  ];
  return (
    <>
    <TeaserSection/>
    <FleetTextSection 
      // img ={<Catamaran2 className="img-fluid"  alt="" />}
      img ={<Image src={"/images/cards/news_ep_1/card-04.png"} className='rounded-xl img-fluid' alt='Catamaran' width={514} height={499} />}
      numSpeed ="200"
      numPassangers ="48"
      title="Catamaran"
      subtitle="Power Catamaran"
      description= "A blend of power and luxury, providing a comfortable and efficient mode of marine transportation."
    />
    <FleetSliderSection images={images}/> 
    <ServiceSection/>
    {/* <TextRightSection 
      title="Power Catamaran Service" 
      subtitle="Unmatched Power and Performance"
      description= "Powered by high-performance engines, our catamaran is engineered for top speeds and unparalleled acceleration. Experience the rush of the open sea as you push the limits and revel in the thrill of a true power catamaran adventure."
    /> */}
    
    <ImageLayerSection/>
    <FormInterSection/>
    </>
  )
}
