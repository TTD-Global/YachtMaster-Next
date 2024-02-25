import FleetSliderSection from '@/components/section/FleetSliderSection'
import FormInterSection from '@/components/section/FormInterSection'
import TeaserSection from '@/components/section/TeaserSection'
import FleetHomeSection from '@/components/section/fleet/FleetHomeSection'
import TextSection from '@/components/section/fleet/TextSection'
import ImageLayerSection from '@/components/section/home/ImageLayerSection'
import React from 'react'

export default function FeetPage() {
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
    <FleetHomeSection/>
    <FleetSliderSection images={images}/>
    <TextSection/>
    <ImageLayerSection/>
    <FormInterSection/>
    </>
  )
}
