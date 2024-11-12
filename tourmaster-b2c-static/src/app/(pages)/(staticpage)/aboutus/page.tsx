
import { PartnerSection } from "@/components/common"
import Image from "next/image"

const AboutUs = () => {
  return (
    <>
      <div className="h-14 flex-col justify-start items-start gap-8 inline-flex">
        <div className="self-stretch h-14 flex-col justify-start items-start gap-12 flex">
          <div className="flex-col justify-start items-start gap-5 flex"> 
            <div className="self-stretch h-14 flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch text-slate-700 text-[34px] font-normal  tracking-tight">About Us</div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8 bg-gray-300" />
      <div className="w-[1216px] text-gray-900 text-2xl font-med ium ">What is Tour Master?</div>
      <div className="w-[1216px] h-[152px] px-8 py-6 my-6 rounded-[16px] bg-[#F5FBFF] flex-col justify-start items-start inline-flex">
        <div className="self-stretch h-[104px] flex-col justify-start items-start flex">
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex">
              <div className="self-stretch h-[104px] flex-col justify-start items-start flex">
                <div className="self-stretch text-zinc-900 text-base font-normal  tracking-wide"> 
                  {`Quality and reliability are top priorities when choosing a travel company, as they greatly impact your travel experience. That's why One Asia is your best choice. We offer a variety of well-planned programs and access to key destinations in Thailand, so you don't have to worry about the details. Plus, our experienced guides speak multiple languages and guarantee an enjoyable journey. You can trust us, as evidenced by the many positive reviews online and over 20,000 bookings made with us`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1280px] h-[640px] flex-col justify-start items-start gap-10 inline-flex">
        <div className="w-[1216px] rounded-2xl justify-between items-start inline-flex">
          <Image width={364} height={300} src="/images/about/1.webp" alt="img"/>
          <Image width={364} height={300} src="/images/about/2.webp" alt="img"/>
          <Image width={364} height={300} src="/images/about/3.webp" alt="img"/>
        </div>
        <div className="w-[1216px] rounded-2xl justify-between items-start inline-flex">
          <Image width={364} height={300} src="/images/about/4.webp" alt="img"/>
          <Image width={364} height={300} src="/images/about/5.webp" alt="img"/>
          <Image width={364} height={300} src="/images/about/6.webp" alt="img"/>
        </div>
      </div>

      <div className="w-[1216px] text-gray-900 text-2xl font-medium mt-8 mb-6">What we promise</div>

      <div className="w-[1280px] h-[640px] flex-col justify-start items-start gap-10 inline-flex">
        <div className="w-[1216px] rounded-2xl justify-between items-start inline-flex">
          <Image width={364} height={300} src="/images/about/7.webp" alt="img"/>
          <Image width={364} height={300} src="/images/about/8.webp" alt="img"/>
          <Image width={364} height={300} src="/images/about/9.webp" alt="img"/>
        </div>
        <div className="w-[1216px] rounded-2xl justify-between items-start inline-flex">
          <Image width={364} height={300} src="/images/about/10.webp" alt="img"/>
          <Image width={364} height={300} src="/images/about/11.webp" alt="img"/>
          <Image width={364} height={300} src="/images/about/12.webp" alt="img"/>
        </div>
      </div>
      <PartnerSection className="my-12" text="text-gray-900 text-2xl font-medium"/>
    </>
  )
}

export default AboutUs

