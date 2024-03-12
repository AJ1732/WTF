import { FaTimes } from "react-icons/fa"
import { useReviewContext } from "../Context/ReviewContext"

function ReviewItem({ review }) {
  const { deleteReview } = useReviewContext();

  return (
    <>
      <div className="card review-card">
        <div className="num-display">{review.rating}</div>
        <div>{review.text}</div>
        <button className="close" onClick={()=>deleteReview(review.id)}>
          <FaTimes />
        </button>
      </div>
    </>
  )
}

export default ReviewItem
