import React, { ComponentType } from 'react';
import { CoursestoreServiceConsumer } from '../coursestore-service-context/coursestore-service-context';
import CoursestoreService from '../../services/coursestore-service';

const withCoursestoreService =
  <P extends object>() =>
  (Wrapped: ComponentType<P & { coursestoreService: CoursestoreService }>) => {
    const WithCoursestoreService = (props: P) => (
      <CoursestoreServiceConsumer>
        {(coursestoreService) => <Wrapped {...props} coursestoreService={coursestoreService} />}
      </CoursestoreServiceConsumer>
    );
    WithCoursestoreService.displayName = `WithCoursestoreService(${Wrapped.displayName || Wrapped.name || 'Component'})`;
    return WithCoursestoreService;
  };

export default withCoursestoreService;
