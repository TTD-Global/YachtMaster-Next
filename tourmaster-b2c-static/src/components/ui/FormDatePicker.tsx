'use client'
import { DatePicker, DatePickerProps, ConfigProvider } from "antd";
import { Control, Controller } from "react-hook-form";
import { 
  IconArrowDown, 
  IconCalendar, 
} from '@/components/icons';
import dayjs from "dayjs";
import { cn } from "@/helpers/clsx";
interface DatePickerFieldProps extends DatePickerProps {
  control: Control<any>;
  name: string;
  title?: string;
  error?: any;
  required?: boolean;
  extraVariant?: string;
  value?: any;
  onChange?: (value: any) => void;
  id?: string;
  className?: string;
  dateFormatShow?: string;
}

const FormDatePicker = ({
  id,
  control,
  name,
  title,
  error,
  required = false,
  extraVariant,
  value,
  onChange,
  className,
  dateFormatShow = "DD/MM/YYYY",
  ...rest
}: DatePickerFieldProps) => {
  const dateFormatForm = "YYYY-MM-DD";
  // const dateFormatShow = "DD/MM/YYYY";

  const theme = {
    components: {
      DatePicker: {
        activeBg: "#0BA5EC",
        hoverBg: "#0BA5EC",
      },
    },
  };

  return (
    <div className="flex flex-col">
      {title && (
        <label
          htmlFor={name}
          className="text-primary text-lg font-normal leading-relaxed"
        >
          {title} {required && <span style={{ color: "red" }}>*</span>}{" "}
          {/* required */}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <div className={cn(`relative h-10 rounded-[8px] flex items-center ${extraVariant? "bg-primary-500 text-white" : ""} `, className)}>
              <div className="absolute top-1/2 left-0 ml-3 w-6 h-6 transform -translate-y-1/2 z-10 overflow-hidden">
                <IconCalendar/>
              </div>
              <ConfigProvider theme={extraVariant? theme : {}}>
                <DatePicker
                  id={id}
                  {...rest}
                  {...field}
                  className={cn(`w-full h-full pl-11 ${extraVariant? "bg-primary-500 text-white placeholder-white border-none" : ""}` ,className)}
                  suffixIcon={<IconArrowDown className={`${extraVariant? "text-white" : ""}`} />}
                  value={
                    field.value ? dayjs(field.value, dateFormatForm) : undefined
                  }
                  onChange={(value) => {
                    const formattedValue = value
                      ? dayjs(value).format(dateFormatForm)
                      : undefined;
                    field.onChange(formattedValue);
                    if (onChange) onChange(value);
                  }}
                  format={dateFormatShow}
                />
              </ConfigProvider>
            </div>
          </>
        )}
      />
     {Object.keys(error).length > 0 &&
        <span
          className={`transition duration-200 ease-in-out text-red leading-5 ${
            error[name] ? "opacity-1" : "opacity-0"
          }`}
        >
          &nbsp;{error[name]?.message}&nbsp;
        </span>
      }
    </div>
  );
};

export default FormDatePicker;
