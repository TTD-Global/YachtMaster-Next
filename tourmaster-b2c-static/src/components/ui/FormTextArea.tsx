"use client"
import { Input } from "antd";
import { Control, Controller } from "react-hook-form";
import type { TextAreaProps } from "antd/es/input";

import { IconInfo } from "@/components/icons";
import { cn } from "@/helpers/clsx";
import { PopOver } from "@/components/ui";
const { TextArea } = Input;

interface FormTextAreaProps extends TextAreaProps {
  control: Control<any>;
  name: string;
  title: string;
  error?: any;
  iserror?: any;
  required?: boolean;
  id?: string;
  onChange?: (value: any) => void;
  showCount?: boolean;
  info?: string;
  maxLength?: number;
  description?: string;
  className?: string;
}
export default function FormTextArea({
  id,
  control,
  name,
  title,
  error,
  iserror,
  required = false,
  onChange,
  info,
  showCount,
  maxLength,
  description,
  className,
  ...rest
}: FormTextAreaProps) {
  return (
    <div className="w-full flex flex-col gap-[6px]">
      {title && (
        <label
          htmlFor={name}
          className="text-gray-900 text-sm font-medium leading-relaxed flex gap-1"
        >
          {title} {required && <span className="text-error-500">*</span>}
          {info && (
            <PopOver content={info} trigger="hover">
              <>
                <IconInfo className="text-primary-500 cursor-help" />
              </>
            </PopOver>
          )}
        </label>
      )}
      <p className="text-xs text-gray-500">{description}</p>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <TextArea
              id={id}
              {...rest}
              {...field}
              onChange={(e) => {
                e ? field.onChange(e) : field.onChange(undefined);
                if (onChange) onChange(e.target.value);
              }}
              value={field.value}
              status={error[name] ? "error" : undefined}
              maxLength={maxLength}
              className={cn(`h-[46px]`, className)}
            />
            <div className="flex justify-between text-xs h-5 leading-5">
              <span className="text-error-500 ">{error[name]?.message}</span>
              <div className="flex items-center text-text-gray-700">
                {showCount && <p>{field?.value?.length || 0}</p>}
                {showCount && maxLength && <p> /{maxLength}</p>}
              </div>
            </div>
          </>
        )}
      />
    </div>
  );
}
