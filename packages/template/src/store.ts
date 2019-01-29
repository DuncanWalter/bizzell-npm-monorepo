/** basic counter as a placeholder */

import { createStore } from 'redux'
import { reducer } from './reducers'

export interface AppState {
  count: number
}

const initialState: AppState = {
  count: 0,
}

export const store = createStore(reducer, initialState)
