import { createStore, applyMiddleware, Middleware, Dispatch } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

const logMiddleware: Middleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    console.log(action.type, getState());
    return next(action);
  };

const stringMiddleware: Middleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action,
    });
  }
  return next(action);
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware),
);

const delayedActionCreator = (timeout: number) => (dispatch: Dispatch) => {
  setTimeout(
    () =>
      dispatch({
        type: 'DELAYED_ACTION',
      }),
    timeout,
  );
};

store.dispatch<any>(delayedActionCreator(3000));

export default store;
