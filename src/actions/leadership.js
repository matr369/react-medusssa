import {put, takeEvery, call} from 'redux-saga/effects';
import {LEADERSHIP_ACTIONS as ACTIONS} from '~actions/constants/leadership.js';
import {delay} from 'redux-saga';

const ACTIONS_CREATOR = {
    [ACTIONS.request]: () => {
        return { type: ACTIONS.request};
    },
    [ACTIONS.requestSucceeded]: (data) => {
        return {type: ACTIONS.requestSucceeded, leadership: data};
    },
    [ACTIONS.requestFailed]: () => {
        return { type: ACTIONS.requestFailed};
    }
};


export function* watchFetchLeadership() {
    yield takeEvery(ACTIONS.fetch, fetchLeadershipAsync);
}

function* fetchLeadershipAsync() {
    try {
        yield put(ACTIONS_CREATOR[ACTIONS.request]());
        yield delay(3000);
        const data = yield call(() => {
                return fetch('http://localhost:5000/leadership')
                    .then(res => res.json());
            }
        );
        yield put(ACTIONS_CREATOR[ACTIONS.requestSucceeded](data));
    } catch (error) {
        yield put(ACTIONS_CREATOR[ACTIONS.requestFailed]());
    }
}

export const fetchLeadership = () => {
    return { type: ACTIONS.fetch};
};