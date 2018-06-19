export const LeadershipReducer = (state = {}, action) => {
    const leadership = action.leadership;
    switch (action.type) {
        case 'REQUEST_LEADERSHIP':
            return {
                ...state,
                isLoading: true
            };
        case 'REQUEST_LEADERSHIP_SUCCEEDED':
            return {
                ...state,
                ...leadership,
                isLoading: false
            };
        case 'REQUEST_LEADERSHIP_FAILED':
            return {
                ...state,
                isLoading: false,
                error: true
            };

        default:
            return state;
    }
};

