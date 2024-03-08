import SpeedBoatSVG from '@/assets/icons/speed-boat'
import FleetSliderSection from '@/components/section/FleetSliderSection'
import FleetTextSection from '@/components/section/FleetTextSection'
import FormInterSection from '@/components/section/FormInterSection'
import TeaserSection from '@/components/section/TeaserSection'
import TeaserSection2 from '@/components/section/TeaserSection2'
import TextRightSection from '@/components/section/TextRightSection'
import ImageLayerSection from '@/components/section/home/ImageLayerSection'
import ServiceSection from '@/components/section/speedboat3/ServiceSection'
import React from 'react'

export default function FleetSailingPage() {
  const images = [
    { src: '/images/sliders/sailing_cat/_0000_4.jpg', alt: 'sailingcat', key: 1},
    { src: '/images/sliders/sailing_cat/_0001_3.jpg', alt: 'sailingcat' , key: 2},
    { src: '/images/sliders/sailing_cat/_0002_2.jpg', alt: 'sailingcat' , key: 3},
    { src: '/images/sliders/sailing_cat/_0003_1.jpg', alt: 'sailingcat' , key: 4},
  ];
  return (
    <>
    {/* <TeaserSection/> */}
    <TeaserSection2 title="Sailing Catamaran"/>
    <FleetTextSection 
      img ={<SpeedBoatSVG className="img-fluid"  alt=""  />}
      numSpeed ="250"
      numPassangers ="12"
      title="Speed Boat"
      subtitle="Speed Boat 3 Engine"
      description= "Boasting unmatched speed and agility, our watercraft ensures a fast and exhilarating experience on the water, making up the perfect blend of power and maneuverability for an adrenaline-pumping adventure."
    />
    <FleetSliderSection images={images}/>  
    <ServiceSection/>
    <div className="p-spacer-b-2"></div>
    {/* <TextRightSection 
      title="Sailing Catamaran Service" 
      subtitle="Smooth Sailing Experience"
      description= "Experience the tranquility of sailing on our spacious catamaran, designed for stability and comfort. The twin-hull configuration ensures a smooth journey, allowing you to savor the beauty of the ocean without compromising on luxury."
    />
    <ImageLayerSection/>
    <FormInterSection/> */}
    </>
  )
}
