import React from 'react';
import { CoursestoreServiceConsumer } from '../coursestore-service-context';

const withCoursestoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <CoursestoreServiceConsumer>
        {
          (coursestoreService) => {
            return (<Wrapped {...props}
                     coursestoreService={coursestoreService}/>);
          }
        }
      </CoursestoreServiceConsumer>
    );
  }
};

export default withCoursestoreService;
