const initialState = {};

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH':
            console.log("fetch");
            return state;
        default:
            return state;
    }
};