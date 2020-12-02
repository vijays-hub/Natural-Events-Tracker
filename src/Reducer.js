export const initialState = {
    eventsData: null
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_EVENTS_DATA':
            return {
                ...state,
                eventsData: action.events
            }

        default:
            return state
    }
}

export default reducer;