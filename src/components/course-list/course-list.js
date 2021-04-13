import React, { Component } from 'react';
import CourseListItem from '../course-list-item';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withCoursestoreService } from '../hoc';
import { fetchCourses, courseAddedToCart } from '../../actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './course-list.css';

const CourseList = ({ courses, onAddedToCart }) => {
  return (
    <ul className="course-list">
      {
        courses.map((course) => {
          return (
            <li key={course.id}>
              <CourseListItem
                course={course}
                onAddedToCart={() => onAddedToCart(course.id)}/>
            </li>
          );
        })
      }
    </ul>
  );
};

class CourseListContainer extends Component {

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

    return <CourseList courses={courses} onAddedToCart={onAddedToCart}/>;
  }
}

const mapStateToProps = ({ courseList: { courses, loading, error }}) => {
  return { courses, loading, error };
};

const mapDispatchToProps = (dispatch, { coursestoreService }) => {

  return bindActionCreators({
    fetchCourses: fetchCourses(coursestoreService),
    onAddedToCart: courseAddedToCart
  }, dispatch);
};

export default compose(
  withCoursestoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CourseListContainer);
