import React from 'react';
import CourseList from '../course-list';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';

const HomePage = () => {
  return (
    <div>
      <CourseList />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
