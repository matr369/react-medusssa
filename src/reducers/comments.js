
export const CommentsReducer = (state = {}, action) => {
    const id = action.id;
    const comments = action.comments;
    const currentComments = state[id];
    const comment = action.comment;
    switch (action.type) {
        case 'REQUEST_COMMENTS':
            return {
                ...state,
                [id] : []
            };
        case 'REQUEST_COMMENTS_SUCCEEDED':
            return {
                ...state,
                [id] : [
                    ...comments
                ]
            };
        case 'REQUEST_COMMENTS_FAILED':
            return {
                ...state,
                [id] : []
            };

        case 'ADD_COMMENT_START':
            return {
                ...state
            };
        case 'ADD_COMMENT_SUCCEEDED':
            return {
                ...state,
                [id] : [
                    comment,
                    ...currentComments
                ]
            };
        case 'ADD_COMMENT_FAILED':
            return {
                ...state
            };

        default:
            return state;
    }
};

