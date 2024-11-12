'use client'
import React from 'react'
import { Button, FormInput, FormTextArea } from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
const ContactForm = () => {
    const emailSchema = z.object({
        full_name: z
          .string({ required_error: `Please enter your name` })
          .min(1, { message: "Please enter your name" }),
        email: z
          .string({ required_error: `Please enter email address` })
          .min(1, { message: "Please enter email address" })
          .email({ message: "Enter a valid email" }),
        message: z
          .string({ required_error: `Please enter message` })
          .min(1, { message: "Please enter message" })
    });

    type emailForm = z.infer<typeof emailSchema>;
    const emailForm = useForm<emailForm>({
        resolver: zodResolver(emailSchema),
        defaultValues: {},
    });

    const handleSubmit = (data: emailForm) => {
        console.log("Success:", data);
    };
  return (
    <div className="w-[1280px] mt-[64px] mb-6 px-8 flex-col justify-start items-start gap-16 inline-flex">
        <div className="self-stretch h-[507px] flex-col justify-start items-center gap-16 flex">
          <div className="w-[520px] p-5 bg-gray-50 rounded-[20px] flex-col justify-start items-center">
            <form onSubmit={emailForm.handleSubmit(handleSubmit)}>
              <div className="">
                <FormInput
                  required
                  title="Full name"
                  name="full_name"
                  placeholder="Please enter"
                  className="w-full h-[46px]"
                  control={emailForm.control}
                  error={emailForm.formState.errors}
                />
                <FormInput
                  required
                  title="Email"
                  name="email"
                  placeholder="Please enter"
                  className="w-full h-[46px]"
                  control={emailForm.control}
                  error={emailForm.formState.errors}
                />
                <FormTextArea
                  required
                  title="Message"
                  name="message"
                  placeholder="Leave us a message..."
                  style={{ minHeight: '160px' }}
                  control={emailForm.control}
                  error={emailForm.formState.errors}
                />
                <Button type="submit" variant="primary" className="self-stretch w-full h-12 px-5 py-3 bg-sky-500 rounded-3xl shadow justify-center items-center gap-2 inline-flex">
                  <div className="text-white text-base font-medium tracking-wider">Send message</div>
                </Button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
  )
}

export default ContactForm;
