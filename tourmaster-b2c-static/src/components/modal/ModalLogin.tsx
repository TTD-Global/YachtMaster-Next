"use client"
import { ReactNode, useEffect, useRef, useState } from "react";
import { z } from "zod";
import { cn } from "@/helpers/clsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import IconEmail from "@/components/icons/IconEmail";
import Button from "@/components/ui/Button";
import IconKey from "@/components/icons/IconKey";
import IconLoggedIn from "@/components/icons/IconLoggedIn";
import IconCloseModal from "@/components/icons/IconCloseModal";
import IconWarning from "@/components/icons/IconWarning";
import { useSearchParams } from "next/navigation";
import { FormInput, Portal } from "@/components/ui";
import { GoogleButton, FacebookButton } from "@/components/common";

interface ModalProps { 
  isOpen: boolean;
  setIsOpen : (value: boolean) => void
  closeButton?: boolean;
  children?: ReactNode;
  submitEmail? : (value: any) => void
  submitPassword? : (value: any) => void
  message? : string
  className?: string
}

export const ModalLogin = ({ closeButton = false, children, isOpen, setIsOpen, submitEmail, submitPassword, className, message }: ModalProps) => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const childrenRef = useRef<HTMLDialogElement | null>(null);
  const [step, setStep] = useState(1)
  const [username, setUsername] = useState("")
  const [errorLogin, setErrorLogin] = useState(false)

  type TokenType = {
    access_token? : string
    refresh_token? : string
    password?: boolean;
  };

  const emailSchema = z.object({
    email: z
      .string({ required_error: `Please enter email address` })
      .min(1, { message: "Please enter email address" })
      .email({ message: "Enter a valid email" })
  });

  type emailForm = z.infer<typeof emailSchema>;
  const emailForm = useForm<emailForm>({
    resolver: zodResolver(emailSchema),
    defaultValues: {},
  });

  const passwordSchema = z.object({
    password: z
      .string({ required_error: `Enter a valid password` })
      .min(8, { message: "Please enter password minimum 8 characters" })
  });
  
  type passwordForm = z.infer<typeof passwordSchema>;
  const passwordForm = useForm<passwordForm>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {},
  });

  const loginSchema = z.object({
    email: z
      .string({ required_error: `Please enter email address` })
      .min(1, { message: "Please enter email address" })
      .email({ message: "Enter a valid email" }),
    password: z
      .string({ required_error: `Enter a valid password` })
      .min(8, { message: "Please enter password minimum 8 characters" })
  });
  
  type loginForm = z.infer<typeof loginSchema>;
  const loginForm = useForm<loginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {},
  });

  useEffect(() => {
    const touchHandler = (e: any) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };
    if (isOpen) {
      document.body.classList.add("no-scroll");
      document.addEventListener("wheel", touchHandler, { passive: false });
    } else {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("wheel", touchHandler, { capture: false });
    }

    return () => {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("wheel", touchHandler, { capture: false });
    };
  }, [isOpen]);

  const handleBack = () => {
    setStep(1)
    emailForm.clearErrors()
  };

  const handleBacktoLogin = () => {
    setStep(4)
  };

  const handleCancel = () => {
    setIsOpen(false)
    setStep(1)
    emailForm.clearErrors()
    passwordForm.clearErrors()
    setErrorLogin(false)
  };
  
  const handleEmail = ({ email }: emailForm) => {
    console.log("login : ", email)
  };

  const handleSignup = ({password} : passwordForm) => {
    console.log("login : ", password)
  };
  
  const handleLogin = (data : loginForm) => {
    console.log("login : ", data);
  };

  const handleForgotPassword = () => {
    setStep(5)
  };

  const handleResetPassword = ({ email }: emailForm) => {
    console.log("ResetPassword : ", email);
  };

  return (
    <>
      <Portal>
        <div
          ref={parentRef}
          className={`fixed flex items-center justify-center inset-0 z-50 bg-[rgba(0,0,0,0.50)] backdrop-blur-[8px] shadow-[0_8px_15px_14px_rgba(24,39,75,0.16)] 
          ${isOpen ? "animate-fadeinfast" : "animate-fadeoutfast hidden"}`}
        >
          {/* <dialog
            ref={childrenRef}
            className={` ${isOpen ? "" : "hidden"} rounded-xl bg-white p-6 text-center`}
          > */}
          <dialog
            ref={childrenRef}
            className={cn(`
              max-w-[494px]
              rounded-[8px] bg-white
              fixed left-[50%] top-[50%] z-50 shadow-[0_1px_3px_0px_rgba(16,24,40,0.10)] grid
              translate-x-[-50%] translate-y-[-50%] border
              p-10 duration-100 sm:rounded-lg md:w-full
            `, className)}
          >
            <div className="relaitve min-w-[320px] grid grid-cols-1 duration-100">
              <div className="relative rounded-[8px]">
                <div
                  onClick={handleCancel}
                  className="absolute right-0 top-0 flex items-center justify-center rounded-sm opacity-70 hover:opacity-100 duration-100 cursor-pointer"
                >
                  <IconCloseModal className="w-[24px] h-[24px]" /> 
                </div>
              </div>

              { step === 1 &&
                <div className="grid grid-cols-1 gap-y-6">
                  <div className="h-[56px] grid grid-cols-1">
                    <div className="h-[40px] flex items-center justify-start text-[20px] text-[#026AA2] font-[500]">
                      Log in or Sign up
                    </div>
                    <hr className="mt-3" />
                  </div>
                  <div className="h-[20px] text-[12px] text-[#667085] font-[400] leading-normal">
                    Embrace Joyful Experiences at Your Fingertips with Tour Master
                  </div>
                  <div>
                    <form onSubmit={emailForm.handleSubmit(handleEmail)}>
                      <div className="text-[14px] font-[500]">
                        <FormInput
                          // required
                          title="Email address"
                          prefix={<div className="flex items-center justify-center w-6 h-6 text-[#667085]"><IconEmail /></div>}
                          name="email"
                          placeholder="Please enter"
                          control={emailForm.control}
                          error={emailForm.formState.errors}
                          className="h-[46px]"
                        />  
                      </div>
                      <Button
                        type="submit"
                        variant="primary" 
                        className='w-full h-[46px] rounded-full mt-[6px]'>
                          Next
                      </Button>
                    </form>
                  </div>
                  <hr />
                  <div className="h-[20px] text-[12px] text-[#667085] font-[400]">
                    Or log in with
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <GoogleButton />
                    <FacebookButton />
                  </div>
                </div>
              }
 
              { step === 2 && 
                <div className="grid grid-cols-1 gap-y-6">
                  <div className="h-[56px] grid grid-cols-1">
                    <div className="h-[40px] flex items-center justify-start text-[20px] text-[#026AA2] font-[500]">
                      Set password
                    </div>
                    <hr className="mt-3" />
                  </div>
                  <div className="h-[20px] text-[12px] text-[#667085] font-[400] leading-normal">
                    Embrace Joyful Experiences at Your Fingertips with Tour Master
                  </div>
                  <div className="h-[20px] text-[12px] text-[#667085] font-[400] leading-normal">
                    Finish signing up by creating a password
                  </div>
                  <div className="">
                    <form onSubmit={passwordForm.handleSubmit(handleSignup)}>
                      <div className="text-[14px] font-[500]">
                        <FormInput
                          // required
                          type="password"
                          title="Set password"
                          prefix={<div className="flex items-center justify-center w-6 h-6 text-[#667085]"><IconKey /></div>}
                          name="password"
                          placeholder="Enter password"
                          control={passwordForm.control}
                          error={passwordForm.formState.errors}
                          className="h-[46px]"
                        />  
                      </div>
                      <hr className="mt-[6px]"/>
                      <div className="h-[40px] text-[12px] text-[#667085] font-[400] leading-normal my-6">
                        Passwords must be 8-20 characters with at least 1 number, 1 letter and 1 special symbol
                      </div>
                      <div className="flex flex-col gap-y-4">
                        <Button
                          type="submit"
                          variant="primary" 
                          className='w-full h-[48px] rounded-full mt-[6px]'
                        >
                          Confirm
                        </Button>
                        <Button
                          type="button"
                          onClick={handleBack}
                          variant="tertiary-gray"
                          className='w-full h-[48px] rounded-full'
                        >
                          Back
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              }

              { step === 3 && 
                <div className="grid grid-cols-1 gap-y-6">
                 
                  <hr className="mt-8" />

                  <div className="flex flex-col items-center justify-center gap-y-2">
                    <div className="flex items-center justify-centerw-[78px] h-[78px]">
                      <IconLoggedIn />
                    </div>
                    <div className="w-full flex items-center justify-center h-[20px] text-[20px] text-[#667085] font-[500] leading-normal">
                      Logged in!
                    </div>
                  </div>
                  
                  <div className="w-full flex items-center justify-center h-[40px] text-[12px] text-[#667085] font-[400] leading-normal">
                    Your account has been linked successfully!
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <Button
                      type="button"
                      onClick={handleCancel}
                      variant="primary"
                      className='w-full h-[48px] rounded-full'
                    >
                      Ok
                  </Button>
                  </div>
                </div>
              }

              { step === 4 && 
                <div className="grid grid-cols-1 gap-y-6">
                  <div className="h-[56px] grid grid-cols-1">
                    <div className="h-[40px] flex items-center justify-start text-[20px] text-[#026AA2] font-[500]">
                      Log in
                    </div>
                    <hr className="mt-3" />
                  </div>
                  <div className="h-[20px] text-[12px] text-[#667085] font-[400] leading-normal">
                    Embrace Joyful Experiences at Your Fingertips with Tour Master
                  </div>
                  {errorLogin && <div className="flex items-center gap-x-1 text-[#F04438] text-[12px] font-normal">
                    <IconWarning />
                    <p>
                      The username/password is incorrect
                    </p>
                  </div>}
                  <div className="">
                    <form onSubmit={loginForm.handleSubmit(handleLogin)}>
                      <div className="text-[14px] font-[500]">
                        <FormInput
                          // required
                          title="Email address"
                          prefix={<div className="flex items-center justify-center w-6 h-6 text-[#667085]"><IconEmail /></div>}
                          name="email"
                          placeholder="Please enter"
                          control={loginForm.control}
                          error={loginForm.formState.errors}
                          className="h-[46px]"
                        />  
                      </div>
                      <div className="text-[14px] font-[500]">
                        <FormInput
                          // required
                          type="password"
                          title="Set password"
                          prefix={<div className="flex items-center justify-center w-6 h-6 text-[#667085]"><IconKey /></div>}
                          name="password"
                          placeholder="Enter password"
                          control={loginForm.control}
                          error={loginForm.formState.errors}
                          className="h-[46px]"
                        />  
                      </div>
                      <div className="flex flex-col gap-y-4">
                        <div onClick={handleForgotPassword} className="flex justify-center text-[#475467] underline px-[14px] py-2 cursor-pointer">
                          Forgot your password?
                        </div>
                        <Button
                          type="submit"
                          variant="primary" 
                          className='w-full h-[48px] rounded-full mt-[6px]'
                        >
                          Log in
                        </Button>
                      </div>
                      <hr className="my-6"/>
                      <div className="h-[20px] text-[12px] text-[#667085] font-[400]">
                        Or log in with
                      </div>
                      <div className="flex flex-col gap-y-4">
                        <GoogleButton />
                        <FacebookButton />
                      </div>
                    </form>
                  </div>
                </div>
              } 
              { step === 5 &&
                <div className="grid grid-cols-1 gap-y-6">
                  <div className="h-[56px] grid grid-cols-1">
                    <div className="h-[40px] flex items-center justify-start text-[20px] text-[#026AA2] font-[500]">
                      Reset with email
                    </div>
                    <hr className="mt-3" />
                  </div>
                  <div>
                    <form onSubmit={emailForm.handleSubmit(handleResetPassword)}>
                      <div className="text-[14px] font-[500]">
                        <FormInput
                          // required
                          title="Email address"
                          prefix={<div className="flex items-center justify-center w-6 h-6 text-[#667085]"><IconEmail /></div>}
                          name="email"
                          placeholder="Please enter"
                          control={emailForm.control}
                          error={emailForm.formState.errors}
                          className="h-[46px]"
                        />  
                      </div>
                      <div className="flex flex-col gap-y-4">
                        <Button
                          type="submit"
                          variant="primary" 
                          className='w-full h-[46px] rounded-full tracking-[1.25px]'>
                            Send email
                        </Button>
                        <Button
                          type="button"
                          onClick={handleBacktoLogin}
                          variant="tertiary-gray"
                          className='w-full h-[48px] rounded-full tracking-[1.25px]'
                        >
                          Back
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              }

              { step === 6 && 
                <div className="grid grid-cols-1 gap-y-6">
                 
                  <hr className="mt-8" />

                  <div className="flex flex-col items-center justify-center gap-y-2">
                    <div className="flex items-center justify-centerw-[78px] h-[78px]">
                      <IconLoggedIn />
                    </div>
                    <div className="w-full flex items-center justify-center h-[20px] text-[20px] text-[#667085] font-[500] leading-normal">
                      Email Sent
                    </div>
                  </div>
                  
                  <div className="w-full h-[40px] text-[12px] text-[#667085] font-[400] leading-normal">
                    <div className="flex items-center justify-center">
                      <p>{"We sent you an email to"}&nbsp;</p>
                      <span className="text-[#1A1A1A]">
                        {emailForm.getValues('email')}
                      </span>
                    </div>
                    <div className="flex items-center justify-center">Follow the instructions in the email to reset your password.</div>
                  </div>
                  <div className="w-full h-[40px] text-[12px] text-[#667085] font-[400] leading-normal">
                    <div className="flex items-center justify-center">
                      {`Can't find the email?`}
                    </div>
                    <div className="flex items-center justify-center">Make sure the email address is correct or check your spam folder.</div>
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <Button
                      type="button"
                      onClick={handleCancel}
                      variant="primary"
                      className='w-full h-[48px] rounded-full'
                    >
                      Ok
                  </Button>
                  </div>
                </div>
              }

              { step === 7 &&
                <div className="grid grid-cols-1 gap-y-6">
                 
                  <hr className="mt-8" />

                  <div className="flex flex-col items-center justify-center gap-y-2">
                    <div className="flex items-center justify-centerw-[78px] h-[78px]">
                      <IconLoggedIn />
                    </div>
                    <div className="w-full flex items-center justify-center h-[20px] text-[20px] text-[#667085] font-[500] leading-normal">
                      Tour Master User!     
                    </div>
                  </div>
                  
                  <div className="w-full h-[40px] text-[12px] text-[#667085] font-[400] leading-normal">
                    <div className="flex items-center justify-start">
                      Seems like your email is already linked to a Tour Master account. If you 
                    </div>
                    <div className="flex items-center justify-start">
                      continue, this email will automatically be associated with your new account
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <GoogleButton onClick={() => ""}/>
                    <Button
                      type="button"
                      onClick={handleCancel}
                      variant="tertiary-gray"
                      className='w-full h-[48px] rounded-full'
                    >
                      Back
                  </Button>
                  </div>
                </div>
              }
            </div>
          </dialog>
        </div>
      </Portal>
    </>
  );
};