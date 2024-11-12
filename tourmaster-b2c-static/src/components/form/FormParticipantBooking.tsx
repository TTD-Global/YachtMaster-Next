'use client'
import React, { useEffect, useState } from 'react'
import { Button, Tabs } from "@/components/ui";
import { PackageTimeSlotProps } from '@/utils/types';
import { FormParticipantBookingTime } from '@/components/form'
// import Cookies from 'universal-cookie';

interface FormParticipantBookingProps {
  isKey?: any;
  isID?: any;
  parentRef?: any;
  control: any;
  watch: any;
  error?: any;
  setValue: any;
  setTotalPrice: any;
  items: PackageTimeSlotProps[] | undefined;
  setRightContent: any;
  isActive: boolean;

}

const FormParticipantBooking: React.FC<FormParticipantBookingProps> = ({
  control,
  isKey,
  isID,
  parentRef,
  setValue,
  watch,
  setTotalPrice,
  setRightContent,
  items,
  isActive,
  error
}) => {
  // console.log(" DaTA : ", items)
  // const cookies = new Cookies();
  // const currency = cookies.get('NEXT_CURRENCY') || "thb"
  const [activeTab, setActiveTab] = useState<string>("1");
  const timeArr: any = [];
  // const defaultPanes: any = new Array(3).fill(null).map((_, index) => {
  //   const isKey = String(index + 1);
  //   let date = new Date();
  //   let hour = new Intl.DateTimeFormat("tz", { hour: "numeric" }).format(date);
  //   let time =  String(Number(hour) + (1*index)) +":00";
  //   timeArr.push(time)
  //   return {
  //     key: isKey,
  //     label: <Button variant="tertiary-color" shape={'round'} size={"sm"} className={`${activeTab === isKey? "border-primary-700" : "border-gray-300"} text-primary-700 text-[14px] px-3`}>{`${time}`}</Button>,
  //     children: <FormParticipantBookingTime error={error} control={control} participants={participants}  setTotalPrice={setTotalPrice}/>,
  //   };
  // });

  const defaultPanes = items?.map((item, index) => {
    const isKey = String(index + 1);
    // console.log("push id in arr : ", item.id)
    timeArr.push({
      time: item.time,
      schedule_id: item?.id,
      quantity: item.unit,
      content: {
        tags: item.tags,
        description: item.description,
        title: item.title === "" ? "Meeting point" : item.title,
        meeting: item.meeting,
        itinerary: item.itinerary,
        include_exclude: item.include_exclude,
      },
    })
    return {
      key: isKey,
      label: <Button variant="tertiary-color" shape={'round'} size={"sm"} className={`${activeTab === isKey ? "border-none bg-primary-500 !text-white" : "border-gray-300"} text-primary-700 text-[14px] px-[14px] py-[8px] w-[99px] h-[36px] tracking-[1.25px]`}>{`${item.time}`}</Button>,
      children: <FormParticipantBookingTime error={error} control={control} participants={item.unit} setTotalPrice={setTotalPrice} watch={watch} />,
    };
  });

  const handleTabsChange = (key: any,) => {
    // const height = parentRef.current[Number(isID)]?.offsetHeight;
    // console.log(height)
    setActiveTab(key)
    setValue(`time_request`, timeArr[key - 1].time)
    setRightContent(timeArr[key - 1].content)
    setValue(`quantity`, undefined)
    setValue(`product_schedule_id`, timeArr[key - 1].schedule_id)
    timeArr[key - 1].quantity.map((item: any, index: any) => {
      setValue(`quantity.[${String(index)}].qty`, 0)
      setValue(`quantity.[${String(index)}].product_units_id`, item.name)
    })
    setTotalPrice(0)
  }

  useEffect(() => {
    // const height = parentRef.current[Number(isID)]?.offsetHeight;
    if (watch('product_option_id') === isKey) {
      if (timeArr.length > 0) {
        setValue(`time_request`, timeArr[0].time)
        setRightContent(timeArr[0].content)
        setValue(`product_schedule_id`, timeArr[0].schedule_id)
        setValue(`quantity`, undefined)
        timeArr[0].quantity.map((item: any, index: any) => {
          setValue(`quantity.[${String(index)}].qty`, 0)
          setValue(`quantity.[${String(index)}].product_units_id`, item.name)
        })
        setTotalPrice(0)
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // useEffect(() => {
  //   setTotalPrice(0)
  //   if (timeArr.length > 0) {
  //     timeArr[0].quantity?.map((item: any, index: any) => {
  //       setValue(`quantity.[${String(index)}].qty`, 0)
  //       setValue(`quantity.[${String(index)}].product_units_id`, item.name)
  //     })
  //   }
  //   eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currency])

  return (
    <>
      <h3 className="font-[600] text-[16px]">Starting time</h3>
      <Tabs
        defaultActiveKey={"1"}
        items={defaultPanes}
        onChange={handleTabsChange}
        className={`cost-tabs`}
      />
    </>
  )
}

export default FormParticipantBooking;