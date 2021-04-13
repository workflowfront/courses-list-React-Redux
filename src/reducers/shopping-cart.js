const updateCartItems = (cartItems, item, idx) => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};

const updateCartItem = (course, item = {}, quantity) => {

  const {
    id = course.id,
    count = 0,
    title = course.title,
    total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity*course.price
  };
};

const updateOrder = (state, courseId, quantity) => {
  const { courseList: { courses }, shoppingCart: { cartItems }} = state;

  const course = courses.find(({id}) => id === courseId);
  const itemIndex = cartItems.findIndex(({id}) => id === courseId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(course, item, quantity);
  return {
    orderTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  };
};

const updateShoppingCart = (state, action) => {

  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    }
  }

  switch(action.type) {
    case 'COURSE_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);

    case 'COURSE_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);

    case 'ALL_COURSES_REMOVED_FROM_CART':
      const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
