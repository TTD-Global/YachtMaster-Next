"use client"

import { cn } from '@/helpers/clsx';
import { PopularCard, PopularCardSkeleton } from '@/components/card';
import { Button } from '@/components/ui'
import Link from 'next/link';
import { popular_card_list } from '@/utils/simple-data';

interface PopularSectionProps {
  className?:string;
}

const PopularSection = ({className} : PopularSectionProps) => {
  const isLoading = false;
  const lists = popular_card_list;
  return (
    <>
      <section className={cn(`w-full`,className)}>
        <h1 className='text-[34px] font-[400] text-primary-900'>Most Popular Travel Experiences</h1>
        <p className='text-[16px] font-[400] text-primary-900'>Indulge in diverse cultures, immerse yourself in rich histories, and create your own travel story.</p>
        <div className="mt-[64px] popular-grid">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <PopularCardSkeleton key={index} />
            ))
          )
          : lists?.map((list, index) => (
            <PopularCard key={index} list={list}/>
          ))}
        </div>
        <div className="w-full mt-12 mx-auto text-center">
          <Link href="/poppular">
            <Button className='min-w-[280px]' variant="primary" shape={'round'} size="lg" >See all</Button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default PopularSection;
