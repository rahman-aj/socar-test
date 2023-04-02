export const SET_CAR_LIST = 'SET_CAR_LIST'
export const SET_RESERVATION_LIST = 'SET_RESERVATION_LIST'

export const setCars = cars => dispatch => {
    dispatch({
        type: SET_CAR_LIST,
        payload: cars,
    })
}

export const setReservationList = reservations => dispatch => {
    dispatch({
        type: SET_RESERVATION_LIST,
        payload: reservations,
    })
}