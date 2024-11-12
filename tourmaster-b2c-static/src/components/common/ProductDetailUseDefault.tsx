import Link from 'next/link';
import React from 'react'
import { 
    DiscListContent, 
    DescriptionContent, 
  } from '@/components/common';
  
interface ProductDetailUseDefaultProps {
    lists:any;
    setItems: any;
    collapse: any[];
}

const ProductDetailUseDefault = ({lists, setItems, collapse }:ProductDetailUseDefaultProps) => {
    React.useEffect(() => {
        (() =>{
          if (lists) {
            // console.log("ProductDetail: " , lists)
            let slug = lists?.destination.name.replace(' ', '+');
            setItems((oldArray:any) => oldArray.length > 1
              ?  [
                    ...oldArray,
                  ] 
              : [
                  ...oldArray,
                  { title: <Link href={`/destination?province=${slug}`}>{`${lists?.destination.name}`}</Link> },
                  { title: <>{`${lists?.name}`}</> }
                ]
            );
            if (lists?.detail.highlight) {
              collapse.push({
                key: '1',
                label: <h3 className="text-[20px] font-[500]">Highlights</h3>,
                children: <DiscListContent content={lists?.detail.highlight} />,
              })
            }
            if (lists?.detail.description) {
              collapse.push({
                key: '2',
                label: <h3 className="text-[20px] font-[500]">Full description</h3>,
                children: <DescriptionContent content={lists?.detail.description} />,
              })
            }
            if (lists?.detail.eligibility.not_suitable.length != 0 || lists?.detail.eligibility.not_allow.length != 0) {
              collapse.push({
                key: '3',
                label: <h3 className="text-[20px] font-[500]">Eligibility</h3>,
                children: <div className='flex flex-col gap-8  mb-8'>
                  {lists?.detail.eligibility.not_suitable.length != 0 && <DiscListContent title='Not suitable for' content={lists?.detail.eligibility.not_suitable} />}
                  {lists?.detail.eligibility.not_allow.length != 0 && <DiscListContent title='Not Allow for' content={lists?.detail.eligibility.not_allow} />}
                </div>,
              })
            }
            if (lists?.detail.import.what_to_bring.length != 0 || lists?.detail.import.know_before.length != 0) {
              collapse.push({
                key: '4',
                label: <h3 className="text-[20px] font-[500]">Important information</h3>,
                children: <div className='flex flex-col gap-8 mb-8'>
                  {lists?.detail.import.what_to_bring.length != 0 && <DiscListContent title='What to bring' content={lists?.detail.import.what_to_bring} />}
                  {lists?.detail.import.know_before.length != 0 && <DescriptionContent title='Know before you go' content={lists?.detail.import.know_before} />}
                </div>,
              })
            }
          }
        })()
        //eslint-disable-next-line react-hooks/exhaustive-deps
      }, [lists])

      return true;
}

export default ProductDetailUseDefault