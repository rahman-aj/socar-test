import { SET_CAR_LIST } from "./actions";

const initialState = {
    cars: []
}

function carsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CAR_LIST:
            return { ...state, cars: action.payload }
        default:
            return state
    }
}

export default carsReducer