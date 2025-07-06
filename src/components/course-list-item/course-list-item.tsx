import React, { FC } from 'react';
import { Button } from 'antd';
import './course-list-item.css';
import { Course } from '../../types';

interface CourseListItemProps {
  course: Course;
  onAddedToCart: () => void;
}

const CourseListItem: FC<CourseListItemProps> = ({ course, onAddedToCart }) => {
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
        <Button onClick={onAddedToCart} type="primary" className="add-to-cart" size="small">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default CourseListItem;
