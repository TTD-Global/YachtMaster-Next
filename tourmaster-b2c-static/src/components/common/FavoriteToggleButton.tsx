'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Tag, Overflow } from '@/components/ui';

interface FavoriteToggleButtonProps {
  lists: string[];
}

const FavoriteToggleButton:React.FC<FavoriteToggleButtonProps> = ({lists}) => {
  const navRef = useRef<any>(null)

  const [visibilityMap, setVisibilityMap] = useState<any>({});

  const handleIntersection = (entries:any) => {
      const updatedEntries:any = {};
      entries.forEach((entry:any) => {
          const targetid = entry.target.dataset.targetid;
          if (entry.isIntersecting) {
              updatedEntries[targetid] = true;
          } else {
              updatedEntries[targetid] = false;
          }
      });

      setVisibilityMap((prev:any) => ({
          ...prev,
          ...updatedEntries
      }));
  };

  useEffect(() => {
      const observer = new IntersectionObserver(handleIntersection, {
          root: navRef.current,
          threshold: 1
      });

      Array.from(navRef.current.children).forEach((item:any) => {
        if (item.dataset.targetid) {
          observer.observe(item);
        }
      });

      return () => observer.disconnect();
  }, []);

  return (
    <>
      <Overflow className='w-full' visibilityMap={visibilityMap} ref={navRef}>
        {lists?.map((list, key) => (
          <Tag key={key} bordered={false} data-targetid={key} color="blue" className='tag-popular'>{list}</Tag>
        ))}
      </Overflow>
    </>
  )
}

export default FavoriteToggleButton;
