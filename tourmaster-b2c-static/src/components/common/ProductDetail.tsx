'use client'

import React, { useEffect, useRef, useState } from 'react';
import Cookies from 'universal-cookie';
import { motion } from "framer-motion";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { 
  Breadcrumb, 
  TitlePage, 
  BadgeSection, 
  FavoriteSection, 
  ProductPhoto, 
  RelationSection,
  ReviewsSection,
  AboutActivity,
  DayTripSection,
  ProductDetailUseDefault,
  DiscListContent,
  DescriptionContent,
} from '@/components/common';
import {
  FormDatePicker, 
  Collapse,
  Card,
  Button,
  CollapseCustom
} from '@/components/ui';
import { 
  AvailabilityDesOverCard,
  AvailabilitySelectedOptCard
} from '@/components/card';
import { 
  ProductDetailLayout
} from '@/components/layout';
import { formatPriceCurrency, formatLocaleString } from '@/helpers/numberformat';
import Link from "next/link";
import { data_detail } from '@/utils/simple-data';
import { IconArrowDown, IconCalendar } from '@/components/icons';
import { UseElementOnChecker, useElementOnScreen } from '@/hooks';

interface ProductDetailProps {
  id: number;
  province: any;
}
const ProductDetail: React.FC<ProductDetailProps> = ({ id, province }) => {
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
  const collapse: any = [
    // {
    //   key: '1',
    //   label: 'This is panel header 1',
    //   children: <p>{`A dog is a type of domesticated animal. Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`}</p>,
    // },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <p>{`A dog is a type of domesticated animal. Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`}</p>,
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <p>{`A dog is a type of domesticated animal. Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`}</p>,
    },
  ];
  const [checkDate, setCheckDate] = useState<any>(null);
  const [lists, setLists] = useState<any>(data_detail);
  const [items, setItems] = useState<any>([{  title: <Link href={'/'}>Home</Link> }]);
  const myRef = useRef<any>(null)
  const executeScroll = () => myRef.current.scrollIntoView();

  const cookies = new Cookies();
  const currency = cookies.get('NEXT_CURRENCY') || "thb"
  // const { ProductDetailOne } = useFetchProductDetails()
  // const { data: lists, isLoading, mutate } = ProductDetailOne(id, currency)
  const isLoading = false;

  const [isShow , setIsShow] = React.useState(false);
  const [hasOption, setHasOption ] = useState(false);
  const [descriptionRef, isOnscreen ] = useElementOnScreen({ rootMargin: '0px 0px 100px 0px', threshold: 1 });
  const checkerRef:any = React.useRef<any>()
  const [onscreen, setOnscreen] = React.useState(false);
  const [height , setHeight] = React.useState(0);

  const onChange = () => {
    setValue(`product_option_id`, undefined);
    setValue(`quantity`, []);
    setCheckDate(watch('travel_date'));
  }
  const disabledDate = (current:any) => {
    if (lists?.date.some((row:any) => row === current.format('YYYY-MM-DD'))) {
      return false
    }else{
      return current
    }
  };

  const setDefault = ProductDetailUseDefault({lists, setItems, collapse });
  
  return isLoading ? "loading..." : setDefault && (
    <>
    <div className={`w-full grid gap-x-8 [grid-template-areas:'left_content''left_content''right_content'] grid-cols-3`}>
      <Breadcrumb items={items} className='col-span-3'/>
      <TitlePage title={lists?.name} className='capitalize col-span-3' />
      <BadgeSection lists={lists?.badges} className='col-span-3' />
      <FavoriteSection
        rating={lists?.rating}
        review={lists?.review}
        booked={lists?.booked}
        wishlist={lists?.wishlist}
        id={id}
        className='col-span-3'
      />
      <ProductPhoto images={lists?.images} className='col-span-3' />

      <div className="w-full [grid-area:left_content]  min-h-[230px] col-span-3 md:col-span-2">
        <div className="relative bg-primary-25 p-6 rounded-[16px] text-[16px] font-[400] text-gray-600 ">
          <div  ref={descriptionRef} className="overflow-hidden">
            {lists?.description}
          </div>
        </div>
      </div>
      <div ref={checkerRef} className={`w-full [grid-area:right_content] min-h-[230px] sticky top-[104px] left-0 z-50 col-span-3 md:col-span-1 `}>
        {isOnscreen
        ? (
          <motion.div
            key={1}
            layoutId={'layout01'}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[40px] font-bold capitalize"
          >
            <Card className='shadow-none'>
              <p className='mb-6 text-[24px] font-[500] text-gray-500 flex justify-between pb-6 border-b border-gray-200'>
                <span className="text-gray-500 text-[24px] leading-normal font-[500] pr-2">From</span>
                {formatPriceCurrency(lists?.price, currency)}
              </p>
              <Button
                className='btn-availability-check'
                shape={'round'}
                size={'lg'}
                onClick={executeScroll}
              >
                <IconCalendar className='mr-2'/>Check availability
              </Button>
            </Card>
          </motion.div>
        ): onscreen === false && (
          hasOption
            ?
              <motion.div
                key={2}
                layoutId={'layout02'}
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                className="text-[40px] font-bold capitalize"
              >
                <AvailabilitySelectedOptCard
                  currency={currency}
                  price={watch('total_price')}
                  startTime={watch('time_request')}
                  dateTravel={watch('travel_date')}
                  quantity={watch('quantity')}
                  name={lists?.name}
                  optionName={watch('options_name')}
                  onClick={executeScroll}
                  executeScroll={executeScroll}
                />
              </motion.div>
            : 
              <motion.div
                key={5}
                layoutId={'layout05'}
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                className="text-[40px] font-bold capitalize"
              >
                <AvailabilityDesOverCard
                  id={id}
                  onscreen={onscreen}
                  height={height}
                  currency={currency}
                  price={lists?.price}
                  name={lists?.name}
                  description={lists?.description}
                  booked={lists?.booked}
                  rating={lists?.rating}
                  onClick={executeScroll}
                />
              </motion.div>
        )}
      </div>

      <div className='col-span-1 md:col-span-2'>
        <AboutActivity content={lists?.about_activity} />
        <div className="relative"><div ref={myRef} className='absolute -top-[90px]'></div></div>
      </div>
      <div className="col-span-1 md:col-span-2">
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
      </div>
      {checkDate && (
        <DayTripSection 
          id={id} 
          checkDate={checkDate}
          checkerRef={checkerRef}
          setOnscreen={setOnscreen}
          setHeight={setHeight}
          province={province} 
          dates={lists?.date} 
          image={lists?.images[0].imageSrc} 
          control={control}
          errors={errors}
          setValue={setValue}
          watch={watch}
          handleSubmit={handleSubmit}
        />
      )}
      <div className="w-full [grid-area:left_content]  min-h-[230px] col-span-3 md:col-span-2">
        <div className="my-[32px] ">
          <CollapseCustom
            items={collapse}
            bordered={true}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => (
              <div
                className={`transition duration-200 ease-in-out text-[#2A2A2A] ${isActive ? "-rotate-180" : "rotate-0" }`}
              >
                <IconArrowDown className='h-[20px] w-[20px]' />
              </div>
            )}
            className='custom-collapseX'
          /> 
          <ReviewsSection id={id} />
        </div>
      </div>
      <div className={`w-full inline-block [grid-area:right_content] min-h-[230px]  col-span-3 md:col-span-1 `}>
        <div className="my-[32px] sticky z-50 top-[104px] left-0">
          {onscreen !== false && (
            hasOption
              ? 
                <motion.div
                  key={3}
                  layoutId={'layout03'}
                  initial={{ opacity: 0, }}
                  animate={{ opacity: 1, }}
                  transition={{ delay: 0.5 }}
                  className="text-[40px] font-bold capitalize"
                >
                  <AvailabilitySelectedOptCard
                    currency={currency}
                    price={watch('total_price')}
                    startTime={watch('time_request')}
                    dateTravel={watch('travel_date')}
                    quantity={watch('quantity')}
                    name={lists?.name}
                    optionName={watch('options_name')}
                    onClick={() => handleSubmit}
                    executeScroll={executeScroll}
                  />
                </motion.div>
              :
                <motion.div
                  key={4}
                  layoutId={'layout04'}
                  initial={{ opacity: 0, }}
                  animate={{ opacity: 1, }}
                  transition={{ delay: 0.5 }}
                  className="text-[40px] font-bold capitalize"
                >
                  <AvailabilityDesOverCard
                    id={id}
                    currency={currency}
                    price={lists?.price}
                    name={lists?.name}
                    description={lists?.description}
                    booked={lists?.booked}
                    rating={lists?.rating}
                    onClick={executeScroll}
                  />
                </motion.div>
          )}
        </div>
      </div>
    </div>
    <div className="w-full">
      <RelationSection />
    </div>
    {/* <pre className="text-left">{JSON.stringify(watch(), null, "\t")}</pre> */}
    </>
  )
}

export default ProductDetail;