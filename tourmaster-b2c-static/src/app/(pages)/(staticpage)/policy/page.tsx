"use client";
import { BackTop } from "@/components/ui";

const Policy = () => {
  const data = [
    {
      title: "Last Updated on 16/07/2024",
      detail: (
        <p>
          This website www.tehmasterth.com is operated by TTD GLOBAL Co.,Ltd, we
          are committed to protecting your privacy. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your information when you
          visit our website www.tehmasterth.com.
        </p>
      ),
    },
    {
      title: "Information We Collect",
      detail: (
        <>
          <p className="mb-6">
            We may collect information about you in a variety of ways. The
            information we may collect on the Site includes:
          </p>
          <p>
            -{" "}
            <span className="font-semibold text-primary-500">
              Personal Data
            </span>
            : Personally identifiable information, such as your name, shipping
            address, email address, and telephone number, and demographic
            information, such as your age, gender, hometown, and interests, that
            you voluntarily give to us when you register with the Site or when
            you choose to participate in various activities related to the Site,
            such as online chat and message boards.
          </p>
          <p>
            -{" "}
            <span className="font-semibold text-primary-500">
              Derivative Data
            </span>{" "}
            : Information our servers automatically collect when you access the
            Site, such as your IP address, your browser type, your operating
            system, your access times, and the pages you have viewed directly
            before and after accessing the Site.
          </p>
          <p>
            -{" "}
            <span className="font-semibold text-primary-500">
              Financial Data
            </span>
            : Financial information, such as data related to your payment method
            (e.g., valid credit card number, card brand, expiration date) that
            we may collect when you purchase, order, return, exchange, or
            request information about our services from the Site.
          </p>
        </>
      ),
    },
    {
      title: "Use of Your Information",
      detail: (
        <div className="flex flex-col gap-8">
          <p>
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you via the Site to:
          </p>
          <div>
            <p>- Create and manage your account.</p>
            <p>
              - Process your transactions and send you related information,
              including purchase confirmations and invoices.
            </p>
            <p>- Email you regarding your account or order.</p>
            <p>- Enable user-to-user communications.</p>
            <p>
              - Fulfill and manage purchases, orders, payments, and other
              transactions related to the Site.
            </p>
            <p>
              - Generate a personal profile about you to make future visits to
              the Site more personalized.
            </p>
            <p>- Increase the efficiency and operation of the Site.</p>
            <p>
              - Monitor and analyze usage and trends to improve your experience
              with the Site.
            </p>
            <p>- Perform other business activities as needed.</p>
          </div>
        </div>
      ),
    },
    {
      title: "Disclosure of Your Information",
      detail: (
        <>
          <p className="mb-6">
            We may share information we have collected about you in certain
            situations. Your information may be disclosed as follows:
          </p>
          <p>
            -{" "}
            <span className="font-semibold text-primary-500">
              By Law or to Protect Rights
            </span>
            : If we believe the release of information about you is necessary to
            respond to legal process, to investigate or remedy potential
            violations of our policies, or to protect the rights, property, and
            safety of others, we may share your information as permitted or
            required by any applicable law, rule, or regulation.
          </p>
          <p>
            -{" "}
            <span className="font-semibold text-primary-500">
              Business Transfers
            </span>{" "}
            : We may share or transfer your information in connection with, or
            during negotiations of, any merger, sale of company assets,
            financing, or acquisition of all or a portion of our business to
            another company.
          </p>
          <p>
            -{" "}
            <span className="font-semibold text-primary-500">
              Third-Party Service Providers
            </span>
            : We may share your information with third parties that perform
            services for us or on our behalf, including payment processing, data
            analysis, email delivery, hosting services, customer service, and
            marketing assistance.
          </p>
          <p>
            -{" "}
            <span className="font-semibold text-primary-500">
              Marketing Communications
            </span>
            : With your consent, or with an opportunity for you to withdraw
            consent, we may share your information with third parties for
            marketing purposes, as permitted by law.
          </p>
        </>
      ),
    },
    {
      title: "Security of Your Information",
      detail: (
        <p>
          We use administrative, technical, and physical security measures to
          help protect your personal information. While we have taken reasonable
          steps to secure the personal information you provide to us, please be
          aware that despite our efforts, no security measures are perfect or
          impenetrable, and no method of data transmission can be guaranteed
          against any interception or other type of misuse.
        </p>
      ),
    },
    {
      title: "Changes to This Privacy Policy",
      detail: (
        <p>
          We may update this Privacy Policy from time to time in order to
          reflect changes to our practices or for other operational, legal, or
          regulatory reasons. We will notify you of any changes by posting the
          new Privacy Policy on our website. You are advised to review this
          Privacy Policy periodically for any changes.
        </p>
      ),
    },
    {
      title: "Contact Information",
      detail: (
        <p>
          For any questions or concerns regarding the privacy policy, please
          send us an email at tourmaster@ttdthailand.com.
        </p>
      ),
    },
  ];

  return (
    <>
      <p className="text-[34px] text-gray-900">Privacy Policy</p>
      <div className="w-full h-[1px] bg-gray-300 my-8"></div>
      <div className="flex flex-col gap-8 mb-10 w-full">
        {data.map((item, index) => (
          <Box key={index} title={item.title} detail={item.detail} />
        ))}
      </div>
      <BackTop />
    </>
  );
};

export default Policy;

interface BoxProps {
  title: string;
  detail: string | React.ReactNode;
}
const Box: React.FC<BoxProps> = ({ title, detail }) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <p className="text-gray-900 text-2xl font-medium">{title}</p>
      <div className="px-8 py-6 text-black tracking-[0.5px] bg-primary-25 rounded-2xl">
        {detail}
      </div>
    </div>
  );
};
