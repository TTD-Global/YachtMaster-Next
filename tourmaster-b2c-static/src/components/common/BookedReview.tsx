interface BookedReviewProps {
    booked:string;
}
const BookedReview:React.FC<BookedReviewProps> = ({booked}) => {

  return (
    <div className="w-ful h-full flex items-center overflow-hidden"><span className="pt-1">{`${booked} booked`}</span></div>
  )
}

export default BookedReview;