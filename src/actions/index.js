
const coursesRequested = () => {
  return {
    type: 'FETCH_COURSES_REQUEST'
  };
};

const coursesLoaded = (newCourses) => {
  return {
    type: 'FETCH_COURSES_SUCCESS',
    payload: newCourses
  };
};

const coursesError = (error) => {
  return {
    type: 'FETCH_COURSES_FAILURE',
    payload: error
  };
};

export const courseAddedToCart = (courseId) => {
  return {
    type: 'COURSE_ADDED_TO_CART',
    payload: courseId
  };
};

export const courseRemovedFromCart = (courseId) => {
  return {
    type: 'COURSE_REMOVED_FROM_CART',
    payload: courseId
  };
};

export const allCoursesRemovedFromCart = (courseId) => {
  return {
    type: 'ALL_COURSES_REMOVED_FROM_CART',
    payload: courseId
  };
};

const fetchCoursesOld = (coursestoreService, dispatch) => () => {
  dispatch(coursesRequested());
  coursestoreService.getCourses()
    .then((data) => dispatch(coursesLoaded(data)))
    .catch((err) => dispatch(coursesError(err)));
};

const fetchCourses = (coursestoreService) => () => (dispatch) => {
  dispatch(coursesRequested());
  coursestoreService.getCourses()
    .then((data) => dispatch(coursesLoaded(data)))
    .catch((err) => dispatch(coursesError(err)));
};

export {
  fetchCourses
};
