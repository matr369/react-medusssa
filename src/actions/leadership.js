import {put, takeEvery, call} from 'redux-saga/effects';
import {delay} from 'redux-saga';

export const requestLeadership = () => {
    return { type: 'REQUEST_LEADERSHIP'};
};

export const requestLeadershipSuccess = (data) => {
    return { type: 'REQUEST_LEADERSHIP_SUCCEEDED', leadership: data};
};

export const requestLeadershipError = () => {
    return { type: 'REQUEST_LEADERSHIP_FAILED'};
};

export const fetchLeadership = () => {
    return { type: 'FETCH_LEADERSHIP'};
};


export function* watchFetchLeadership() {
    yield takeEvery('FETCH_LEADERSHIP', fetchLeadershipAsync);
}

function* fetchLeadershipAsync() {
    try {
        yield put(requestLeadership());
        yield delay(3000);
        const data = yield call(() => {
                return fetch('http://localhost:5000/leadership')
                    .then(res => res.json());
            }
        );
        yield put(requestLeadershipSuccess(data));
    } catch (error) {
        yield put(requestLeadershipError());
    }
}
