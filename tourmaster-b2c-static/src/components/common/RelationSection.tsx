
"use client"
import { PopularCard } from '@/components/card';
import { relation_card_list } from '@/utils/simple-data';
// import { useFetchPopular } from '@/hooks/popular';
import React, { useEffect } from 'react'

// import Cookies from 'universal-cookie';
interface RelationSectionProps {
  setIsShow?: any;
}
const RelationSection:React.FC<RelationSectionProps> = ({ setIsShow }) => {
  // const cookies = new Cookies();
  // const currency = cookies.get('NEXT_CURRENCY') || "thb"
  // const { MostPopularHome } = useFetchPopular()
  // const { data:lists,mutate } = MostPopularHome(4, currency)
  // useEffect(() => {
  //   mutate()
  // }, [])
  const lists = relation_card_list;
  return (
    <div className=" w-full my-[64px]">
      <h3 className="mb-[40px] text-[24px]">You might also like...</h3>
      <div className="mt-[64px] popular-grid">
        {lists?.map((list, index) => (
          <PopularCard key={index} list={list} />
        ))}
      </div>
    </div>
  );
};

export default RelationSection;
