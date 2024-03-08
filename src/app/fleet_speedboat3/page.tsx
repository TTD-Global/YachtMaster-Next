import SpeedBoatSVG from '@/assets/icons/speed-boat'
import FleetSliderSection from '@/components/section/FleetSliderSection'
import FleetTextSection from '@/components/section/FleetTextSection'
import FormInterSection from '@/components/section/FormInterSection'
import TeaserSection from '@/components/section/TeaserSection'
import TeaserSection2 from '@/components/section/TeaserSection2'
import TextRightSection from '@/components/section/TextRightSection'
import ImageLayerSection from '@/components/section/home/ImageLayerSection'
import ServiceSection from '@/components/section/speedboat3/ServiceSection'
import Image from 'next/image'
import React from 'react'

export default function FleetSpeedBoat3Page() {
  const images = [
    { src: '/images/sliders/speedboat/5_0002_S__52846610.jpg', alt: 'Speedboat3#1', key: 1},
    { src: '/images/sliders/speedboat/5_0001_S__52846607.jpg', alt: 'Speedboat3#2', key: 2},
    { src: '/images/sliders/speedboat/5_0000_S__52846609.jpg', alt: 'Speedboat3#3', key: 3},
    { src: '/images/sliders/speedboat/5_0003_S__52846611.jpg', alt: 'Speedboat3#4', key: 4},
    { src: '/images/sliders/speedboat/5_0004_S__52846612.jpg', alt: 'Speedboat3#5', key: 5},
    { src: '/images/sliders/speedboat/5_0005_S__52846614.jpg', alt: 'Speedboat3#6', key: 6}
  ];
  return (
    <>
      <TeaserSection2 title="Speed Boat"/>
      <FleetTextSection 
        img ={<Image src={"/images/cards/news_ep_1/card-03.png"} className='rounded-xl img-fluid' alt='Catamaran' width={514} height={499} />}
        numSpeed ="90"
        numPassangers ="47"
        title="Speed Boat"
        subtitle="Speed Boat 3 Engine"
        description= "Unmatched speed and agility, ensuring a fast and exhilarating experience on the water."
      />
      <FleetSliderSection images={images}/>
      <ServiceSection/>
      <div className="p-spacer-b-2"></div>
      {/* <TextRightSection 
        title="Your Speed Boat Journy" 
        subtitle="Fast and Exciting"
        description= "Swift and agile, perfect for intimate journeys and coastal explorations."
      /> 
      <ImageLayerSection/>
      <FormInterSection/>
      */}
    </>
  )
}
