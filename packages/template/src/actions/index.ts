export interface AppAction {
  type: string
}

// placeholder
export function increment() {
  return { type: 'INCREMENT' }
}

// placeholder
export function decrement() {
  return { type: 'DECREMENT' }
}

export function toggleEditing() {
  return { type: 'TOGGLE_EDIT' }
}
