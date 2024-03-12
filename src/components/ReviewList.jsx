import ReviewItem from "./ReviewItem"
import { useReviewContext } from "../Context/ReviewContext"

function ReviewList() {
  const { reviews } = useReviewContext();

  if(!reviews || reviews.length === 0){
      return <p>No review yet!</p>
    }
        
  return (
    <>
      <div className="reviewList-layout">
        {reviews.map((item) => (
            <div key={item.id}>
              <ReviewItem review={item} />
            </div>
        ))}
      </div>
    </>
  )
}

export default ReviewList
