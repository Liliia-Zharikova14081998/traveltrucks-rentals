"use client";

import { Card } from "@/types/card";
import css from "./ReviewsTab.module.css";

type Review = Card["reviews"][0];

interface ReviewsTabProps {
  reviews: Review[]; 
}

const ReviewsTab = ({ reviews }: ReviewsTabProps) => {
  if (reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <ul className={css.reviewsList}>
      {reviews.map((rev, idx) => (
        <li key={idx} className={css.reviewItem}>
          <div className={css.reviewHeader}>
            <div className={css.avatar}>
              {rev.reviewer_name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className={css.reviewerName}>{rev.reviewer_name}</p>
              <div className={css.starRating}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" 
                       className={i < rev.reviewer_rating ? css.starGold : css.starGray}>
                    <use href="/symbol-defs.svg#icon-star" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className={css.reviewText}>{rev.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsTab;