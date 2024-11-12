import IconFacebookFooter from '@/components/icons/IconFacebookFooter'
import IconGooglePay from '@/components/icons/IconGooglePay'
import IconInstagramFooter from '@/components/icons/IconInstagramFooter'
import IconJCB from '@/components/icons/IconJCB'
import IconMasterCard from '@/components/icons/IconMasterCard'
import IconPromptpay from '@/components/icons/IconPromptpay'
import IconUnionPay from '@/components/icons/IconUnionPay'
import IconVisa from '@/components/icons/IconVisa'
import IconWechatPay from '@/components/icons/IconWechatPay'
import IconYoutubeFooter from '@/components/icons/IconYoutubeFooter'
import { cn } from '@/helpers/clsx'
import Image from 'next/image'
import Link from 'next/link'

interface FooterProps {
  className?: string;
}
const Footer:React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn(`relative min-w-[1280px] w-full flex justify-center bg-slate-800`, className)}>
      <div className="w-[1440px] h-[313px] py-12 flex-col justify-start items-center gap-12 inline-flex">
        <div className="w-[1280px] h-[120px] px-8 flex-col justify-start items-start gap-12 flex">
          <div className="self-stretch justify-start items-start gap-8 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
              <div className="h-10 flex-col justify-start items-start gap-8 flex">
                <div className="w-[70.31px] h-10 justify-center items-center inline-flex">
                  <Link href="/"><Image src="/logoTourMaster2.webp" alt="via" width={71} height={41} /></Link>
                </div>
              </div>
              <div className="self-stretch justify-start items-center gap-8 inline-flex">
                <div className="w-[114px] px-5 py-3 rounded-3xl justify-center items-center gap-2 flex">
                  <Link href="/aboutus" className="text-sky-600 text-base font-medium underline tracking-wider">About us</Link>
                </div>
                <div className="w-[79px] px-5 py-3 rounded-3xl justify-center items-center gap-2 flex">
                  <Link href="/help" className="text-sky-600 text-base font-medium underline tracking-wider">Help</Link>
                </div>
                <div className="w-[105px] px-5 py-3 rounded-3xl justify-center items-center gap-2 flex">
                  <Link href="/contact" className="text-sky-600 text-base font-medium underline tracking-wider">Contact</Link>
                </div>
                <div className="w-[204px] px-5 py-3 rounded-3xl justify-center items-center gap-2 flex">
                  <Link href="/termandcondition" className="text-sky-600 text-base font-medium underline tracking-wider">Terms & Conditions</Link>
                </div>
                <div className="w-[158px] px-5 py-3 rounded-3xl justify-center items-center gap-2 flex">
                  <Link href="/policy" className="text-sky-600 text-base font-medium underline tracking-wider">Privacy policy</Link>
                </div>
              </div>
            </div>
            <div className="w-[196px] self-stretch px-px flex-col justify-start items-start gap-3 inline-flex">
              <div className="justify-start items-start gap-2.5 inline-flex">
                <div className="text-white text-base font-semibold font-['IBM Plex Sans Thai'] tracking-tight">Payment channels</div>
              </div>
              <div className="self-stretch grow shrink basis-0 flex-col justify-start items-center gap-2 flex">
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="w-9 h-5 px-2 py-0.5 bg-white rounded border border-gray-300 flex-col justify-center items-center gap-2.5 inline-flex">
                    <IconVisa />
                  </div>
                  <div className="w-9 h-5 px-2 py-0.5 bg-white rounded border border-gray-300 flex-col justify-center items-center gap-2.5 inline-flex">
                    <IconMasterCard />
                  </div>
                  <div className="w-9 h-5 px-2 py-0.5 bg-white rounded border border-gray-300 flex-col justify-center items-center gap-2.5 inline-flex">
                    <IconJCB />
                  </div>
                  <div className="w-9 h-5 px-2 py-0.5 bg-white rounded border border-gray-300 flex-col justify-center items-center gap-2.5 inline-flex">
                    <IconUnionPay />
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="w-9 h-5 px-2 py-0.5 bg-white rounded border border-gray-300 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="w-[29px] h-2.5 justify-center items-center inline-flex">
                      <IconPromptpay />
                    </div>
                  </div>
                  <div className="w-9 h-5 px-2 py-0.5 bg-white rounded border border-gray-300 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="w-[25px] h-2.5 relative">
                      <IconGooglePay />
                    </div>
                  </div>
                  <div className="w-9 h-5 px-2 py-0.5 bg-white rounded border border-gray-300 flex-col justify-center items-center gap-2.5 inline-flex">
                    <IconWechatPay />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1280px] h-[49px] px-8 flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch h-px bg-gray-500" />
          <div className="self-stretch justify-start items-center gap-8 inline-flex">
            <div className="grow shrink basis-0 text-gray-300 text-base font-normal leading-normal">© 2024 Tour Master. All rights reserved.</div>
            <div className="justify-start items-center gap-6 flex">
              <IconFacebookFooter />
              <IconInstagramFooter />
              <IconYoutubeFooter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
