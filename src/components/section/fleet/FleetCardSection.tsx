import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function FleetCardSection(prop:any) {
  const { items } = prop;
  return (
    <>
      <section className="p-spacer-b-2 position-relative">
        <div className="container">
          <h2 className="text-center spacer-b">Our Fleet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-self-center">
          {/* <div className="row row-cols-3 md:row-cols-3 g-2 g-sm-4 g-lg-5 justify-center"> */}
            {items?.map((item:any, index:number) => (
              <div key={index}>
                <div className="col item-1 relative w-full">
                  <Link href={item?.link} className='w-full'>
                    <div className="bg-cover bg-center pb-[85%] rounded-2xl" style={{ backgroundImage: `url(${item.image})` }}>
                      <div className="absolute bottom-0 p0-2">
                        <div
                          className="
                          bg-gradient-to-r 
                          from-white/80 w-full 
                          rounded-md 
                          flex 
                          py-3 
                          pr-[6rem] 
                          pl-3 
                          m-3
                          "
                        >
                          <div className="relative bg-translate before:content-[''] before:absolute before:h-full before:right-[-1rem]  before:w-[2px] before:bg-[#fafafa] before:drop-shadow-md">
                            <Image
                              className="h-[65px] w-auto"
                              src={"/images/logo/logo_png.png"}
                              alt='logo yacht master'
                              width={100}
                              height={80}
                            />
                          </div>
                          <div className="relative pl-[1.5rem] font-display text-white drop-shadow-md">
                            <span className="font-normal text-[32px]">{item.title}</span>
                            <br />
                            {item?.engine && (
                              <span>{item.engine} engine</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
