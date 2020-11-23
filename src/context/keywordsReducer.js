export const keywordsReducer = (state = {}, action) => {
    switch (action.type) {
        case "update":
            return action.payload;

        default:
            return state;
    }
}
