import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import data from "../../data/reviewData"
import ReviewForm from "../ReviewForm";
import { FaHouseDamage } from "react-icons/fa";
import Button from "../layout/Button";


function Review() {
  const [review, setReview] = useState(data);
  const navigate = useNavigate()

  return (
    <>
      <ReviewForm />
      <div className="container">
        <Button type='button' variant='secondary' onClick={() => navigate("/allreviews")}>
            See All Reviews
        </Button>
      </div>
      <div className="about-link">
          <Link to="/">
              <FaHouseDamage size={40} /> 
          </Link>
      </div>
    </>
  )
}

export default Review
