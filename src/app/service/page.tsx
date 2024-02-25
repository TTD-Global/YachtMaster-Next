import FormInterSection from '@/components/section/FormInterSection'
import TeaserSection from '@/components/section/TeaserSection'
import ImageLayerSection from '@/components/section/home/ImageLayerSection'
import AboutUsSection from '@/components/section/service/AboutUsSection'
import DiscoverSection from '@/components/section/service/DiscoverSection'
import PromisSection from '@/components/section/service/PromisSection'
import ServiceMore2Section from '@/components/section/service/ServiceMore2Section'
import React from 'react'

export default function ServicePage() {
  return (
    <>
      <TeaserSection/>
      <PromisSection/>
      <ServiceMore2Section/>
      <AboutUsSection/>
      <DiscoverSection/>
      <ImageLayerSection/>
      <FormInterSection/>
    </>
  )
}
