import TeaserSection from '@/components/section/TeaserSection'
import AboutDistination from '@/components/section/distination/AboutDistination'
import DiscoverSection from '@/components/section/distination/DiscoverSection'
import PromisDistination from '@/components/section/distination/PromisDistination'
import PromisRightSection from '@/components/section/distination/PromisRightSection'
import ShowcaseSection from '@/components/section/distination/ShowcaseSection'
import ImageLayerSection from '@/components/section/home/ImageLayerSection'
import PromisEndSection from '@/components/section/home/PromisEndSection'
import React from 'react'

export default function DistinationPage() {
  return (
    <>
      <TeaserSection/>
      <PromisRightSection/>
      <PromisDistination/>
      <AboutDistination/>
      <DiscoverSection/>
      <ImageLayerSection/>
      <ShowcaseSection/>
      <PromisEndSection/>
    </>
  )
}
