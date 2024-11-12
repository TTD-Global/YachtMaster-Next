'use client'
import { InputProps } from 'antd'
import { Control, Controller } from 'react-hook-form'
import Input from '@/components/ui/Input';

interface InputFieldProps extends InputProps {
    control: Control<any>
    name: string,
    title: string,
    error?: any,
    iserror?: any,
    required?: boolean,
    id?: string,
    onChange?: (value: any) => void;
    type?: "password" | "text" | "hidden";
}
export default function InputField({
    id,
    control,
    name,
    title,
    error,
    iserror,
    required = false,
    onChange,
    type,
    ...rest
}: InputFieldProps) {
    return (
        <div className='w-full flex flex-col gap-y-[6px] '>
            {title && (
                <label htmlFor={name} className="text-primary text-[14px] font-[500] leading-normal capitalize">
                    {title} {required && <span style={{ color: 'red' }}>*</span>} {/* required */}
                </label>
            )}
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input
                        id={id}
                        {...rest}
                        {...field}
                        type={type}
                        className='h-10'
                        onChange={(e) => {
                            e ? field.onChange(e) : field.onChange(undefined)
                            if (onChange) onChange(e.target.value);
                        }}
                        value={field.value}
                        status={error[name] || iserror ? 'error' : undefined}
                    />
                )}
            />
            {iserror
                ? (<><span className={`transition duration-200 ease-in-out text-[12px] text-[#F04438] leading-5 ${iserror ? "opacity-1" : "opacity-0"}`}>&nbsp;{iserror}&nbsp;</span></>)
                : (<><span className={`transition duration-200 ease-in-out text-[12px] text-[#F04438] leading-5 ${error[name] ? "opacity-1" : "opacity-0"}`}>&nbsp;{error[name]?.message}&nbsp;</span></>)
            }
        </div>
    )
}

