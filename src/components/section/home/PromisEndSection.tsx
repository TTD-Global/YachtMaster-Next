'use client'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

const formSchema = z.object({
    username: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	  }),
      email: z.string().min(2, {
		message: "Email Request.",
	  }),
	  phone: z.string().min(2, {
		message: "Phone Request.",
	  }),
	  company: z.string().min(2, {
		message: "Company Request.",
	  }),
	  detail: z.string().min(2, {
		message: "Message Request.",
	  }),
  })

export default function PromisEndSection() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
			username: "",
			email: "",
			phone: "",
			company: "",
			detail: "",
        },
      })

	function onSubmit(values: z.infer<typeof formSchema>) {
	// Do something with the form values.
	// ✅ This will be type-safe and validated.
	console.log(values)
	}

  return (
    <>
    <section className="p-spacer-b-2">
		<div className="container">
			<div className="row justify-content-between align-items-lg-center">
				<div className="col-lg-6 col-xl-5 p-spacer-b-2 pb-lg-0">
					<h2 className="p-spacer-b h2-small">Love to hear from you get in Touch</h2>
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="contact-form form-style">
						<div className="row">
							
						  <div className="col-md-6 mt-md-4">
						  <FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
								<FormLabel className='label-form'>Your Name</FormLabel>
								<FormControl>
									<Input placeholder="Name,Surename" {...field} value={field.value}/>
								</FormControl>
								<FormMessage />
								</FormItem>
							)}
							/>
						  </div>
						  <div className="col-md-6 mt-4">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
									<FormLabel className='label-form'>E-Mail</FormLabel>
									<FormControl>
										<Input placeholder="You E-Mail Adress" {...field} />
									</FormControl>
									<FormMessage />
									</FormItem>
								)}
							/>
						  </div>
						</div>
						<div className="row">
						  <div className="col-md-6 mt-4">
						  	<FormField
								control={form.control}
								name="phone"
								render={({ field }) => (
									<FormItem>
									<FormLabel className='label-form'>Your Phone Number</FormLabel>
									<FormControl>
										<Input placeholder="+33 6 513 28 45" {...field} />
									</FormControl>
									<FormMessage />
									</FormItem>
								)}
							/>
						  </div>
						  <div className="col-md-6 mt-4">
						  	<FormField
								control={form.control}
								name="company"
								render={({ field }) => (
									<FormItem>
									<FormLabel className='label-form'>Company Name</FormLabel>
									<FormControl>
										<Input placeholder="Ychtmaster" {...field} className='form-control' />
									</FormControl>
									<FormMessage />
									</FormItem>
								)}
							/>
						  </div>
						</div>
						<div className="row mt-4">
						  <div className="col-md-12">
						  <FormField
							control={form.control}
							name="detail"
							render={({ field }) => (
								<FormItem>
								<FormLabel className='label-form'><span >Message</span></FormLabel>
								<FormControl>
									<Textarea placeholder="Enter your message here" {...field} className='form-control'/>
								</FormControl>
								<FormMessage />
								</FormItem>
							)}
							/>
						  </div>
						</div>
						<div className="row mt-4 spacer-b-small">
						  <div className="col-md-12 d-flex align-items-center">
						  <Checkbox id="terms" />
							<label
								htmlFor="terms"
								className="form-check-label"
							>
								Accept terms and conditions
							</label>
							{/* 
							<input type="checkbox" className="form-check-input" id="terms" name="terms"> 
							<label className="form-check-label" for="terms">I agree with the Terms</label>
							*/}
						  </div>
						</div>
						<div className="row mt-4">
						  <div className="col-md-12">
							<button type="submit" className="button">Send Now</button>
						  </div>
						</div>
                        </form>
					
                    </Form>

				</div>
				<div className="col-lg-5 col-xl-6">
					<picture>
                        <img className="img-fluid rounded-5" src="/sys_img/img/power_catermaran.jpg" alt="Krabi Islands Drone Picture" />
					</picture>
		
				</div>
			</div>
		</div>
	</section>
    </>
  )
}
