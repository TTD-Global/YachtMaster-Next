"use client"

import { useState } from "react"
import { IconChevronDown, IconChevronUp } from "@/components/icons"

interface ContentCollapseProps {
  header : string
  content : string | React.ReactNode
}

export const ContentCollapse = ({header, content} : ContentCollapseProps) => {
  const [open, setOpen] = useState(false)
  return (
    <div onClick={() => setOpen(!open)} 
      className={`${open ? "pb-4 border-[#7CD4FD]" : "border-[#D1D4DA]"} w-[1216px] px-8  bg-white rounded-2xl shadow border flex-col justify-start items-start inline-flex cursor-pointer duration-100`}
    >
      <div className="self-stretch h-14 py-4 flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch justify-start items-start inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
            <div className="self-stretch text-gray-900 text-xl font-medium tracking-tight">{header}</div>
          </div>
          <div className="w-6 h-6  justify-center items-center flex">
            <div  className="w-6 h-6 relative">
              {open ? <IconChevronUp className="text-[#7CD4FD]"/> : <IconChevronDown className="#1A1A1A"/>}
            </div>
          </div>
        </div>
      </div>
      {open ?  
        <div className="self-stretch flex-col justify-start items-start flex">
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex">
              <div className="self-stretch flex-col justify-start items-start flex">
                <div className="self-stretch text-zinc-900 text-base font-normal tracking-wide">{content}</div>
              </div>
            </div>
          </div>
        </div>
        : null
      }
    </div>
  )
}