import SpeedBoatSVG from '@/assets/icons/speed-boat'
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
    { src: '/images/sliders/speedboat/5_0002_S__52846610.jpg', alt: 'Speedboat3#1', key: 1},
    { src: '/images/sliders/speedboat/5_0001_S__52846607.jpg', alt: 'Speedboat3#2', key: 2},
    { src: '/images/sliders/speedboat/5_0000_S__52846609.jpg', alt: 'Speedboat3#3', key: 3},
    { src: '/images/sliders/speedboat/5_0003_S__52846611.jpg', alt: 'Speedboat3#4', key: 4},
    { src: '/images/sliders/speedboat/5_0004_S__52846612.jpg', alt: 'Speedboat3#5', key: 5},
    { src: '/images/sliders/speedboat/5_0005_S__52846614.jpg', alt: 'Speedboat3#6', key: 6}
  ];
  return (
    <>
      <TeaserSection/>
      <FleetTextSection 
        img ={<SpeedBoatSVG className="img-fluid"  alt=""/>}
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
