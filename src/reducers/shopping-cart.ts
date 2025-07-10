import { RootState, CartItem, ShoppingCartState, Course } from '../types';

const updateCartItems = (cartItems: CartItem[], item: CartItem, idx: number): CartItem[] => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (
  course: Course,
  item: Partial<CartItem> = {},
  quantity: number,
): CartItem => {
  const { id = course.id, count = 0, title = course.title, total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * course.price,
  };
};

const updateOrder = (state: RootState, courseId: number, quantity: number): ShoppingCartState => {
  const {
    courseList: { courses },
    shoppingCart: { cartItems },
  } = state;

  const course = courses.find(({ id }) => id === courseId) as Course;
  const itemIndex = cartItems.findIndex(({ id }) => id === courseId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(course, item, quantity);

  const cartItemsHelper = updateCartItems(cartItems, newItem, itemIndex);

  const orderTotalHelper = cartItemsHelper.reduce((sum, item) => sum + item.total, 0);

  return {
    orderTotal: orderTotalHelper,
    cartItems: cartItemsHelper,
  };
};

const updateShoppingCart = (
  state: RootState | undefined,
  action: { type: string; payload: number },
): ShoppingCartState => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }

  switch (action.type) {
    case 'COURSE_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);

    case 'COURSE_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);

    case 'ALL_COURSES_REMOVED_FROM_CART': {
      const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);
      if (item) {
        return updateOrder(state, action.payload, -item.count);
      }
      return state.shoppingCart;
    }

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
