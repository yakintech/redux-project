const INITIAL_STATE = {
    countries : []
}

export const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case  'GET_COUNTRIES_SUCCESS': return {...state, countries:action.payload}
        default:
            return state;
    }

    return state;
}