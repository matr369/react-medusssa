export const PREFIX = 'LEADER_';
export const LEADER_ACTIONS = {
    request: Symbol(PREFIX + 'REQUEST'),
    requestSucceeded: Symbol(PREFIX + 'REQUEST_SUCCEEDED'),
    requestFailed: Symbol(PREFIX + 'REQUEST_FAILED'),
    fetch: Symbol(PREFIX + 'FETCH')
};