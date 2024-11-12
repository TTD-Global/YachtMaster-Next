import { ContactForm } from '@/components/form'
import { IconEmailColor, IconPhone, IconWhatsapp } from '@/components/icons'
import { ListsCardContactTour } from '@/components/lists'
import React from 'react'

const Page = () => {
  return (
    <>
      <div className="w-[1216px] h-[102px] flex-col justify-start items-start gap-12 inline-flex">
        <div className="flex-col justify-start items-start gap-5 flex">
          <div className="self-stretch h-14 flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch">
              <span className="text-slate-700 text-[34px] font-normal tracking-tight">Contact </span>
              <span className="text-sky-500 text-[34px] font-normal tracking-tight">Tour Master</span>
            </div>
          </div>
          <div className="self-stretch text-gray-500 text-base font-normal tracking-tight">You can contact us via the following methods:</div>
        </div>
      </div>
      <ListsCardContactTour 
        className='max-w-[1216px] gap-8 grid grid-cols-2 py-10 mb-10 rounded-2xl'
        items={[
          {
            icon: <IconWhatsapp />,
            header: "Whatsapp",
            content: "+66 622186466"
          },
          {
            icon: <IconEmailColor />,
            header: "Send an email",
            content: "tourmaster@ttdthailand.com"
          },
          {
            icon: <IconPhone />,
            header: "Call us",
            content: "+66 622186466"
          },
          {
            icon: <IconPhone />,
            header: "Our Location",
            content: "Plex bangna 90/53 Moo 15 Bangna-Trad Road, Bangkaew, Bangpi, Samutprakarn 10540"
          },
        ]} 
      />
      <div className="w-[1216px] h-[102px] flex-col justify-start items-start gap-12 inline-flex">
        <div className="flex-col justify-start items-start gap-5 flex">
          <div className="self-stretch h-14 flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch text-slate-700 text-[34px] font-normal tracking-tight">Get in touch</div>
          </div>
          <div className="self-stretch text-gray-500 text-base font-normal tracking-tight">We’d love to hear from you. Please fill out this form.</div>
        </div>
      </div>
      <ContactForm/>
    </>
  )
}
export default Page;
