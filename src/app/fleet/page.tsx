import TeaserSection from '@/components/section/TeaserSection'
import FleetEndSection from '@/components/section/fleet/FleetEndSection'
import FleetHomeSection from '@/components/section/fleet/FleetHomeSection'
import TextSection from '@/components/section/fleet/TextSection'
import ImageLayerSection from '@/components/section/home/ImageLayerSection'
import PromisEndSection from '@/components/section/home/PromisEndSection'
import React from 'react'

export default function FeetPage() {
  return (
    <>
		<TeaserSection/>
    <FleetHomeSection/>
    <FleetEndSection/>
    <TextSection/>
    <ImageLayerSection/>
    <PromisEndSection/>
    </>
  )
}
