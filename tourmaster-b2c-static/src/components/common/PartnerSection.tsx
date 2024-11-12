import { cn } from '@/helpers/clsx';
import Image from 'next/image';
import Link from 'next/link';

interface PartnerSectionProps {
    className?: string;
    text?: string;
}

const PartnerSection:React.FC<PartnerSectionProps> = ({className, text}) => {
  const lists = [
    {
      image: "/images/home-partner/Logo_klook.png",
      alt: "Klook",
      width: 200,
      height: 57,
    },
    {
      image: "/images/home-partner/Logo_ GetYourGuide.png",
      alt: "GetYourGuide",
      width: 153,
      height: 131,
    },
    {
      image: "/images/home-partner/Logo_ Headout.png",
      alt: "Headout",
      width: 210,
      height: 33,
    },
    {
      image: "/images/home-partner/Logo_ KKDAY.png",
      alt: "KKDAY",
      width: 177,
      height: 101,
    },
    {
      image: "/images/home-partner/Logo_ Pelago.png",
      alt: "Pelago",
      width: 169,
      height: 49,
    },
    {
      image: "/images/home-partner/Logo_ Trip.png",
      alt: "Trip",
      width: 153,
      height: 81,
    },
    {
      image: "/images/home-partner/traveloka_logo.png",
      alt: "Traveloka",
      width: 153,
      height: 35,
    },
    {
      image: "/images/home-partner/Logo_ viator.png",
      alt: "Viator",
      width: 160,
      height: 41,
    },
    {
      image: "/images/home-partner/Logo_tripadvisor.png",
      alt: "Tripadvisor",
      width: 217,
      height: 103,
    },

  ];
  return (
    <section className={cn(`w-full`, className)}>
        <h1 className={cn(`font-[400] text-primary-900 mt-[40px] mb-[64px]`, text)}>Trusted Partnerships</h1>
        <div className='w-full my-[40px] partner-flex'>
        {lists.map((list, index) => (
          <div key={index}>
            <Link href={'/'}>
              <Image
                src={list.image}
                width={list.width}
                height={list.height}
                alt={list.alt}
                className='mx-auto'
              />
            </Link>
          </div>
        ))}
        </div>
    </section>
  )
}

export default PartnerSection;