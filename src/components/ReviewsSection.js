// src/components/ReviewsSection.js
import React from 'react';
import { useMyI18n } from '../context/MyI18nContext';

function ReviewsSection() {
  const { t } = useMyI18n();
  const reviews = t('reviews.cards');

  return (
    <section id="reviews" className="reviews-section scroll-margin">
      <h2>{t('reviews.title')}</h2>
      <div className="review-cards">
        {Array.isArray(reviews) &&
          reviews.map((review, idx) => (
            <div className="review-card" key={idx}>
              <p>{review}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default ReviewsSection;