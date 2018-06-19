import {put, takeEvery, call} from 'redux-saga/effects';
import {delay} from 'redux-saga';

export const requestLeader = (id) => {
    return { type: 'REQUEST_LEADER', id: id};
};

export const requestLeaderSuccess = (data) => {
    return { type: 'REQUEST_LEADER_SUCCEEDED', leader: data};
};

export const requestLeaderError = () => {
    return { type: 'REQUEST_LEADER_FAILED'};
};

export const fetchLeader = (id) => {
    return { type: 'FETCH_LEADER', id: id};
};


export function* watchFetchLeader() {
    yield takeEvery('FETCH_LEADER', fetchLeaderAsync);
}

function* fetchLeaderAsync(args) {
    try {
        yield put(requestLeader(args.id));
        yield delay(1000);
        const data = yield call(() => {
                return fetch('http://localhost:5000/leader/' + args.id)
                    .then(res => res.json());
            }
        );
        yield put(requestLeaderSuccess(data));
    } catch (error) {
        console.log(error);
        yield put(requestLeaderError());
    }
}
