import updateCourseList from './course-list';
import updateShoppingCart from './shopping-cart';
import { RootState } from '../types';

const reducer = (
  state: RootState | undefined,
  action: { type: string; payload?: unknown },
): RootState => {
  return {
    courseList: updateCourseList(state ? state.courseList : undefined, action),
    shoppingCart: updateShoppingCart(state, action as { type: string; payload: number }),
  };
};

export default reducer;
