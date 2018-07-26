import {put, takeEvery, call} from 'redux-saga/effects';
import {delay} from 'redux-saga';

export const addCommnetStart = (id, message) => {
    return { type: 'ADD_COMMENT_START', id: id, message: message};
};

export const addCommentSuccess = (data) => {
    return { type: 'ADD_COMMENT_SUCCEEDED', id: data.userId, comment: data};
};

export const addCommentError = () => {
    return { type: 'ADD_COMMENT_FAILED'};
};

export const addComment = (id, message) => {
    return { type: 'ADD_COMMENT', id: id, message: message};
};


export function* watchAddComment() {
    yield takeEvery('ADD_COMMENT', addCommentAsync);
}

function* addCommentAsync(args) {
    try {
        yield put(addCommnetStart(args.id, args.message));
        yield delay(1000);
        const data = yield call(() => {
                    return fetch('http://localhost:5000/comments/' + args.id, {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        method: "POST",
                        body: JSON.stringify({message: args.message})
                    })
                        .then(res => res.json());
                }
            );
        yield put(addCommentSuccess(data));
    } catch (error) {
        console.log(error);
        yield put(addCommentError());
    }
}
