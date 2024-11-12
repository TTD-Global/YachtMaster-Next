'use client'
import { cn } from '@/helpers/clsx';
import { Button } from '@/components/ui'
import Link from 'next/link';

interface BannerPageSectionProps {
  className?:string;
}
const BannerPageSection:React.FC<BannerPageSectionProps> = ({className}) => {
  const image = 'images/big_home_page.png';
  return (
    <section className={cn(`w-full bg-primary-900`,className)}>
      <div 
        // className="w-full min-h-[395px] flex flex-col justify-center items-center bg-image-cover" 
        className="w-full min-h-[395px] flex flex-col justify-center items-center bg-img-cover" 
        style={{backgroundImage: `url(${image})`}}
      > 
        <span className="text-white font-medium text-center text-[34px]">{`Explore the Globe's Most Captivating Places`}</span>
        <Link href="/destination">
          <Button className='min-w-[280px]' variant="secondary-color" shape={'round'} size="lg" onClick={()=> ""}>Get Started</Button>
        </Link>
      </div>
    </section>
  )
}

export default BannerPageSection;
