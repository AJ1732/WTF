import React from 'react'
import { createContext, useContext, useState } from 'react';
import data from "../data/reviewData"
import { v4 as uuid } from 'uuid'; 



export const ReviewContext = createContext(null);

export const ReviewContextProvider = ({ children }) => {
  const [reviews, setReviews] = useState(data)

  const AddReview = newReview => {
    newReview.id = uuid();
    setReviews([newReview, ...reviews]);
  };

  const deleteReview = id => {
    if (window.confirm('Are you sure, you want to delete this review?')) {
      setReviews(reviews.filter(item => item.id !== id));
    }
  };

  return (
    <ReviewContext.Provider value={{ reviews, setReviews, AddReview, deleteReview }}>
      {children}
    </ReviewContext.Provider>
  )
}

export const useReviewContext = () => useContext(ReviewContext);
