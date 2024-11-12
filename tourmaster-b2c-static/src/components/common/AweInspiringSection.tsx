'use client'
import { cn } from '@/helpers/clsx';
import { Button } from '@/components/ui'
import { AweInspiringCard } from '@/components/card';
import Link from 'next/link';

interface AweInspiringSectionProps {
    className?:string;
}
const AweInspiringSection:React.FC<AweInspiringSectionProps> = ({className}) => {
  const lists = [
    {
      id: '1',
      image: '/images/awe/awe_1.png',
      name: 'Bangkok',
      code: 'bangkok',
      tagline: ["Join in group", "day(s) Duration", "Bestseller", "Meet with guide"],
      rating: "4.9",
      count: "2,000",
      booked: "2 K+",
      price: "$ 2,000",
      discount: "$ 100",
    },
    {
      id: '2',
      image: '/images/awe/awe_2.png',
      name: 'Phuket',
      code: 'phuket',
      tagline: [],
      rating: "4.9",
      count: "2,000",
      booked: "2 K+",
      price: "$ 2,000",
      discount: "$ 100",
    },
    {
      id: '3',
      image: '/images/awe/awe_3.png',
      name: 'Chiang Mai',
      code: 'chiang-mai',
      tagline: ["Bestseller", "Meet with guide", "Join in group", "day(s) Duration"],
      rating: "4.9",
      count: "2,000",
      booked: "2 K+",
      price: "$ 2,000",
      discount: "$ 100",
    },
    {
      id: '4',
      image: '/images/awe/awe_4.png',
      name: 'Pattaya',
      code: 'pattaya',
      tagline: [],
      rating: "4.9",
      count: "2,000",
      booked: "2 K+",
      price: "$ 2,000",
      discount: "$ 100",
    },
    {
      id: '5',
      image: '/images/awe/awe_5.png',
      name: 'Krabi',
      code: 'krabi',
      tagline: [],
      rating: "4.9",
      count: "2,000",
      booked: "2 K+",
      price: "$ 2,000",
      discount: "$ 100",
    },
    {
      id: '6',
      image: '/images/awe/awe_6.png',
      name: 'Koh Samui',
      code: 'koh-samui',
      tagline: [],
      rating: "4.9",
      count: "2,000",
      booked: "2 K+",
      price: "$ 2,000",
      discount: "$ 100",
    },
  ];
  return (
    <section className={cn(`w-full`, className)}>
      <h1 className='text-[34px] font-[400] text-primary-900'>{`Awe-inspiring destinations`}</h1>
      <p className='text-[16px] font-[400] text-primary-900'>{`Unforgettable Journeys: Witness the World's Most Breathtaking Beauty.`}</p>
      <div className='mt-[64px] awe-grid'>
        {lists.map((list, index) => (
          <div key={index}>
              <AweInspiringCard list={list}/>
          </div>
        ))}
      </div>
      <div className="w-full mt-12 mx-auto text-center">
        <Link href="/destination">
          <Button className='min-w-[280px]' variant="primary" shape={'round'} size="lg" onClick={() => ""}>See all</Button>
        </Link>
      </div>
    </section>
  )
}

export default AweInspiringSection;
