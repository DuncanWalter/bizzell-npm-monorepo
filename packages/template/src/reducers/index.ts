import { AppAction } from '../actions'
import { AppState } from '../store'

export function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        count: state.count - 1,
      }
    default:
      return state
  }
}
