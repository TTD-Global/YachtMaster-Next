
import React, { useEffect, useState } from 'react'
import { CounterInput } from '@/components/ui';
import { PackageUnitProps } from '@/utils/types';
import { IconWarning } from '@/components/icons/';
import { ModalParticipantsMessage } from '@/components/modal';

interface FormParticipantBookingTimeProps {
  className?: string;
  participants: PackageUnitProps[];
  control: any;
  error?: any,
  setTotalPrice: any;
  watch: any
}
const FormParticipantBookingTime: React.FC<FormParticipantBookingTimeProps> = ({ participants, control, error, setTotalPrice, watch }) => {
  const [isOpen, setOpen] = useState(false)
  const [qty, setQty] = useState<number>(0)
  return (
    <>
      <ModalParticipantsMessage
        isOpen={isOpen}
        setIsOpen={setOpen}
        qty={qty}
        handleCancel={() => ""}
      />
      <h1 className='text-[16px] font-[600] mb-4'>Participants</h1>
      {participants?.map((item, index) => {
        const qty = watch(`quantity.${index}.qty`);
        return (
          <div key={index} >
            <div className=" p-4 bg-white rounded-xl text-[16px] font-[600] mt-2">
              <div className="flex justify-between">
                <CounterInput name={`quantity.[${String(index)}]`} label={item.label} price={item.price} error={error} control={control} setTotalPrice={setTotalPrice} participant={item} setOpen={setOpen} setQty={setQty} />
              </div>
              {qty > 0 && item.participant_min > 1 && qty <= item.participant_max && (
                <div className="text-[#f78f08] text-xs font-normal tracking-tight flex items-center gap-1">
                  <div>
                    <IconWarning className="w-4 h-4" /></div>
                  <div>
                    You must book a minimum of {item.participant_min} for this unit.</div>
                </div>
              )}
            </div >
          </div>
        )
      })}
    </>
  )
}

export default FormParticipantBookingTime;
