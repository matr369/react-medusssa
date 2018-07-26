export const PREFIX = 'COMMENTS_';
export const COMMENTS_ACTIONS = {
    request: Symbol(PREFIX + 'REQUEST'),
    requestSucceeded: Symbol(PREFIX + 'REQUEST_SUCCEEDED'),
    requestFailed: Symbol(PREFIX + 'REQUEST_FAILED'),
    fetch: Symbol(PREFIX + 'FETCH')
};