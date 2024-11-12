"use client";

import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from 'next/navigation';
// import useFetchProductDetails from "@/hooks/product-detail";
import Cookies from 'universal-cookie';
import { Control, Controller } from "react-hook-form";
import {
  FormDatePicker,
  FormRadioCardSkeleton,
} from "@/components/ui";
import { FromRadioGTripCard } from "@/components/form";
import { ProductDetailLayout } from "@/components/layout";
import { data_package } from '@/utils/simple-data';
import { UseElementOnChecker, useElementOnScreen } from '@/hooks';


interface DayTripSectionProps {
  id: string | number;
  province: string[];
  dates: string[] | undefined;
  checkDate?:any;
  checkerRef: any;
  setOnscreen: any
  setIsShow?: any;
  setHeight?: any;
  image: string | undefined;
  control: Control<any>;
  setValue: any;
  handleSubmit: any;
  watch: any;
  errors?: any;

}
const DayTripSection:React.FC<DayTripSectionProps> = ({
  id,
  dates,
  checkDate,
  checkerRef,
  setOnscreen,
  setIsShow,
  setHeight,
  image,
  // control,
  // setValue,
  // handleSubmit,
  // watch,
  // errors,
  province
}) => {
  // const [checkDate, setCheckDate] = useState<any>(null);
  const cookies = new Cookies();
  const currency = cookies.get('NEXT_CURRENCY') || "thb"
  // const key = {
  //   product_id: id,
  //   date_travel: checkDate,
  //   currency: currency,
  //   product_id: '469',
  //   date_travel: '2024-07-30',
  //   currency: 'usd'
  // }
  // const { PackageDetailOne } = useFetchProductDetails();
  // const { data:lists, mutate} = PackageDetailOne(key);
  const lists = data_package;
  const [isDateLoading, setIsDateLoading] = useState(false);
  let router = useRouter();

  const ValidationSchema = zod.object({
    travel_date: zod.string().optional().nullable(),
    product_option_id: zod.string().optional().nullable(),
  }).catchall(zod.any().optional().nullable())

  type FormData = zod.infer<typeof ValidationSchema>;
  const newForm = useForm<FormData>({
    resolver: zodResolver(ValidationSchema),
    defaultValues: {},
  });
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    watch
  } = newForm;

  const [ containerRef, onscreen ] = UseElementOnChecker({ checkerRef });

  // const onChange = () => {
  //   setValue(`product_option_id`, undefined);
  //   setValue(`product_schedule_id`, undefined);
  //   setValue(`quantity`, []);
  //   setCheckDate(watch('travel_date'));
  //   setIsShow(false)
  // }
  // const disabledDate = (current: any) => {
  //   if (!dates) return true;
  //   const formattedCurrentDate = formatDate(new Date(current));
  //   return !dates.some(date => formatDate(new Date(date)) === formattedCurrentDate);
  // };
  // const formatDate = (date: Date) => {
  //   return date ? date.toLocaleString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' }) : null;
  // };


  // useEffect(() => {
  //   mutate()
  //   eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currency])

  // useEffect(() => {
  //   setIsDateLoading(true);
  //   mutate().finally(() => setIsDateLoading(false)); 
  //   eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [checkDate]);

  // console.log("LIST : ", lists)
  React.useEffect(() => {
    console.log("hi : ", onscreen)
    setOnscreen(onscreen);
  },[onscreen])

  return (
    <>
      {/* <ProductDetailLayout>
        <div className='w-full bg-primary-25 p-[24px] rounded-lg' >
          <h3 className='text-[20px] font-[500] tracking-[0.15px] leading-normal'>Please select date</h3>
          <div className="mt-4 flex gap-x-4 flex-wrap">
            <div className="min-w-[260px]" >
              <FormDatePicker
                name="travel_date"
                control={control}
                error={errors}
                disabledDate={disabledDate}
                placeholder='Check availability'
                onChange={onChange}
                className="rounded-full"
                extraVariant='blue'
                dateFormatShow={'DD MMM YYYY'}
              />
            </div>
          </div>
        </div>
      </ProductDetailLayout> */}
      <div className="col-span-3 ">
        {
          isDateLoading 
          ? <FormRadioCardSkeleton/> 
          : (
            <>
            <div className="my-6">Select your options</div>
            <div className="w-full flex flex-col gap-12" ref={containerRef}>
              {
                lists?.map((list, index) => (
                  list.time_slots.length !== 0 && (
                    <FromRadioGTripCard
                      key={index}
                      id={String(index)}
                      control={control}
                      error={errors}
                      setValue={setValue}
                      watch={watch}
                      handleSubmit={handleSubmit}
                      name="product_option_id"
                      options={list}
                      image={image}
                      province={province}
                    />
                  )
                ))
              }
            </div>
            </>
          )
        }
      </div>
    </>
  )
}

export default DayTripSection;