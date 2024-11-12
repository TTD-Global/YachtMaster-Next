'use client'
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import { 
  IconCircleCheck,
  IconClock, 
  IconLocation, 
  IconMaximize
} from '@/components/icons';
import { Card, Modal, Button } from '@/components/ui'
import { ProductDetailLayout } from "@/components/layout";
import { Radio } from "antd";
import { Control, Controller } from "react-hook-form";
import type { RadioChangeEvent } from "antd";
// import { PackageRadioProps, T } from '@/utils/types';
import { useRouter } from 'next/navigation'
import { 
  FormTripCardPackageDetail, 
  FormParticipantBooking 
} from '@/components/form';
import { formatPriceCurrency } from '@/helpers/numberformat';
import { ModalLogin, ModalWishlistMessage, ModalMessage } from '@/components/modal';
import { setTimeout } from 'timers';

// import useFetchBooking, { GetCodeBooking } from '@/hooks/booking';
// import useAuth from '@/hooks/useAuth';
// import Cookies from 'universal-cookie';

interface DayTripCardProps  {
  id?: string | undefined;
  control: Control<any>;
  setValue: any;
  handleSubmit: any;
  watch: any;
  name: string;
  title?: string;
  error?: any;
  province: string[];
  image: string | undefined;
  // options: PackageRadioProps | undefined;
  options: any;
  className?: string;
  onChange?: (value: any) => void;
}
const FromRadioGTripCard:React.FC<DayTripCardProps> = ({
  id,
  control,
  setValue,
  watch,
  handleSubmit,
  province,
  image,
  name,
  title,
  error,
  options,
  className,
  onChange,
  ...rest
}) => {
  // console.log("OPTION : ",   options)
  const [isActive , setIsActive] = useState<any>(true);
  const refCard = useRef<any>([]);
  // const cookies = new Cookies();
  // const currency = cookies.get('NEXT_CURRENCY') || "thb"
  const currency = "thb";
  
  const [isOpen, setIsOpen] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [elHeight, setElHeight] = useState<number>(0);
  const [totalPrice , setTotalPrice] = useState<Number>(0);
  const [rightContent, setRightContent] = useState<any>(null);
  const router = useRouter();
  // const {isLogin} = useAuth();
  const [modalLogin, setModalLogin] = useState(false);
  const [isToggled, setToggle] = useState(false);

  const slotsRef = useRef<HTMLDivElement>(null);

  // console.log("Test log : ", currency)
  const sendData = async (data:any) => {
    let vendors = data.quantity.filter( (vendor:any) => vendor['qty'] !== 0 )
    let newData = {
      ...data, 
      travel_time: data.time_request,
      quantity: vendors,
      currency: currency,
      image: image,
      pickup_point: options?.pickup_point,
      meeting_point:  options?.meeting_point,
    }
    // console.log('Product send data : ', newData)
    // const  code:any = await GetCodeBooking(newData)
    // router.push(`/booking?code=${code}`)
    router.push(`/booking?code=123456`)

  }

  const showMessageRequest = () => {
    setOpenWishlist(true)
    setTimeout(() => {
      setOpenWishlist(false)
    }, 4000)
  }

  const handleBooking = (data: FormData) => {
    // if(isLogin) {
    //   watch('quantity').some((e:any) => e.qty !== 0) 
    //     ? sendData(data)
    //     : showMessageRequest()
    // } else {
    //   setModalLogin(true)
    // }
    // let newParams = new URLSearchParams();
    // {Object.entries(data).map(([key, value], _) => (
    //   newParams.append(key, value)
    // ))}
    // const newUrl = `/booking?${newParams.toString()}`;
    // router.push(newUrl, { scroll: false });
    
    console.log("Submit: ", data)
  }

  useEffect(() => {
    const height = refCard.current[Number(id)]?.offsetHeight - 25;
    setElHeight(height);
    setIsActive(false)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setValue(`total_price`, totalPrice)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPrice])

  // useEffect(() => {
  //   console.log("CURRENCY : ", currency)
  // }, [currency])

  // useEffect(() => {
  //   if(slotsRef.current){
  //     const observer = new ResizeObserver((entries) => {
  //       entries.forEach(entry => {
  //         console.log('width', entry.contentRect.width);
  //         console.log('height', entry.contentRect.height);
  //       });
  //     });
  //     observer.observe(slotsRef.current);
  //     observer.disconnect();
  //   }
  //   const resize = document.getElementById('div');
    
  //   slotsRef.current?.addEventListener('resize', (event) => console.log(event.detail)); 
  //   function checkResize (mutations:any) {
  //     var el = mutations[0].target;
  //     var w = el.clientWidth;
  //     var h = el.clientHeight;
      
  //     var isChange = mutations
  //       .map((m:any) => m.oldValue + '')
  //       .some((prev:any) => prev.indexOf('width: ' + w + 'px') == -1 || prev.indexOf('height: ' + h + 'px') == -1);
  
  //     if (!isChange)
  //       return;
  
  //     var event = new CustomEvent('resize', {detail: {width: w, height: h}});
  //     el.dispatchEvent(event);
  // }
  // if(slotsRef.current){
  //   var observer = new MutationObserver(checkResize); 
  //   observer.observe(slotsRef.current, {attributes: true, attributeOldValue: true, attributeFilter: ['style']});
  // }
  
  //   console.log("HIGHT :", slotsRef.current?.offsetHeight)

  // },[ slotsRef.current?.offsetHeight])
  
  React.useEffect(() => {
    function handleWidthChange (width:any) {
      console.log("observer-resize-with : ", width);
    }
    
    let prevWidth = 0;
    
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        const width = entry.borderBoxSize?.[0].inlineSize;
        if (typeof width === 'number' && width !== prevWidth) {
          prevWidth = width;
          // handleWidthChange(width);
        }
      }
    });
    if(slotsRef.current){
      observer.observe(slotsRef.current, {box: 'border-box'});
    }
    
  }, [])
  return (
    <>
     <ModalWishlistMessage isOpen={openWishlist} setIsOpen={setOpenWishlist} handleCancel={()=> ""} />
      <ModalMessage 
        isOpen={openWishlist} 
        setIsOpen={setOpenWishlist}  
        className='max-w-[235px]' 
        opacity={`no-background`} 
        closeBlur={true} 
        type='info-gray'
        label={`Please select quantity`}
      />
      <ModalLogin
        isOpen={modalLogin}
        setIsOpen={setModalLogin}
      />
      <Modal 
        isOpen={isOpen} 
        title={`Package details`} 
        closeButton={true} 
        setIsOpen={setIsOpen}  
        className={`max-w-[720px] pr-8`}
        closeClassName={`mr-4`}
      >
        <div className="relative w-full h-[calc(100vh-300px)] overflow-y-auto">
          <div className="w-full absolute top-0 left-0 pr-4">
            <FormTripCardPackageDetail 
              isModal={true}
              title={rightContent?.title}  
              description={rightContent?.description} 
              meeting={rightContent?.meeting} 
              tags={rightContent?.tags} 
              itinerary={rightContent?.itinerary} 
              include={rightContent?.include_exclude}
            />
          </div>
        </div>
      </Modal>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (<>
          {/* {options?.map((option, index) => ( */}
            <ProductDetailLayout 
              rightContent={
                watch('product_option_id') === options?.value && (
                <div className='w-full h-full radio-trip-card__hover'>
                  <header className='flex justify-between border-b border-gray-300 pb-4 mb-4 mr-3'>
                    <h3 className="text-[20px] text-primary-900 font-[500] ">Package details</h3>
                    <Button 
                      variant='link' 
                      shape={'round'} 
                      className='border-gray-300 px-0'
                      onClick={() => setIsOpen(true)}
                    >
                      <IconMaximize className='text-gray-500'/>
                    </Button>
                  </header>
                  <div className="w-full h-[calc(100%-68px)] relative overflow-y-auto overflow-x-hidden">
                    <div className="w-full absolute top-0 left-0 px-0">
                      <div id='right-fix-height' className='w-full h-full'>
                        <div className={`w-full h-full pr-3`}>
                          <FormTripCardPackageDetail 
                            title={rightContent?.title} 
                            meeting={rightContent?.meeting} 
                            description={rightContent?.description} 
                            tags={rightContent?.tags} 
                            itinerary={rightContent?.itinerary} 
                            include={rightContent?.include_exclude}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )
              }
              className='w-full'
            >
              <Radio.Group
                id={id}
                {...rest}
                {...field}
                onChange={({ target: { value } }: RadioChangeEvent) => {
                  field.onChange(value);
                  if (onChange) onChange(value);
                }}
                value={field.value}
                className={`my-component flex flex-col ${className}`}
              >
                <Card 
                  ref={(element) => {refCard.current[Number(id)] = element}}
                  className={`shadow-sm transition ${field?.value === options?.value ? "border-[3px] border-primary-500 bg-primary-25" : ""}`} 
                  onClick={
                    (event) => { 
                      field.onChange(options?.value); 
                      setIsActive(true)
                      setValue(`product_id`, options?.product_id)
                      setValue(`total_price`, 0)
                    }

                  }
                >
                  <div className="w-full mb-6">
                    <div className="flex gap-x-2 mb-4">
                      <Radio value={options?.value} disabled={options?.disabled} />
                      <p className="font-[500] text-[#1A1A1A] text-[20px]">{options?.label}</p>
                      {field?.value === options?.value
                       && <div className="absolute -top-5 right-8 button-3d-style text-white font-[600] text-[16px] tracking-[0.25px] flex items-center overflow-hidden  px-3 w-[118px] h-[34px]">
                            <IconCircleCheck className='w-[19px] h-[19px]'/><span className="pl-[8px] leading-[39px]">Selected</span>
                          </div>
                      }
                      
                    </div>
                    {options?.description && (
                      <p className={`font-[400] text-gray-600 text-[16px] mb-4`}>
                        {options?.description}
                      </p>
                    )}
                    {options?.time && (
                      <div className="flex gap-x-2 mb-4">
                        <IconClock className='text-primary-600 h-6 w-6 flex-0'/>
                        <p className='flex-1 text-[16px]'>{options?.time}</p>
                      </div>
                    )}
                    {/* 
                    {
                      options?.meeting_point.map((item:string, index:number)=>{
                        return (  <div key={index} className="flex gap-x-2 mb-4 flex-0">
                          <IconLocation className='text-primary-600 h-6 w-6'/>
                          <p className='flex-1 text-[16px]'>{item}</p>
                        </div>)
                      })
                    } 
                    */}
                    </div>
                  {/* {watch('product_option_id') === options?.value && (
                    <div className={`w-full mb-6 pt-6 border-t border-primary-100 ${elHeight === 0? "" : ""}`}>
                      <FormParticipantBooking  
                        error={error} 
                        control={control} 
                        watch={watch} 
                        setValue={setValue} 
                        isKey={options?.value} 
                        items={options?.time_slots} 
                        setTotalPrice={setTotalPrice} 
                        isActive={isActive} 
                        isID={id} 
                        parentRef={refCard} 
                        setRightContent={setRightContent} 
                      />
                    </div>
                  )} */}
                  <div className="mb-8" ref={slotsRef}>
                      <FormParticipantBooking  
                            error={error} 
                            control={control} 
                            watch={watch} 
                            setValue={setValue} 
                            isKey={options?.value} 
                            items={options?.time_slots} 
                            setTotalPrice={setTotalPrice} 
                            isActive={isActive} 
                            isID={id} 
                            parentRef={refCard} 
                            setRightContent={setRightContent} 
                          />
                  </div>
                  {/* {watch('product_option_id') === options?.value && (
                    <div className={`w-full mb-6 pt-6 border-t border-primary-100 ${elHeight === 0? " " : " "}`}>
                      <motion.div 
                        initial={{
                          scale: 0.95,
                        }}
                        animate={{
                          scale: 1,
                        }}
                        transition={{ duration: 0.3}}
                      >
                        <div  className="w-full" onResize={() => console.log("onResize")}>
                          <FormParticipantBooking  
                            error={error} 
                            control={control} 
                            watch={watch} 
                            setValue={setValue} 
                            isKey={options?.value} 
                            items={options?.time_slots} 
                            setTotalPrice={setTotalPrice} 
                            isActive={isActive} 
                            isID={id} 
                            parentRef={refCard} 
                            setRightContent={setRightContent} 
                          />
                        </div>
                        
                      </motion.div>
                    </div>
                  )} */}
                  <footer className='flex justify-between'>
                    <div className={`text-[20px] font-[500] ${field.value === options?.value? "text-gray-900": " "}`}>
                      <span className="text-gray-500 text-[14px]">{field.value === options?.value ? "Total price :" : <b>From </b>} </span> 
                      {/* {`US$ ${field.value === options?.value? (Math.round(Number(totalPrice) * 100) / 100).toFixed(2) : (Math.round(Number(0) * 100) / 100).toFixed(2) }`} */}
                      {`${field.value === options?.value
                        ? formatPriceCurrency(totalPrice, currency)
                        : formatPriceCurrency(options?.price_min, currency)
                      }`}
                    </div>
                    {field.value !== options?.value
                      ? (<Button variant="tertiary-color" shape={'round'} className='text-primary-700 font-[500] text-[14px] leading-[20px] tracking-[1.25px] border-gray-300 py-[8px] px-[16px] w-[118px] h-[40px]'>View Detail</Button>) 
                      : (<Button variant="primary" shape={'round'} className='border-gray-300 py-[12px] px-[20px] text-[16px] w-[160px] h-[48px] tracking-[1.25px]' onClick={handleSubmit(handleBooking)}>Book now</Button>)
                    }
                  </footer>
                  { field.value === options?.value && options?.children }
                </Card>
              </Radio.Group>
            </ProductDetailLayout>
          {/* ))} */}
          </>
        )}
      />
    {/* <div className="dd"><pre className="text-left">{JSON.stringify(options, null, "\t")}</pre></div> */}
    </>
  )
}

export default FromRadioGTripCard;
