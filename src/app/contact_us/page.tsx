import TeaserSection from '@/components/section/TeaserSection'
import TeaserSection2 from '@/components/section/TeaserSection2'
import WhereSection from '@/components/section/contact/WhereSection'
import PromisEndSection from '@/components/section/home/PromisEndSection'
import React from 'react'

export default function ContactPage() {
  return (
    <>
      {/* <TeaserSection/> */}
      <TeaserSection2 title="Contact"/>
      <PromisEndSection/>
      <WhereSection/>
    </>
  )
}
