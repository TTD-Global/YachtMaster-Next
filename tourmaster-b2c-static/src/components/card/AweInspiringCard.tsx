"use client";
import Link from "next/link";
import Image from "next/image";
import { PopularCardProps  } from "@/utils/types";
import { useRouter } from "next/navigation";

interface AweInspiringCardProps {
  // key: any;
  // list: PopularCardProps;
  list: { 
    id: string; 
    image: string; 
    name: string; 
    code: string; 
    tagline: string[]; 
    rating: string; 
    count: string; 
    booked: string; 
    price: string; 
    discount: string; 
  };
}
const AweInspiringCard: React.FC<AweInspiringCardProps> = ({ list }) => {
  let router = useRouter();

  const handleClickLink = (code: any) => {
    const query = {
      province: code,
      is_search: "destination",
    };
    const queryString = new URLSearchParams(query).toString();
    router.push(`/destination?${queryString}`, { scroll: false });
  };
  return (
    <article className="group awe-card rounded-xl hover-card-anim overflow-hidden">
      {/* <Link href={`/product/${list.name.toLowerCase().replace(' ', '_')}`} className='flex flex-col justify-between rounded-xl'> */}
      <div
        className="flex flex-col justify-between rounded-xl cursor-pointer"
        onClick={() => handleClickLink(list.code)}
      >
        <div className="relative w-full image hero-image">
          <Image
            src={list.image}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            alt={"Image Name"}
            className="object-cover"
          />
        </div>
        <div className="overlay absolute bottom-0 min-h-[150px] grad-bottom w-full" />
        <p className="absolute bottom-[12px]  px-[12px] text-white font-semibold line-clamp-1">
          {list.name}
        </p>
      </div>
      {/* </Link> */}
    </article>
  );
};

export default AweInspiringCard;
