interface PriceProps {
    price: string;
    discount:string;
}
const Price:React.FC<PriceProps> = ({price, discount}) => {
  return (
    <p className='mt-1'>
    <span className='text-sm font-semibold'>From {price}</span>
    <span className='text-gray-400 text-sm line-through ml-2'>{discount}</span>
</p>

  )
}

export default Price;