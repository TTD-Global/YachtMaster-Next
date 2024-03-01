import Catamaran2 from '@/assets/icons/catamaran2'
import FleetSliderSection from '@/components/section/FleetSliderSection'
import FleetTextSection from '@/components/section/FleetTextSection'
import FormInterSection from '@/components/section/FormInterSection'
import TeaserSection from '@/components/section/TeaserSection'
import TextRightSection from '@/components/section/TextRightSection'
import ImageLayerSection from '@/components/section/home/ImageLayerSection'
import ServiceSection from '@/components/section/speedboat3/ServiceSection'
import React from 'react'

export default function FleetPowerCat() {
  const images = [
    { src: '/images/sliders/catamaran/_0000_IMG_0277.jpg', alt: 'catamaran', key: 1},
    { src: '/images/sliders/catamaran/_0001_IMG_0278.jpg', alt: 'catamaran' , key: 2},
    { src: '/images/sliders/catamaran/_0002_Power CatamaranArtboard 11.jpg', alt: 'catamaran' , key: 3},
    { src: '/images/sliders/catamaran/_0003_Power CatamaranArtboard 9.jpg', alt: 'catamaran' , key: 4},
    { src: '/images/sliders/catamaran/_0005_Krabi Cruise10.jpg', alt: 'catamaran' , key: 5},
    { src: '/images/sliders/catamaran/_0006_IMG_3399.jpg', alt: 'catamaran' , key: 6},
    { src: '/images/sliders/catamaran/_0007_IMG_3417.jpg', alt: 'catamaran' , key: 7},
    { src: '/images/sliders/catamaran/_0008_IMG_3261.jpg', alt: 'catamaran' , key: 8},
  ];
  return (
    <>
    <TeaserSection/>
    <FleetTextSection 
      img ={<Catamaran2 className="img-fluid"  alt="" />}
      numSpeed ="200"
      numPassangers ="48"
      title="Catamaran"
      subtitle="Power Catamaran"
      description= "Fusing power and luxury seamlessly, our watercraft offers a comfortable and efficient mode of marine transportation, ensuring a delightful experience on the water."
    />
    <FleetSliderSection images={images}/> 
    <ServiceSection/>
    <TextRightSection 
      title="Power Catamaran Service" 
      subtitle="Unmatched Power and Performance"
      description= "Powered by high-performance engines, our catamaran is engineered for top speeds and unparalleled acceleration. Experience the rush of the open sea as you push the limits and revel in the thrill of a true power catamaran adventure."
    />
    <ImageLayerSection/>
    <FormInterSection/>
    </>
  )
}
