import ImageLayerSection from '@/components/section/home/ImageLayerSection'
import FormPowerSection from '@/components/section/power/FormPowerSection'
import TextSection from '@/components/section/power/TextSection'
import FleetSection from '@/components/section/sailing/FleetSection'
import TeaserSection from '@/components/section/speed/TeaserSection'
import FleetEndSection from '@/components/section/speedboat3/FleetEndSection'
import ServiceSection from '@/components/section/speedboat3/ServiceSection'
import React from 'react'

export default function FleetSailingPage() {
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
