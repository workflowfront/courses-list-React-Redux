import React from 'react';
import CoursestoreService from '../../services/coursestore-service';

const defaultService = new CoursestoreService();
const { Provider: CoursestoreServiceProvider, Consumer: CoursestoreServiceConsumer } =
  React.createContext<CoursestoreService>(defaultService);

export { CoursestoreServiceProvider, CoursestoreServiceConsumer };
