import { cn } from '@/helpers/clsx';
import { ServiceGhostCard } from '@/components/card';
import { IconUserTick, IconShieldTick, IconTimerTick, IconStarTick } from '@/components/icons';

interface ServiceSectionProps {
    className?:string;
}

const ServiceSection:React.FC<ServiceSectionProps> = ({className}) => {
  const lists = [
    {
      id: '1',
      icons: <IconUserTick/>,
      title: 'Certified Gold-Tier Full-Time Guides',
      description: "Premium quality guides to be of the highest standards and reliability.",
    },
    {
      id: '2',
      icons: <IconShieldTick/>,
      title: 'Ensure Services',
      description: "Services that guarantee the quality, safety, and reliability of services, providing confidence to customers",
    },
    {
      id: '3',
      icons: <IconTimerTick/>,
      title: 'Last-Minute Bookings',
      description: "Instant Confirmation & 24/7 customer support.",
    },
    {
      id: '4',
      icons: <IconStarTick/>,
      title: 'Review Rating 4.8+',
      description: "200,000+ verified customers with a 4.8+ satisfaction score..",
    },
  ];
  return (
    <section className={cn(`w-full`,className)}>
        <h1 className='text-[34px] font-[400] text-primary-900'>Why choose <span className="text-primary-500">Tour Master</span>?</h1>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 mt-[64px] mb-[40px]'>
          {lists.map((list, index) => (
            <div key={index}>
                <ServiceGhostCard list={list}/>
            </div>
            
          ))}
        </div>
    </section>
  )
}

export default ServiceSection;