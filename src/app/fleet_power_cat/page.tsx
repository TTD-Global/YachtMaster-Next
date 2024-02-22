import ImageLayerSection from '@/components/section/home/ImageLayerSection'
import FleetSection from '@/components/section/power/FleetSection'
import FormPowerSection from '@/components/section/power/FormPowerSection'
import TeaserSection from '@/components/section/power/TeaserSection'
import TextSection from '@/components/section/power/TextSection'
import FleetEndSection from '@/components/section/speedboat3/FleetEndSection'
import ServiceSection from '@/components/section/speedboat3/ServiceSection'
import React from 'react'

export default function FleetPowerCat() {
  return (
    <>
    <TeaserSection/>
    <FleetSection/>
    {/*  slider */}
    <FleetEndSection/> 
    {/* end slider */}
    <ServiceSection/>
    <TextSection/>
    <ImageLayerSection/>
    <FormPowerSection/>
    </>
  )
}
