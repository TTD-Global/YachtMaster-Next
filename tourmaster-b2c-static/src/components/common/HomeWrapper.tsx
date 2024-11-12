import React from 'react'
import { 
    PartnerSection,
    ServiceSection,
    BannerPageSection,
    HeroSection, 
    PopularSection, 
    AweInspiringSection 
  } from "@/components/home";

const HomeWrapper:React.FC = () => {
  return (
    <>
        <div className="main__container mx-auto">
          <HeroSection className=""/>
          <PopularSection className="mt-20"/>
          <AweInspiringSection className="mt-20"/>
        </div>
        <BannerPageSection className="w-full mt-12"/>
        <div className="main__container  mx-auto">
          <ServiceSection className="mt-12"/>
          <PartnerSection className="my-12"/>
        </div> 

    </>
  )
}

export default HomeWrapper;
