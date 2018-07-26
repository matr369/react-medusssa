import {LEADER_ACTIONS as ACTIONS} from '~actions/constants/leader.js';

export const LeaderReducer = (state = {}, action) => {
    const leader = action.leader;
    switch (action.type) {
        case ACTIONS.request:
            return {
                ...state,
                [action.id] : {
                    isLoading: true
                }
            };
        case ACTIONS.requestSucceeded:
            return {
                ...state,
                [action.leader.id] : {
                    ...leader,
                    isLoading: false
                }
            };
        case ACTIONS.requestFailed:
            return {
                ...state,
                [action.leader.id] : {
                    isLoading: false
                }
            };

        default:
            return state;
    }
};

