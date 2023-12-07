const reducer = (state, action) => {
    if (!action || typeof action !== 'object' || !action.type) {
        // Handle undefined or malformed action
        console.error("Invalid action provided to reducer.");
        return state;
    }

    switch (action.type) {
        case 'GET_ALL_COMMENTS':
            // Validate that payload is an array
            if (!Array.isArray(action.payload)) {
                console.error("Invalid payload for GET_ALL_COMMENTS. Expected an array.");
                return state;
            }
            return [...action.payload];

        case 'ADD_COMMENT':
            // Validate the structure of the new comment
            if (!action.payload || typeof action.payload !== 'object') {
                console.error("Invalid payload for ADD_COMMENT. Expected an object.");
                return state;
            }
            return [...state, action.payload];

        default:
            // Handle unknown action types
            console.error(`Unknown action type: ${action.type}`);
            return state;
    }
};

export default reducer;
