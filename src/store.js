import { createStore, applyMiddleware } from "redux";
import { initialState, SearchBoxComponent } from "./reducers";
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// TODO: make logger enabled development-only
export default createStore(SearchBoxComponent, initialState, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);
