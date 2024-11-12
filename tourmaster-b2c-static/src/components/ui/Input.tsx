"use client"
import { useState, forwardRef } from "react";
import { Input as InputComponent, InputProps } from "antd";
import { cn } from "@/helpers/clsx";
import IconEyeVisible from "../icons/IconEyeVisible";
import IconEyeInVisible from "../icons/IconEyeInVisible";

interface InputComponentsProps extends InputProps {
  className?: string;
  ref?: any;
  type?: "password" | "text" | "hidden";
}

const Input = forwardRef<HTMLInputElement, InputComponentsProps>(
  ({ className, type="text", ...props }, ref) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePassword = () => {
      setPasswordVisible(!passwordVisible);
    };

    const renderSuffix = () => (
      type === "password" ? (
        <div
          onClick={togglePassword}
          className="w-6 h-6 flex items-center justify-center cursor-pointer"
        >
          {passwordVisible ? <IconEyeVisible /> : <IconEyeInVisible />}
        </div>
      ) : null
    );

    return (
      <InputComponent
        ref={ref}
        className={cn("", className)}
        type={passwordVisible ? "text" : type}
        suffix={renderSuffix()}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;