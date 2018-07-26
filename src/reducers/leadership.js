import {LEADERSHIP_ACTIONS as ACTIONS} from '~actions/constants/leadership.js';

export const LeadershipReducer = (state = {}, action) => {
    const leadership = action.leadership;
    switch (action.type) {
        case ACTIONS.request:
            return {
                ...state,
                isLoading: true
            };
        case ACTIONS.requestSucceeded:
            return {
                ...state,
                ...leadership,
                isLoading: false
            };
        case ACTIONS.requestFailed:
            return {
                ...state,
                isLoading: false,
                error: true
            };

        default:
            return state;
    }
};

