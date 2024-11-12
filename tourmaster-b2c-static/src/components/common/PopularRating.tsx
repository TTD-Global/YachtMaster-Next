import { IconStar } from '@/components/icons';

interface PopularRatingProps {
  rating: number;
  count: string;
}
const PopularRating:React.FC<PopularRatingProps> = ({rating, count}) => {
  return (
    <div className='flex flex-row gap-1 items-center'>
        <IconStar className='text-warning-400'/>
        <span className="bg-warning-400 px-3 py-[2px] rounded-[4px] text-[14px] text-white">{String(rating).substring(0, 16)}</span>
        <h3 className='text-muted-foreground mt-1'>{`( ${count} )`}</h3>
    </div>
  )
}

export default PopularRating;