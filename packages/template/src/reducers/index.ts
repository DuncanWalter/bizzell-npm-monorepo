import { AppAction } from '../actions'
import { AppState } from '../store'

export function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    // placeholder
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    // placeholder
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'TOGGLE_EDIT':
      return {
        ...state,
        isEditing: !state.isEditing,
      }
    default:
      return state
  }
}
