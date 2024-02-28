import FleetSliderSection from '@/components/section/FleetSliderSection'
import FormInterSection from '@/components/section/FormInterSection'
import TeaserSection from '@/components/section/TeaserSection'
import FleetHomeSection from '@/components/section/fleet/FleetHomeSection'
import TextSection from '@/components/section/fleet/TextSection'
import ImageLayerSection from '@/components/section/home/ImageLayerSection'
import React from 'react'

export default function FeetPage() {
  const images = [
    { src: '/sys_img/img/slider/speedboat/5_0002_S__52846610.jpg', alt: 'First', key: 1},
    { src: '/sys_img/img/slider/speedboat/5_0001_S__52846607.jpg', alt: 'Second' , key: 2},
    { src: '/sys_img/img/slider/speedboat/5_0000_S__52846609.jpg', alt: 'Third' , key: 3},
    { src: '/sys_img/img/slider/speedboat/5_0003_S__52846611.jpg', alt: 'Fourth' , key: 4},
    { src: '/sys_img/img/slider/speedboat/5_0004_S__52846612.jpg', alt: 'Five' , key: 5},
    { src: '/sys_img/img/slider/speedboat/5_0005_S__52846614.jpg', alt: 'Six' , key: 6}
  ];
  return (
    <>
		<TeaserSection/>
    <FleetHomeSection/>
    <FleetSliderSection images={images}/>
    <TextSection/>
    <ImageLayerSection/>
    <FormInterSection/>
    </>
  )
}
