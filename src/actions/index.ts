import { Course } from '../types';
import { Dispatch } from 'redux';

const coursesRequested = () => {
  return {
    type: 'FETCH_COURSES_REQUEST',
  };
};

const coursesLoaded = (newCourses: Course[]) => {
  return {
    type: 'FETCH_COURSES_SUCCESS',
    payload: newCourses,
  };
};

const coursesError = (error: Error) => {
  return {
    type: 'FETCH_COURSES_FAILURE',
    payload: error,
  };
};

export const courseAddedToCart = (courseId: number) => {
  return {
    type: 'COURSE_ADDED_TO_CART',
    payload: courseId,
  };
};

export const courseRemovedFromCart = (courseId: number) => {
  return {
    type: 'COURSE_REMOVED_FROM_CART',
    payload: courseId,
  };
};

export const allCoursesRemovedFromCart = (courseId: number) => {
  return {
    type: 'ALL_COURSES_REMOVED_FROM_CART',
    payload: courseId,
  };
};

const fetchCourses = (coursestoreService: any) => () => (dispatch: Dispatch) => {
  dispatch(coursesRequested());
  coursestoreService
    .getCourses()
    .then((data: Course[]) => dispatch(coursesLoaded(data)))
    .catch((err: Error) => dispatch(coursesError(err)));
};

export { fetchCourses };
