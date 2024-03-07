import FleetSliderSection from '@/components/section/FleetSliderSection'
import FleetTextSection from '@/components/section/FleetTextSection'
import TextRightSection from '@/components/section/TextRightSection'
import ImageLayerSection from '@/components/section/home/ImageLayerSection'
import TeaserSection from '@/components/section/TeaserSection'
import ServiceSection from '@/components/section/speedboat3/ServiceSection'
import React from 'react'
import FormInterSection from '@/components/section/FormInterSection'
import SpeedBoatSVG from '@/assets/icons/speed-boat'
import Image from 'next/image'

export default function FleetSpeedBoatPage() {
  const images = [
    { src: '/images/sliders/speedboat_1/_0000__MG_1121-2.jpg', alt: ''},
    { src: '/images/sliders/speedboat_1/_0001__MG_1118-2.jpg', alt: '' },
    { src: '/images/sliders/speedboat_1/_0003__MG_1110-2.jpg', alt: '' },
    { src: '/images/sliders/speedboat_1/_0004__MG_1108-2.jpg', alt: '' },
    { src: '/images/sliders/speedboat_1/_0005__MG_1107-2.jpg', alt: '' },
  ];
  return (
    <>
    <TeaserSection/>
    <FleetTextSection 
      img ={<Image src={"/images/cards/news_ep_1/card-01.png"} className='rounded-xl img-fluid' alt='Catamaran' width={514} height={499} />}
      numSpeed ="250"
      numPassangers ="12"
      title="Speed Boat"
      subtitle="Speed Boat 1 Engine"
      description= " Swift and agile, perfect for intimate journeys and coastal explorations."
    />
    <FleetSliderSection images={images}/> 
    <ServiceSection/>
    {/* <TextRightSection 
      title="Speed Boat Service" 
      subtitle="Fast  and Exciting"
      description= "Swift and agile, perfect for intimate journeys and coastal explorations."
    /> */}
    <ImageLayerSection/>
    <FormInterSection/>
    </>
  )
}
