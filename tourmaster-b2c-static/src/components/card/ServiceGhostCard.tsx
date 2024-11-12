import { ServiceGhostCardProps } from '@/utils/types';

interface ServiceCardProps {
    list: ServiceGhostCardProps;
}
const ServiceGhostCard:React.FC<ServiceCardProps> = ({list}) => {
  const icon = list.icons;
  return (
    <article className='group mb-[40px]'>
        <div className="inline-block p-[12px] bg-primary-50 rounded-full">
          <div className="p-[8px] flex justify-center items-center bg-primary-100 rounded-full">
            {icon}
          </div>
        </div>
        <h3 className="text-primary-600 text-[20px] leading-normal font-[500] mt-[12px]">{list.title}</h3>
        <p className="text-gray-500 text-[16px] font-normal mt-[8px]">{list.description}</p>
    </article>
  )
}

export default ServiceGhostCard;