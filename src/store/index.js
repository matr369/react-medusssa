import { createStore, applyMiddleware, combineReducers }  from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerReducer } from 'react-router-redux';
import { LeadershipReducer, LeaderReducer, CommentsReducer } from '~reducers';
import {watchFetchLeadership, watchFetchLeader, watchAddComment, watchFetchComments} from '~actions';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();


const reducers = combineReducers({
    routing: routerReducer,
    leadershipPage: LeadershipReducer,
    leaderPage: combineReducers({
        leaders: LeaderReducer,
        comments: CommentsReducer
    })
});

const store = createStore(reducers, applyMiddleware(logger, sagaMiddleware));


sagaMiddleware.run(watchFetchLeadership);
sagaMiddleware.run(watchFetchLeader);
sagaMiddleware.run(watchAddComment);
sagaMiddleware.run(watchFetchComments);

export default store;