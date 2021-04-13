import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import CoursestoreService from './services/coursestore-service';
import { CoursestoreServiceProvider } from './components/coursestore-service-context';

import store from './store';

const coursestoreService = new CoursestoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <CoursestoreServiceProvider value={coursestoreService}>
        <Router>
          <App />
        </Router>
      </CoursestoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);