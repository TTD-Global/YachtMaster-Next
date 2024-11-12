import { ContentCollapse } from '@/components/ui'
import React from 'react'

const Page = () => {
  return (
    <>
      <div className="self-stretch h-[102px] flex-col justify-start items-start gap-12 flex">
        <div className="flex-col justify-start items-start gap-5 flex">
          <div className="self-stretch h-14 flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch text-slate-700 text-[34px] font-normal tracking-tight">How can we support you?</div>
          </div>
          <div className="self-stretch text-gray-500 text-base font-normal tracking-tight">Need something cleared up? Here are our most frequently asked questions.</div>
        </div>
      </div>
      
      <hr className="my-8"/>

      <div className="self-stretch h-10 flex-col justify-start items-start gap-12 flex">
        <div className="self-stretch h-10 flex-col justify-start items-start gap-5 flex">
          <div className="self-stretch h-10 flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch text-gray-900 text-2xl font-medium ">Explore frequently asked questions.</div>
          </div>
        </div>
      </div>
      
      <div className="self-stretch min-h-[672px] mb-6 flex-col justify-start items-start gap-8 flex">
        <ContentCollapse 
          header="How can I book?"
          content="Find your preferred tour, click ‘see dates’ button, select your tour date then number of people, leave your contact information, continue to the payment page, and get your booking confirmation email."
        />
        <ContentCollapse 
          header="What is the longest that a tour would take to be confirmed?"
          content="Some of our tours are marked ‘24 Hour Confirmation’, which means that the Tour Operator providing your activity has a period of 24 hours within which accept or reject your booking, depending on their availability. If the Tour Operator accepts your booking, only then will your credit card be processed. If the Tour Operator rejects it, your credit card will not be processed at all."
        />
        <ContentCollapse 
          header="What currencies does support?"
          content="At the moment we only support transactions in Thai Baht (THB). If you’re from another area, your credit card should automatically convert the charges into your local currency."
        />
        <ContentCollapse 
          header="What should I do if I need to change booking details?"
          content="For changes to your pick-up address, phone number or email, please let us know. through email: tourmaster@ttdthailand.com  , Hotline : +66 622186466 WhatsApp(chat only): +66 622186466. Please note that last minute changes may not be accepted due to late notice."
        />
        <ContentCollapse 
          header="Can I cancel my booking?"
          content="Yes, please contact us and we will offer you final confirmation about the cancellation. Our email: tourmaster@ttdthailand.com. Please note that last minute changes may not be accepted due to late notice."
        />

        <ContentCollapse 
          header="Can I get a refund for the cancellation?"
          content="Please contact us directly if you need to cancel your tour. Check on the tour page since different cancellation policies apply to different tours. Our team will reply you with the final cancellation confirmation."
        />
        <ContentCollapse 
          header="How long it takes to get my refund?"
          content="Once you get confirmation of cancellation from our team, we will proceed refund within 2 business days, the refund will go back to the platform you originally used to pay to us. You can expect to see the refund reflect on bank statement in approximately 10 business days. For some banks, this process may take up to 30 days. Should you still not have received your refund in your account within these timeline, please contact us directly."
        />
        <ContentCollapse 
          header="How to contact us?"
          content={
            <>
              <div className="pl-6">
                <li className="pl-4">{`What's app : +66 622186466`}</li>
                <li className="pl-4">Send an email : tourmaster@ttdthailand.com</li>
                <li className="pl-4">Call us : +66 622186466</li>
              </div>
            </>
          }
        />
         

      </div>
    </>
  )
}

export default Page
