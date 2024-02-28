import FleetSliderSection from '@/components/section/FleetSliderSection'
import FleetTextSection from '@/components/section/FleetTextSection'
import TextRightSection from '@/components/section/TextRightSection'
import ImageLayerSection from '@/components/section/home/ImageLayerSection'
import TeaserSection from '@/components/section/TeaserSection'
import ServiceSection from '@/components/section/speedboat3/ServiceSection'
import React from 'react'
import FormInterSection from '@/components/section/FormInterSection'

export default function FleetSpeedBoat2Page() {
  const images = [
    { src: '/sys_img/img/slider/speedboat/5_0002_S__52846610.jpg', alt: '', key: 1},
    { src: '/sys_img/img/slider/speedboat/5_0005_S__52846614.jpg', alt: '' , key: 2},
    { src: '/sys_img/img/slider/speedboat/5_0000_S__52846609.jpg', alt: '' , key: 3},
    { src: '/sys_img/img/slider/speedboat/5_0007_RemoteMediaFile_6619898_0_2022_07_27_15_29_32 2.jpg', alt: '' , key: 4},
    { src: '/sys_img/img/slider/speedboat/5_0008_Photo_6619834_DJI_698_jpg_4148784_0_2022727113042_photo_original.jpg', alt: '', key: 5 },
    { src: '/sys_img/img/slider/speedboat/5_0001_S__52846607.jpg', alt: '' , key: 6},
    { src: '/sys_img/img/slider/speedboat/5_0003_S__52846611.jpg', alt: '' , key: 7},
    { src: '/sys_img/img/slider/speedboat/5_0004_S__52846612.jpg', alt: '' , key: 8},
    { src: '/sys_img/img/slider/speedboat/5_0006_S__52846620.jpg', alt: '' , key: 9},
  ];
  return (
    <>
    <TeaserSection/>
    <FleetTextSection 
      img ="/sys_img/img/fleet/speed_boat_2.svg"
      numSpeed ="250"
      numPassangers ="12"
      title="Speed Boat"
      subtitle="Speed Boat 2 Engine"
      description= "Increased power for a dynamic and thrilling ride, ideal for island-hopping adventures"
    />
    <FleetSliderSection images={images}/>
    <ServiceSection/>
    <TextRightSection 
      title="Speed Boat Service" 
      subtitle="Fast and Exciting"
      description= "Swift and agile, perfect for intimate journeys and coastal explorations."
    />
    <ImageLayerSection/>
    <FormInterSection/>
    </>
  )
}
