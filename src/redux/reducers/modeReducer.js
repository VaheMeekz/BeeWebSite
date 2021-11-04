import {CHANGE_MODE} from "../actions/modeAction";

const initialState = {
    mode:false
}

export const modeReducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_MODE:
            return {
                ...state,
                mode : [action.payload]
            }
        default:
            return state
    }
}