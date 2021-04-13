const updateCourseList = (state, action) => {

  if (state === undefined) {
    return {
      courses: [],
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_COURSES_REQUEST':
      return {
        courses: [],
        loading: true,
        error: null
      };

    case 'FETCH_COURSES_SUCCESS':
      return {
        courses: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_COURSES_FAILURE':
      return {
        courses: [],
        loading: false,
        error: action.payload
      };

    default:
      return state.courseList;
  }
};

export default updateCourseList;
