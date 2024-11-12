"use client";
import React, { useEffect, useState } from "react";
import { IconAddSquare, IconMinusSquare } from "@/components/icons";
import { PackageUnitProps } from "@/utils/types";
import { Control, Controller } from "react-hook-form";
import { Input as InputComponent, InputProps } from "antd";
// import Cookies from "universal-cookie";
import { formatPriceCurrency } from "@/helpers/numberformat";

interface CounterInputProps extends InputProps {
  className?: string;
  name: string;
  label?: string;
  price: number;
  control: Control<any>;
  error?: any;
  watch?: any;
  setOpen: any;
  setQty: any;
  setTotalPrice?: any;
  is_private?: boolean;
  participant?: PackageUnitProps;
  participant_min?: number;
  participant_max?: number;
}
const CounterInput: React.FC<CounterInputProps> = ({
  name,
  price,
  control,
  error,
  watch,
  setOpen,
  setQty,
  label,
  setTotalPrice,
  is_private,
  participant,
  participant_min,
  participant_max,
}) => {
  // const cookies = new Cookies();
  // const currency = cookies.get("NEXT_CURRENCY") || "thb";
  const currency = "thb";
  return (
    <>
      <span className="">{`${label ? label : " "}`}</span>
      <Controller
        name={`${name}.qty`}
        control={control}
        render={({ field }) => (
          <>
            <div className="flex gap-3">
              <span className="text-primary-900">
                {is_private} {formatPriceCurrency(price, currency)}
              </span>
              <IconMinusSquare
                className={`transition duration-300 ease-in-out cursor-pointer ${field.value === 0 ? "text-gray-300" : "text-gray-500"
                  }`}
                onClick={(e) => {
                  let newCount = 0;
                  if (field.value != 0) {
                    if (
                      participant?.private &&
                      field.value <= participant.participant_min
                    ) {
                      newCount = 0;
                      setTotalPrice(
                        (prevCount: any) => prevCount - field.value * price
                      );
                    } else {
                      newCount = field.value - 1;
                      setTotalPrice((prevCount: any) => prevCount - price);
                    }
                  } else {
                    newCount = 0;
                    setTotalPrice((prevCount: any) => prevCount);
                  }
                  e ? field.onChange(newCount) : field.onChange(undefined);
                }}
              />
              <span className="text=xl font-bold w-5 text-center">
                {field.value}
              </span>
              <InputComponent
                name={`${name}.qty`}
                value={field.value}
                className="hidden"
              />
              <IconAddSquare
                className={`cursor-pointer ${field.value >= 99 ? "text-gray-300" : "text-gray-500"
                  }`}
                onClick={(e) => {
                  let count = 0;
                  let is_limit = true;
                  if (
                    participant?.private &&
                    field.value == participant.participant_max
                  ) {
                    setQty(participant.participant_max)
                    setOpen(true);
                    setTimeout(() => setOpen(false), 2000);
                    is_limit = false;
                  }
                  if (field.value != 99 && is_limit) {
                    if (participant?.private && field.value == 0) {
                      count = participant.participant_min;
                      setTotalPrice(
                        (prevCount: any) => prevCount + price * count
                      );
                    } else {
                      count = field.value + 1;
                      setTotalPrice((prevCount: any) => prevCount + price);
                    }
                  } else {
                    count = field.value;
                    setTotalPrice((prevCount: any) => prevCount);
                  }
                  e ? field.onChange(count) : field.onChange(undefined);
                }}
              />
            </div>
          </>
        )}
      />
    </>
  );
};

export default CounterInput;
