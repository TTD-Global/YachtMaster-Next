import TeaserSection from '@/components/section/TeaserSection'
import PromisEndSection from '@/components/section/home/PromisEndSection'
import FleetEndSection from '@/components/section/speedboat3/FleetEndSection'
import FleetSection from '@/components/section/speedboat3/FleetSection'
import ServiceSection from '@/components/section/speedboat3/ServiceSection'
import TextSection from '@/components/section/speedboat3/TextSection'
import React from 'react'

export default function FleetSpeedBoat3Page() {
  return (
    <>
      <TeaserSection/>
      <FleetSection/>
      {/*  slider */}
      <FleetEndSection/> 
      {/* end slider */}
      <TextSection/>
      <ServiceSection/>
      <PromisEndSection/>
    </>
  )
}
