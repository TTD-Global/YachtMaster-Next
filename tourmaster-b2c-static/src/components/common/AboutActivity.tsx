import React from 'react'
import { 
    TitlePage 
  } from "@/components/common"
import { IconPeople, IconUserSquare } from '@/components/icons';
import { ActivityProps } from '@/utils/types';


interface AboutActivityProps {
 className?: string;
 content: ActivityProps | undefined;
}

const AboutActivity:React.FC<AboutActivityProps> = ({ className, content}) => {
  const length = content?.option.length;
  return (
    <div className='my-6 '>
        <TitlePage title={"About this activity"} />
        <div className="mt-8 flex flex-col md:flex-row justify-around gap-4 md:gap-0">
          <div className="w-full flex flex-row gap-x-4 items-center">
            <div className="inline-block p-[12px] bg-primary-50 rounded-full">
              <div className="p-[8px] flex justify-center items-center bg-primary-100 rounded-full">
                <IconPeople className='text-primary-600'/>
              </div>
            </div>
            <div className="dd">
            {/* <h3 className="text-[#1A1A1A] font-[500] text-[20px]">{`Live ${content?.guide_info.toLowerCase()}`}</h3> */}
            <h3 className="text-[#1A1A1A] font-[500] text-[20px]">{`Live ${content?.guide_info}`}</h3>
            <span className="text-gray-600 text-[16px]">
                {content?.option.map((item, index) => (
                  `${length === index +1? item : item +", "}`
                ))}
              </span>
            </div>
          </div>
          {content?.private && (
            <div className="w-full flex flex-row gap-x-4 items-center">
              <div className="inline-block p-[12px] bg-primary-50 rounded-full">
                <div className="p-[8px] flex justify-center items-center bg-primary-100 rounded-full">
                  <IconUserSquare className='text-primary-600'/>
                </div>
              </div>
              <div className="dd">
                <h3 className="text-[#1A1A1A] font-[500] text-[20px]">Private or small groups available</h3>
              </div>
            </div>
          )}

        </div>
    </div>
  )
}

export default AboutActivity;
