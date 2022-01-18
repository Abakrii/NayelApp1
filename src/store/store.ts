import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
// import { logger } from 'redux-logger'
/* Hot Module Reload */

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* Hot Module Reload Ends */

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  reduxDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

/* Hot Module Reload */

/* Hot Module Reload Ends */
export default store;
