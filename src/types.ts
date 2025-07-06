export interface Course {
  id: number;
  title: string;
  author: string;
  price: number;
  coverImage?: string;
}

export interface CartItem {
  id: number;
  title: string;
  count: number;
  total: number;
}

export interface CourseListState {
  courses: Course[];
  loading: boolean;
  error: boolean;
}

export interface ShoppingCartState {
  cartItems: CartItem[];
  orderTotal: number;
}

export interface RootState {
  courseList: CourseListState;
  shoppingCart: ShoppingCartState;
  // Добавьте другие редьюсеры, если есть
}
