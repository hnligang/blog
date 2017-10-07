import { combineReducers } from 'redux'
import { enableBatching } from 'redux-batched-actions'
import locationReducer from './location'

export const makeRootReducer = (asyncReducers) => {
  return enableBatching(combineReducers({
    location: locationReducer,
    ...asyncReducers
  }))
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
