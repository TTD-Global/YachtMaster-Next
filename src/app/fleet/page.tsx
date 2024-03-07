'use client'
import FleetSliderSection from '@/components/section/FleetSliderSection'
import FormInterSection from '@/components/section/FormInterSection'
import TeaserSection from '@/components/section/TeaserSection'
import TeaserSection2 from '@/components/section/TeaserSection2'
import FleetCardSection from '@/components/section/fleet/FleetCardSection'
import FleetHomeSection from '@/components/section/fleet/FleetHomeSection'
import TextSection from '@/components/section/fleet/TextSection'
import ImageLayerSection from '@/components/section/home/ImageLayerSection'
import React from 'react'

export default function FeetPage() {
  const images = [
    { src: '/images/sliders/speedboat/5_0002_S__52846610.jpg', alt: 'Speedboat#1', key: 1},
    { src: '/images/sliders/speedboat/5_0001_S__52846607.jpg', alt: 'Speedboat#2', key: 2},
    { src: '/images/sliders/speedboat/5_0000_S__52846609.jpg', alt: 'Speedboat#3', key: 3},
    { src: '/images/sliders/speedboat/5_0003_S__52846611.jpg', alt: 'Speedboat#4', key: 4},
    { src: '/images/sliders/speedboat/5_0004_S__52846612.jpg', alt: 'Speedboat#5', key: 5},
    { src: '/images/sliders/speedboat/5_0005_S__52846614.jpg', alt: 'Speedboat#6', key: 6}
  ];

  const items = [
    { image: '/images/cards/news_ep_1/card-01.png', link: '/fleet_speedboat1', title: 'Speed Boat', engine: '1', key: 1},
    { image: '/images/cards/news_ep_1/card-02.png', link: '/fleet_speedboat2', title: 'Speed Boat', engine: '2', key: 2},
    { image: '/images/cards/news_ep_1/card-03.png', link: '/fleet_speedboat3', title: 'Speed Boat', engine: '3', key: 3},
    { image: '/images/cards/news_ep_1/card-04.png', link: '/fleet_power_cat', title: 'Power Catamaran', engine: '', key: 4},
    { image: '/images/cards/news_ep_1/card-05.png', link: '/fleet_speed_cat', title: 'Speed Catamaran', engine: '', key: 5},
  ];
  return (
    <>
      <TeaserSection2/>
      <FleetCardSection items={items}/>
      {/* <FleetSliderSection images={images}/>
      <TextSection/>
      <ImageLayerSection/>
      <FormInterSection/> */}
    </>
  )
}
