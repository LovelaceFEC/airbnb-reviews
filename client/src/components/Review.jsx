import React from 'react';

const Review = ({review}) => {
  let {reviewer_name, date, reviewer_picture, comments} = review;
  return (
    <div>
      <div>{reviewer_picture}</div>
      <div>{date}</div>
      <div>{comments}</div>
    </div>
  );
};

export default Review;