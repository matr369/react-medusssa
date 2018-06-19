import { createStore, applyMiddleware, combineReducers }  from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerReducer } from 'react-router-redux';
import { LeadershipReducer, LeaderReducer } from '~reducers';
import {watchFetchLeadership, watchFetchLeader} from '~actions';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();


const reducers = combineReducers({
    routing: routerReducer,
    leadership: LeadershipReducer,
    leaders: LeaderReducer
});

const store = createStore(reducers, applyMiddleware(logger, sagaMiddleware));


sagaMiddleware.run(watchFetchLeadership);
sagaMiddleware.run(watchFetchLeader);

export default store;