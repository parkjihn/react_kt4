import React from 'react';

function StarRating({ rating }) {
  const roundedRating = Math.round(rating);
  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index}>{index < roundedRating ? '★' : '☆'}</span>
      ))}
    </div>
  );
}

export default StarRating;
