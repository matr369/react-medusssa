export const LeaderReducer = (state = {}, action) => {
    const leader = action.leader;
    switch (action.type) {
        case 'REQUEST_LEADER':
            return {
                ...state,
                [action.id] : {
                    isLoading: true
                }
            };
        case 'REQUEST_LEADER_SUCCEEDED':
            return {
                ...state,
                [action.leader.id] : {
                    ...leader,
                    isLoading: false
                }
            };
        case 'REQUEST_LEADER_FAILED':
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

