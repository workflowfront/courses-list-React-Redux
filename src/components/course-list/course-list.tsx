import React, { Component, FC } from 'react';
import CourseListItem from '../course-list-item';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { withCoursestoreService } from '../hoc';
import { fetchCourses, courseAddedToCart } from '../../actions';
import CoursestoreService from '../../services/coursestore-service';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './course-list.css';
import { Course, RootState } from '../../types';

interface CourseListProps {
  courses: Course[];
  onAddedToCart: (id: number) => void;
}

const CourseList: FC<CourseListProps> = ({ courses, onAddedToCart }) => {
  return (
    <ul className="course-list">
      {courses.map((course) => (
        <li key={course.id}>
          <CourseListItem course={course} onAddedToCart={() => onAddedToCart(course.id)} />
        </li>
      ))}
    </ul>
  );
};

interface CourseListContainerProps {
  courses: Course[];
  loading: boolean;
  error: boolean;
  fetchCourses: () => void;
  onAddedToCart: (id: number) => void;
}

class CourseListContainer extends Component<CourseListContainerProps> {
  componentDidMount() {
    this.props.fetchCourses();
  }

  render() {
    const { courses, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <CourseList courses={courses} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = (state: RootState) => {
  const { courses, loading, error } = state.courseList;
  return { courses, loading, error };
};

const mapDispatchToProps = (
  dispatch: Dispatch,
  { coursestoreService }: { coursestoreService: CoursestoreService },
) => {
  return bindActionCreators(
    {
      fetchCourses: fetchCourses(coursestoreService),
      onAddedToCart: courseAddedToCart,
    },
    dispatch,
  );
};

const ConnectedCourseListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CourseListContainer);

export default withCoursestoreService()(ConnectedCourseListContainer);
