import ImageLayerSection from '@/components/section/home/ImageLayerSection'
import FormPowerSection from '@/components/section/power/FormPowerSection'
import TextSection from '@/components/section/power/TextSection'
import TeaserSection from '@/components/section/speed/TeaserSection'
import FleetSection from '@/components/section/speedboat2/FleetSection'
import FleetEndSection from '@/components/section/speedboat3/FleetEndSection'
import ServiceSection from '@/components/section/speedboat3/ServiceSection'
import React from 'react'

export default function FleetSpeedBoat2Page() {
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
