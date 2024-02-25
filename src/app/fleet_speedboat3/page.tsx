import FleetSliderSection from '@/components/section/FleetSliderSection'
import FleetTextSection from '@/components/section/FleetTextSection'
import FormInterSection from '@/components/section/FormInterSection'
import TeaserSection from '@/components/section/TeaserSection'
import TextRightSection from '@/components/section/TextRightSection'
import ImageLayerSection from '@/components/section/home/ImageLayerSection'
import ServiceSection from '@/components/section/speedboat3/ServiceSection'
import React from 'react'

export default function FleetSpeedBoat3Page() {
  const images = [
    { src: '/sys_img/img/slider/speedboat/5_0002_S__52846610.jpg', alt: 'First'},
    { src: '/sys_img/img/slider/speedboat/5_0001_S__52846607.jpg', alt: 'Second' },
    { src: '/sys_img/img/slider/speedboat/5_0000_S__52846609.jpg', alt: 'Third' },
    { src: '/sys_img/img/slider/speedboat/5_0003_S__52846611.jpg', alt: 'Fourth' },
    { src: '/sys_img/img/slider/speedboat/5_0004_S__52846612.jpg', alt: 'Five' },
    { src: '/sys_img/img/slider/speedboat/5_0005_S__52846614.jpg', alt: 'Six' }
  ];
  return (
    <>
      <TeaserSection/>
      <FleetTextSection 
        img ="/sys_img/img/fleet/speed_boat.svg"
        numSpeed ="250"
        numPassangers ="12"
        title="Speed Boat"
        subtitle="Speed Boat 3 Engine"
        description= "Fusing power and luxury seamlessly, our watercraft offers a comfortable and efficient mode of marine transportation, ensuring a delightful experience on the water."
      />
      <FleetSliderSection images={images}/>
      <ServiceSection/>
      <TextRightSection 
        title="Your Speed Boat Journy" 
        subtitle="Fast and Exciting"
        description= "Swift and agile, perfect for intimate journeys and coastal explorations."
      />
      <ImageLayerSection/>
      <FormInterSection/>
    </>
  )
}
