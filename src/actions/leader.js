import {put, takeEvery, call} from 'redux-saga/effects';
import {LEADER_ACTIONS as ACTIONS} from '~actions/constants/leader.js';
import {delay} from 'redux-saga';

const ACTIONS_CREATOR = {
    [ACTIONS.request]: (id) => {
        return { type: ACTIONS.request, id: id};
    },
    [ACTIONS.requestSucceeded]: (leader) => {
        return {type: ACTIONS.requestSucceeded, leader: leader};
    },
    [ACTIONS.requestFailed]: () => {
        return { type: ACTIONS.requestFailed};
    }
};

function* fetchLeaderAsync(args) {
    try {
        yield put(ACTIONS_CREATOR[ACTIONS.request](args.id));
        yield delay(1000);
        const leader = yield call(() => {
                return fetch('http://localhost:5000/leader/' + args.id)
                    .then(res => res.json());
            }
        );
        yield put(ACTIONS_CREATOR[ACTIONS.requestSucceeded](leader));
    } catch (error) {
        console.log(error);
        yield put(ACTIONS_CREATOR[ACTIONS.requestFailed]());
    }
}

export function* watchFetchLeader() {
    yield takeEvery(ACTIONS.fetch, fetchLeaderAsync);
}

export const fetchLeader = (id) => {
    return { type: ACTIONS.fetch, id: id};
};