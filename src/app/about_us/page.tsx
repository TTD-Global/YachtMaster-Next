import TeaserSection from '@/components/section/TeaserSection'
import AboutUsSection from '@/components/section/about/AboutUsSection'
import CompanySection from '@/components/section/about/CompanySection'
import DiscoverSection from '@/components/section/about/DiscoverSection'
import PromisSection from '@/components/section/about/PromisSection'
import ShowcaseSection from '@/components/section/about/ShowcaseSection'
import TextSection from '@/components/section/about/TextSection'
import ImageLayerSection from '@/components/section/home/ImageLayerSection'
import PromisEndSection from '@/components/section/home/PromisEndSection'
import React from 'react'

export default function AboutPage() {
  return (
    <>
		<TeaserSection/>
    <TextSection/>
    <PromisSection/>
    <AboutUsSection/>
    <DiscoverSection/>
    <ImageLayerSection/>
    <ShowcaseSection/>
    <CompanySection/>
    {/* <FormAboutSection/> */}
    <PromisEndSection/>
    </>
  )
}
