import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import carsReducer from './reducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ carsReducer })

export const Store = createStore(rootReducer, applyMiddleware(thunk))