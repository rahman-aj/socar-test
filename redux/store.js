import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { carsReducer, reservationsReducer } from './reducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ carsReducer, reservationsReducer })

export const Store = createStore(rootReducer, applyMiddleware(thunk))