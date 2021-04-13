import React from 'react';
import './course-list-item.css';

const CourseListItem = ({ course, onAddedToCart }) => {
  const { title, author, price, coverImage } = course;
  return (
    <div className="course-list-item">
      <div className="course-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="course-details">
        <span className="course-title">{title}</span>
        <div className="course-author">{author}</div>
        <div className="course-price">${price}</div>
        <button
          onClick={onAddedToCart}
          className="btn btn-info add-to-cart">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CourseListItem;
