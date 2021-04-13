import updateCourseList from './course-list';
import updateShoppingCart from './shopping-cart';

const reducer = (state, action) => {
  return {
    courseList: updateCourseList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;
