import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import App from './components/app';
import store from './store';
import ErrorBoundry from './components/error-boundry';
import CoursestoreService from './services/coursestore-service';
import { CoursestoreServiceProvider } from './components/coursestore-service-context';

const coursestoreService = new CoursestoreService();

export const AppInit = () => (
  <Provider store={store}>
    <ErrorBoundry>
      <CoursestoreServiceProvider value={coursestoreService}>
        <Router>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#1677ff',
                colorSuccess: '#52c41a',
                colorWarning: '#faad14',
                colorError: '#ff4d4f',
                fontFamily: 'Roboto, "Helvetica Neue", Arial, "sans-serif"',
              },
            }}
          >
            <App />
          </ConfigProvider>
        </Router>
      </CoursestoreServiceProvider>
    </ErrorBoundry>
  </Provider>
);

export default AppInit;
