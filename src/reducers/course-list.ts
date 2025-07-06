import { CourseListState } from '../types';

const updateCourseList = (
  state: CourseListState | undefined,
  action: { type: string; payload?: unknown },
): CourseListState => {
  if (state === undefined) {
    return {
      courses: [],
      loading: true,
      error: false,
    };
  }

  switch (action.type) {
    case 'FETCH_COURSES_REQUEST':
      return {
        courses: [],
        loading: true,
        error: false,
      };

    case 'FETCH_COURSES_SUCCESS':
      return {
        courses: action.payload as any[],
        loading: false,
        error: false,
      };

    case 'FETCH_COURSES_FAILURE':
      return {
        courses: [],
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default updateCourseList;
