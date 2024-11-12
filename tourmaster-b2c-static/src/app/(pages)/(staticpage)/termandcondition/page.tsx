import { BoxContentBlue, BackTop } from "@/components/ui";

const TermAndCondition = () => {
  const data = [
    {
      title: "Last Updated on 09/07/2024",
      detail: <>
        <p className="mb-8">{`This website www.tehmasterth.com is operated by TTD GLOBAL Co.,Ltd, ((hereinafter “Tour Master”, “we”, “us”, and “our”), we hereby provide our users (hereinafter “Users”, “user”, “You”, “you” and “your” includes any person who accesses this Website or uses the Services). `}</p>
        <p>{`Please read these Terms and Conditions of Use (hereinafter the “Terms”) carefully before using the Website, as the Terms form a legally binding agreement between you and us (hereinafter the “Agreement”), in relation to your use of the Website and the Services.`}</p>      
      </>,
    },
    {
      title: "Agreement",
      detail: <>
        <p className="mb-8">{`By using the Website, you agree to be bound by this Agreement. If you do not agree to the Terms, please do not use the Website. Further, by using the Website, you affirm that you are of legal age to enter into this Agreement or, if you are not, that you have obtained parental or guardian consent to enter into this Agreement. If you are not of legal age to enter into this Agreement and have not obtained parental or guardian consent to enter into this Agreement, then you may not use the Website.`}</p>
        <p className="mb-8">{`Any purchase or booking made through the Website shall be subject to the Terms, and shall imply an acceptance of the Terms.`}</p>
        <p className="mb-8">{`We reserve the right to change this Agreement, in whole or in part, in writing from time to time at our sole discretion, and to provide you with notice of such change by any reasonable means, including without limitation, by posting the revised Terms on the Website. You can determine when the Terms were last revised by referring to the “last updated” legend at the top of the Terms. Your continued use of the Website following the posting of changes to the Terms will mean that you accept those changes. If you do not agree to such changes, you should not use the Website. We further reserve the right to, at any time, modify or discontinue any part of the Website at our sole discretion, as well as to impose limits or conditions on certain Services or restrict your access to any part or all of the Services without notice or liability.`}</p>
        <p>{`In addition, when using the Services you acknowledge that you shall be subject to any additional terms applicable to the Services that may be posted on the page from time to time, including but not limited to our Privacy Policy, and our Assumption of Risk Agreement and Release of Liability. All such terms are hereby expressly incorporated by reference into these Terms.`}</p>      
      </>,
    },
    {
      title: "Content",
      detail: <>
        <p className="mb-8">{`"Content" includes text, such as useful information, software, scripts, graphics, photos, sounds, music, videos, audio-visual combinations, interactive features, and other materials you may view on, access through, or contribute to the Website.`}</p>
        <p className="mb-8">{`The Website shall provide free useful information about the places where we operate. This information includes but is not limited to: name of currency of a country, exchange rates, weather forecast, useful phone numbers and addresses (i.e.: police, hospitals, etc), places of interest, tours, and activities.`}</p>      
        <p className="mb-8">{`Using the Website, Users may be exposed to Content that may be offensive, indecent, inaccurate, objectionable, or otherwise inappropriate or objectionable to you. You therefore access and use the Website at your own risk. We do not give any representation, warranty, or undertaking that the Content shall be at all times accurate, as it may change from time to time, and it may take some time for us to update it. You agree to waive, and hereby do waive, any legal or equitable rights or remedies you have or may have against Tour Master with respect to any such Content. Therefore, under no circumstances shall Tour Master be responsible for any loss, direct or indirect damage, or costs and/or expenses, which you may suffer or incur arising from our Content, or our use of the Content uploaded by you, as set forth in these Terms.`}</p>      
        <p>{`With the exception of Content submitted to the Website by you, all other Content is either owned by or licensed to Tour Master, and is subject to copyright, trademark rights, and other intellectual property rights of Tour Master or Tour Master’s licensors. The Content may not be downloaded, copied, reproduced, distributed, transmitted, broadcasted, displayed, sold, licensed, or otherwise exploited for any other purpose whatsoever without the prior written consent of Tour Master or, where applicable, Tour Master’s licensors.`}</p>      
      </>,
    },
    {
      title: "Uploading Content",
      detail: <>
        <p className="mb-8">{`As an account user, you are entitled to upload Content to the Website. We do not guarantee any confidentiality with respect to said Content. You understand and agree that you are solely responsible for your own Content and the consequences of posting or publishing it to the Website. Tour Master does not endorse any Content uploaded by Users, or any opinion, recommendation, or advice expressed therein, and we expressly disclaim any and all liability in connection thereto.`}</p>
        <p className="mb-8">{`You agree that the Content you submit to the Website will not:`}</p>
        <div className="mb-8">
          <ol className="counter-list">
            <li>{`contain any third-party copyright material, or material that is subject to other third-party proprietary rights (including but not limited to, rights of privacy or intellectual rights), unless you have a formal license or permission from the rightful owner, or are otherwise legally entitled, to post the material in question and to grant us the license referred to herein below;`}</li>
            <li>{`contain material which it is unlawful for you to possess in the country in which you are resident, or which it would be unlawful for Tour Master to use or possess in connection with the provision of the Services;`}</li>
            <li>{`be false, intentionally misleading, or defamatory;`}</li>
            <li>{`contain illegal hate speech or pornography; or`}</li>
            <li>{`contain any profanity`}</li>
          </ol>
        </div>
        <p className="mb-8">{`You represent and warrant that you have (and will continue to have during your use of the Service) all necessary licenses, rights, consents, and permissions that are required to enable Tour Master to use your Content (including but not limited to the copyright, trade mark or other proprietary or intellectual property rights therein) for the purposes of the provision of the Services, and otherwise to use your Content in the manner described herein.`}</p>
        <p className="mb-8">{`You shall retain all of your ownership rights in your Content, but you hereby grant license rights to Tour Master and other Users of the Service. When uploading or posting Content to our Website, you grant Tour Master, a worldwide, non-exclusive, royalty-free, transferable license (with the right to sub-license) to use, reproduce, distribute, prepare derivative works of, display, and perform that Content in connection with the provision of the Services and otherwise in connection with the provision of the Services, including without limitation for promoting and redistributing our Website and Tour Master's business in any media formats and through any media channels. You further agree to grant to each user of the Service, a worldwide, non-exclusive, royalty-free license to access your Content through the Service and to use, reproduce, distribute, prepare derivative works of, display and perform such Content to the extent permitted by the functionality of the Service and under these Terms. The above-granted licenses in textual comments you submit as Content are perpetual and irrevocable, but are otherwise without prejudice to your ownership rights, which are retained by you as set out hereinabove.`}</p>
        <p className="dd">{`On becoming aware of any potential violation of these Terms, Tour Master reserves the right (but shall have no obligation) to decide whether Content complies with the content requirements set out herein and may remove such Content and/or terminate a User's access for uploading Content which is offensive, indecent, inaccurate, objectionable, or otherwise inappropriate or in violation of these Terms at any time, without prior notice and at our sole discretion.`}</p>      
      </>,
    },
    {
      title: "Browsing",
      detail: <>
        <p className="mb-8">{`We offer Users two possibilities in which to browse our Website: Creating an account, or without doing so. By creating an account, the User shall be able to enjoy the full scope of our Services. Without the account, Users shall only have access to publicly available Content.`}</p>
        <p>{`While browsing the Website, you may find hyperlinks to other websites that are not owned or controlled by Tour Master . Said links do not constitute an endorsement or recommendation by us of such websites, their products, services, contents, advertising, or any materials therein available. We have no control over these third-party websites, and therefore assume no responsibility for their contents, terms of use, or privacy policies. We strongly encourage you to be aware when you leave the Website and to read the terms and conditions and privacy policies of any other website that you visit.`}</p>      
      </>,
    },
    {
      title: "Account",
      detail: <>
        <p className="mb-8">{`The creation of an account is necessary to access most of the features of our Website, such as but not limited to developing a profile and uploading Content, writing reviews, rating, and commenting on other user's content, and getting accurate suggestions in accordance to your interests and travel destinations, contacting other users, booking and rating tours, sharing contents on social media, and inviting other users to join the Website, participating in promotions, games, and contests hosted on the Website.`}</p>
        <p className="mb-8">{`You agree to use the Website for lawful purposes only, and in a way that does not infringe the rights of, restrict or inhibit third party's rights, whether other Users or non-Users whatsoever. Therefore, you agree not to impersonate someone else, hold multiple accounts or create an account for anyone other than yourself without appropriate authorization, provide an email address other than your own, or create multiple accounts.`}</p>      
        <p className="mb-8">{`You agree that you will be solely responsible (to Tour Master, and to others) for all activity that occurs under your account.`}</p>
        <p>{`When creating your account, you must provide accurate and complete information. It is important that you keep your account password secure and confidential. You agree to notify us immediately of any unauthorized use of your account.`}</p>      
      </>,
    },
    {
      title: "Booking Tours",
      detail: <>
        <p className="mb-8">{`Users that have created an account shall be able to book the tours (“Tours” in plural and “Tour” in singular) advertised on the Website.`}</p>
        <p className="mb-8">{`Tours are offered on two modalities:`}</p>
        <p className="">          
          <span className="text-primary-500 font-[600]">Instant Confirmation:</span>{`The Tour is booked immediately upon payment, which shall be immediately performed following the User’s purchase confirmation.`}
        </p>
        <p className="mb-8">
          <span className="text-primary-500 font-[600]">24-hour Confirmation:</span>{`The Tour booking is subject to availability, which shall be confirmed within 24 hours as per the User’s purchase confirmation. We shall hold the credit card information while we confirm Tour availability for the requested dates. The User shall be charged only upon confirmation of the availability of the Tour for the requested dates. Following confirmation, the User shall be charged with the booking and shall receive an email with a confirmation of his booking and his Booking Vouchers.`}
        </p>
        <p className="mb-8">{`We are expressly not responsible or liable for any information relating to the Tour that is not directly provided on the Website.`}</p>
        <p className="mb-8">{`Prices listed on the Website are per person unless otherwise specified. Price quotations are subject to change without notice until a booking has been confirmed.`}</p>
        <p className="mb-8">{`Prices do not include gratuities to Tour Operators, drivers, or other personnel of the tour provider; passport and visa fees; baggage and personal insurance; or any other not listed under “Price Includes” in the Tour description.`}</p>
        <p className="mb-8">{`When a booking is performed for more than one person, the booking shall be considered as performed on behalf of the persons named in the booking and shall imply authorization on their behalf to do so.`}</p>
        <p>{`By booking a Tour you acknowledge, agree, and accept to be bound by any additional terms as detailed in the Tour’s description at the moment of performing the booking. These additional terms may make Tours dependent on weather conditions, and may postpone the commencement of the Tour until the additional conditions are fulfilled (e.g. Surfing classes for beginners may not be conducted on days of big/dangerous waves; rains may render a Tour or activity impossible; so they would be postponed to be performed as soon as possible).`}</p>      
      </>,
    },
    {
      title: "Payment",
      detail: <>
        <p className="mb-8">{`Tour Master shall charge 100% of the Tour to the User upon booking. This sum shall be displayed before check-out. The User shall not need to pay any additional sums of money for the booked Tour.`}</p>
        <p className="mb-8">{`We accept the following methods of payment: Visa, Master Card, PromptPay, Alipay (online) and WeChat Pay.`}</p>
        <p className="mb-8">{`There shall be no charge or service fee for processing credit or debit card payments.`}</p>
        <p className="mb-8">{`As may be detailed in the Tour description, there may be additional expenses that the User may have to afford outside of the Tour price. If the Tour Operator were to charge additional expenses not described in his profile, the User shall be entitled to reject those expenses. In order to do so, communication of any such situation is required immediately to Tour Master.`}</p>
        <p>{`When a booking is performed for more than one person, payment shall be considered as performed on behalf of the persons named in the booking and shall imply authorization on their behalf to do so. The User performing the booking on behalf of another User or a third party shall be liable for the no-show (as defined below) of any of the members of the group.`}</p>      
      </>,
    },
    {
      title: "Modifications, Cancellations, Refunds & No-show",
      detail: <>
        <p className="mb-8">{`Any request for modification, cancellation, no-show, or refund shall be channeled via email to tourmaster@ttdthailand.com `}</p>
        <p className="mb-8">{`The possibility of performing a change to your booking shall depend on the availability of the Tour Operator for the requested dates. Tour Master does not guarantee the success of change requests. We are, however, committed to performing our best endeavors to enable modification requests.`}</p>
        <p className="mb-8">{`Tour Operators may perform changes to tour dates, prices, inclusions, coverage, age requirements, etc. We, therefore, reserve the right to change or substitute the tour requirements or cancel the Tour booked through our Website, at any time and for any reason, before a booking is performed. Once a booking is performed, the Tour Operator may still perform changes to tour dates, age requirements, or other items not affecting the price of the booked Tour. If this were to occur, we shall make every reasonable effort to amend or re-issue the booking to the Users’ satisfaction. If the possibilities offered were not satisfactory, the Users shall be entitled to a full refund of the sums paid. This payment shall be final and shall be considered as payment settling any further possibility of a claim for direct or indirect damages.`}</p>
        <p className="mb-8">{`These terms are applicable to single, or group bookings alike.`}</p>
        <p className="mb-8">{`Each Tour has a different cancellation policy applicable to it, which is displayed on the Tour’s page together with its corresponding FAQs. Refunds of amounts paid shall depend on: (a) the cancellation policy applicable to said Tour; and (b) when the cancellation has been made. In case a cancellation does not satisfy these criteria, the User shall not be entitled to any refund whatsoever of the sums paid to perform the booking. For the avoidance of doubt, in case a User did not cancel the Tour and failed to be present at the time and place stipulated in his booking (hereinafter a “no-show”), the User shall not be able to claim any reimbursement or seek to modify the booking dates.`}</p>
        <p className="mb-8">{`In case of a No-show by the Tour Operator, the User shall have 48 (forty-eight) hours to notify us and ask for a refund of the booking fees paid. We shall investigate the case and if the claim were to be valid, we shall process the refund pursuant to these Terms and Conditions.`}</p>
        <p>{`Tour Master shall reimburse funds on the last day of each month, for all cancellations performed before the 15th of each month. Cancellations performed after the 15th of each month shall be payable on the last day of the following month. However, Tour Master will do the possible to issue the refund within 48h of the cancellation request. All transfers to the Users shall be performed via Visa, Master Card, PromptPay, Alipay (online) and WeChat Pay, according to the payment channel selected at the moment of purchase. Should Tour Master refund all or part of an amount paid, any transaction cost arising therefrom shall be for the User’s expense. For any questions relating to exchange rates and conversion fees, we suggest you contact your bank or card company.`}</p>      
      </>,
    },
    {
      title: "Governing Law",
      detail: <>
        <p>{`This Agreement is governed by and shall be construed in accordance with the laws of Thailand and the parties hereby submit to the exclusive jurisdiction of Thailand courts. Notwithstanding this, you agree that we shall be allowed to apply for injunctive remedies (or other equivalent types of urgent legal remedy) in any jurisdiction.`}</p>      
      </>,
    },
    {
      title: "Miscellaneous",
      detail: <>
        <p className="mb-8">{`These Terms are not assignable, transferable, or sub-licensable by you except with our prior written consent. We may transfer, assign, or delegate these Terms and their rights and obligations without any additional request of consent.`}</p>
        <p className="mb-8">{`Unless the context otherwise requires, words importing the singular number shall include the plural and vice versa, words importing the masculine gender shall include the feminine, and words importing persons shall include firms and companies and vice versa.`}</p>
        <p className="mb-8">{`The division of this Agreement into sections, clauses, sub-clauses, and the insertion of headings are for convenience of reference only and shall not affect the construction or interpretation hereof.`}</p>
        <p>{`Our failure to exercise any right provided for herein shall not be deemed a waiver of any right accrued hereunder.`}</p>      
      </>,
    },
  ];
  return (
    <section>
      <p className="text-[34px] text-gray-900">Terms & Conditions</p>
      <div className="w-full h-[1px] bg-gray-300 my-8"></div>
      <div className="flex flex-col gap-8 mb-10 w-full">
        {data.map((item, index) => (
          <BoxContentBlue key={index} title={item.title} detail={item.detail} />
        ))}
      </div>
      <BackTop />
    </section>
  ) 
}

export default TermAndCondition
