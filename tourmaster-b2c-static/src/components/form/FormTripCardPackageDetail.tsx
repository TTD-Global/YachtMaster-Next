import React from 'react';
import { Tag, Collapse, Button } from '@/components/ui';
import { 
  IconArrowDown,
  IconArrowRight,
} from '@/components/icons';
import { IncludedLists, ItineraryLists } from '@/components/lists';
import { PackageIsExcludeProps, PackageItineraryProps, PackageMeetingProps } from '@/utils/types';
import Link from 'next/link';

interface FormTripCardPackageDetailProps {
  className?:string;
  itinerary: PackageItineraryProps[] | undefined;
  description:string;
  title:string;
  include: PackageIsExcludeProps[] | undefined;
  meeting: PackageMeetingProps[] | undefined;
  tags: string[] | undefined;
  isModal?: boolean;
}
const FormTripCardPackageDetail:React.FC<FormTripCardPackageDetailProps> = ({
  itinerary,
  include,
  title,
  description,
  meeting,
  isModal= false,
  tags
}) => {
  const collapse = [
    {
      key: '1',
      label: <h3 className="text-[20px] font-[500]">{`${title}`}</h3>,
      children: <>
        {description && (<p className='mb-4 text-[#1A1A1A]'>{`${description}`}</p>)}
        <div className="flex flex-col gap-2 mb-6">
          {/* {meeting?.map((item:any, index:any) => {
            return <div className="block" key={index}>
                      {meeting?.length > 1 
                        ? <span className="tex-[20px] font-[500]">{`${item?.title} :`}</span>
                        : ""
                      }
                      <p className="mt-2">
                        {item?.map 
                          ? <Link href={`${item?.map}`} target='_blank' className='mt-2'>
                            <Button 
                              variant={`tertiary-color`} 
                              shape={'round'} 
                              className='border-gray-300 tracking-[1.25px] px-[16px] py-[8px] h-[40px]'
                            >
                                Open in Google Maps <IconArrowRight className='ml-2' />
                            </Button>
                          </Link>
                          : <h3 className="tex-[20px] font-[500]">{`${item?.title}`}</h3>}
                      </p>
                  </div>
          })} */}
          {/* 
          <div className="block">
            <span className="tex-[20px] font-[500]">Pickup point 1 :</span>
            <p className="mt-2">
              <Link href={`${meeting?.map}`} target='_blank' className='mt-2'>
                <Button 
                  variant={`tertiary-color`} 
                  shape={'round'} 
                  className='border-gray-300 px-4'
                >
                    Open in Google Maps <IconArrowRight className='ml-2' />
                </Button>
              </Link>
            </p>
          </div> 
          */}
        </div>
      </>,
    },
  ];
  
  if(itinerary?.length !== 0 ) {
    collapse.push(
      {
        key: '2',
        label: <h3 className="text-[20px] font-[500]">{`Itinerary`}</h3>,
        children: <ItineraryLists lists={itinerary}/>,
        // children: <>{itinerary?.length}</>,
      },
      {
        key: '3',
        label: <h3 className="text-[20px] font-[500]">{`What's included`}</h3>,
        children: <IncludedLists lists={include}/>,
      },
    )
  } else {
    collapse.push(
      {
        key: '3',
        label: <h3 className="text-[20px] font-[500]">{`What's included`}</h3>,
        children: <IncludedLists lists={include}/>,
      },
    )
  }

  return (
    <>
    {isModal && <div className="w-full mb-4 "><span className="text-[#1a1a1a] text-[20px] font-[500] tracking-[0.15px]">Day Trip without Transfer excluding National Park Fee</span></div>}
      <div className="flex mb-4 flex-wrap gap-2">
        {tags?.map((item,index) => (
          <Tag key={index} color="default" className='rounded-full text-[12px] font-[300] font-kanit mx-0 border-none bg-gray-100'>{`${item}`}</Tag>
        ))}
      </div>
      <div className="">
        <Collapse 
          items={collapse} 
          bordered={false} 
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => (
            <div
              className={`transition duration-200 ease-in-out text-[#2A2A2A] ${
                isActive ? "rotate-0" : "-rotate-180"
              }`}
            >
              <IconArrowDown className='h-[20px] w-[20px]' />
            </div>
          )}
        />
      </div>
    </>
  )
}

export default FormTripCardPackageDetail