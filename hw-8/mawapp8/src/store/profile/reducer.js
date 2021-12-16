import {TOGGLE_SHOW_NAME} from "./actions";

const initialState = {
    showName: false,
    name: 'Alex'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SHOW_NAME:
            return {
                ...state,
                showName: !state.showName
            }
        default:
            return state
    }
}

export default profileReducer