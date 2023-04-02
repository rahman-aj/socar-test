export const SET_CAR_LIST = 'SET_CAR_LIST'

export const setCars = cars => dispatch => {
    dispatch({
        type: SET_CAR_LIST,
        payload: cars,
    })
}