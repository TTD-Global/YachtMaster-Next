import FleetSliderSection from '@/components/section/FleetSliderSection'
import FleetTextSection from '@/components/section/FleetTextSection'
import TextRightSection from '@/components/section/TextRightSection'
import ImageLayerSection from '@/components/section/home/ImageLayerSection'
import TeaserSection from '@/components/section/TeaserSection'
import ServiceSection from '@/components/section/speedboat3/ServiceSection'
import React from 'react'
import FormInterSection from '@/components/section/FormInterSection'
import SpeedBoat2 from '@/assets/icons/speed_boat_2'
import Image from 'next/image'
import TeaserSection2 from '@/components/section/TeaserSection2'

export default function FleetSpeedBoat2Page() {
  const images = [
    { src: '/images/sliders/speedboat/5_0002_S__52846610.jpg', alt: '', key: 1},
    { src: '/images/sliders/speedboat/5_0005_S__52846614.jpg', alt: '' , key: 2},
    { src: '/images/sliders/speedboat/5_0000_S__52846609.jpg', alt: '' , key: 3},
    { src: '/images/sliders/speedboat_2/5_0007__6619898.jpg', alt: '' , key: 4},
    { src: '/images/sliders/speedboat_2/5_0008_Photo_6619834_DJI_698_jpg_4148784_0_2022727113042_photo_original.jpg', alt: '', key: 5 },
    { src: '/images/sliders/speedboat/5_0001_S__52846607.jpg', alt: '' , key: 6},
    { src: '/images/sliders/speedboat/5_0003_S__52846611.jpg', alt: '' , key: 7},
    { src: '/images/sliders/speedboat/5_0004_S__52846612.jpg', alt: '' , key: 8},
    { src: '/images/sliders/speedboat_2/5_0006_S__52846620.jpg', alt: '' , key: 9},
  ];
  return (
    <>
    <TeaserSection2 title="Speed Boat"/>
    <FleetTextSection 
      img ={<Image src={"/images/cards/news_ep_1/card-02.png"} className='rounded-xl img-fluid' alt='Catamaran' width={514} height={499} />}
      numSpeed ="80"
      numPassangers ="32"
      title="Speed Boat"
      subtitle="Speed Boat 2 Engine"
      description= "Increased power for a dynamic and thrilling ride, ideal for island-hopping adventures."
    />
    <FleetSliderSection images={images}/>
    <ServiceSection/>
    <div className="p-spacer-b-2"></div>
    {/* <TextRightSection 
      title="Speed Boat Service" 
      subtitle="Fast and Exciting"
      description= "Swift and agile, perfect for intimate journeys and coastal explorations."
    /> 
    <ImageLayerSection/>
    <FormInterSection/>
    */}
    </>
  )
}
