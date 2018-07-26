import {put, takeEvery, call} from 'redux-saga/effects';
import {delay} from 'redux-saga';

export const requestComments = (id) => {
    return { type: 'REQUEST_COMMENTS', id: id};
};

export const requestCommentsSuccess = (id, comments) => {
    return { type: 'REQUEST_COMMENTS_SUCCEEDED', id:id, comments: comments};
};

export const requestCommentsError = () => {
    return { type: 'REQUEST_COMMENTS_FAILED'};
};

export const fetchComments = (id) => {
    return { type: 'FETCH_COMMENTS', id: id};
};


export function* watchFetchComments() {
    yield takeEvery('FETCH_COMMENTS', fetchCommentsAsync);
}

function* fetchCommentsAsync(args) {
    try {
        yield put(requestComments(args.id));
        yield delay(1000);
        const comments = yield call(() => {
                return fetch('http://localhost:5000/comments/' + args.id)
                    .then(res => res.json());
            }
        );
        yield put(requestCommentsSuccess(args.id, comments));
    } catch (error) {
        console.log(error);
        yield put(requestCommentsError());
    }
}
