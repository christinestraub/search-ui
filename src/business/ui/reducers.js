import {
  UI_TOGGLE_SEARCH_BAR
} from './actions'

const initialState = {
  searchBarMinimized: false
}

export function ui (state = initialState, action) {
  switch (action.type) {
    case UI_TOGGLE_SEARCH_BAR:
      return {
        ...state,
        searchBarMinimized: !state.searchBarMinimized
      }

      default:
      return state
  }
}