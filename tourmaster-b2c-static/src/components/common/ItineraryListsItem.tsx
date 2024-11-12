import React from 'react'
import { 
    IconDirectionWalk,
    IconLocationSolid
  } from '@/components/icons';
import { PackageItineraryProps } from '@/utils/types';

interface ItineraryListsItemDetailProps {
    icons: string;
    list: PackageItineraryProps;
}

const ItineraryListsItemDetail:React.FC<ItineraryListsItemDetailProps> = ({
    icons,
    list
}) => {
  return (
    <>
        {icons === 'yes'
        ?   (<>
                <div className="bg-success-50 p-2 h-10 rounded-full text-success-600">
                    <IconDirectionWalk/>
                </div>
                <div className="content ml-4">
                    <h3 className='font-[600] text-[16px]' >{list.time}</h3>
                    <p className="text-[14px] text-gray-600">{list.description}</p>
                </div>
            </>)
        :   (<>
                <div className="bg-primary-50 p-2 h-10 rounded-full text-primary-600">
                    <IconLocationSolid/>
                </div>
                <div className="content ml-4">
                    <h3 className='font-[600] text-[16px]'>{list.time}</h3>
                    <p className="text-[14px] text-gray-600">{list.description}</p>
                </div>
            </>)
        }
        
    </>
  )
}

export default ItineraryListsItemDetail;
