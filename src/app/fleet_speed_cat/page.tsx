import FleetSliderSection from '@/components/section/FleetSliderSection'
import FleetTextSection from '@/components/section/FleetTextSection'
import TextRightSection from '@/components/section/TextRightSection'
import ImageLayerSection from '@/components/section/home/ImageLayerSection'
import TeaserSection from '@/components/section/TeaserSection'
import ServiceSection from '@/components/section/speedboat3/ServiceSection'
import React from 'react'
import FormInterSection from '@/components/section/FormInterSection'
import SpeedCat2 from '@/assets/icons/speed_cat_2'

export default function FleetSpeedCatPage() {
  
  const images = [
    { src: '/images/sliders/speedcat/_0000_RemoteMediaFile_6619885_0_2022_07_27_13_02_38.jpg', alt: '', key: 1},
    { src: '/images/sliders/speedcat/_0001_RemoteMediaFile_6619879_0_2022_07_27_13_00_58.jpg', alt: '' , key: 2},
    { src: '/images/sliders/speedcat/_0002_RemoteMediaFile_6619868_0_2022_07_27_12_58_40.jpg', alt: '' , key: 3},
    { src: '/images/sliders/speedcat/_0003_RemoteMediaFile_6619831_0_2022_07_27_11_29_20.jpg', alt: '' , key: 4},
    { src: '/images/sliders/speedcat/_0004_RemoteMediaFile_6619821_0_2022_07_27_11_27_20.jpg', alt: '' , key: 5},
    { src: '/images/sliders/speedcat/_0005_RemoteMediaFile_6619812_0_2022_07_27_11_24_40.jpg', alt: '' , key: 6},
    { src: '/images/sliders/speedcat/_0006_Photo_6619853_DJI_717_jpg_4182696_0_202272712554_photo_original.jpg', alt: '' , key: 7},
    { src: '/images/sliders/speedcat/_0007_Photo_6619824_DJI_688_jpg_4522321_0_202272711286_photo_original.jpg', alt: '' , key: 8},
    { src: '/images/sliders/speedcat/_0008_IMG_3261.jpg', alt: '' },
  ];

  return (
    <>
    <TeaserSection/>
    <FleetTextSection 
      img ={<SpeedCat2 className="img-fluid"  alt=""  />}
      numSpeed ="250"
      numPassangers ="24"
      title="Speed Catamaran"
      subtitle="Speed Catamaran"
      description= "Embark on a thrilling journey with our high-performance speed catamaran, the epitome of speed and luxury in the world of maritime adventures."
    />
    <FleetSliderSection images={images}/> 
    <ServiceSection/>
    <TextRightSection 
      title="Speed Boat Service" 
      subtitle="Fast and Exciting"
      description= "Powered by high-performance engines, our catamaran is built to conquer the waters with unmatched acceleration and top speeds. Feel the rush of adrenaline as you push the limits and experience the thrill of a truly high-speed adventure."
    />
    <ImageLayerSection/>
    <FormInterSection/>
    </>
  )
}
