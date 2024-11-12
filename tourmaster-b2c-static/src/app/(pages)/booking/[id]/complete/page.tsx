"use client";
import React, { useEffect } from 'react'
interface PageProps {
  params: {
    id: number;
  };
}
const Page = ({params}:PageProps) => {
  useEffect(()=> {
    console.log(params.id)
  },[params])
  
  return (
    <div>
      Booking Complete 
    </div>
  )
}

export default Page
