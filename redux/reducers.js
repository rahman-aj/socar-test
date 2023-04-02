import { SET_CAR_LIST } from "./actions";
import { SET_RESERVATION_LIST } from "./actions";

const initialState = {
    cars: [],
    reservations: []
}

export function carsReducer(state = initialState.cars, action) {
    switch (action.type) {
        case SET_CAR_LIST:
            return { ...state, cars: action.payload }
        default:
            return state
    }
}

export function reservationsReducer(state = initialState.reservations, action) {
    switch (action.type) {
        case SET_RESERVATION_LIST:
            return { ...state, reservations: action.payload }
        default:
            return state
    }
}