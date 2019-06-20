/**
* Api call related mutations.
*/
export function apiCalling (state) {
  state.apiCalling = true
}

export function apiCalled (state) {
  state.apiCalling = false
}

export function fetchEvents (state, payload) {
  state.events = payload.events
}

export function fetchError (state, payload) {
  state.fetchError = payload.error
}
