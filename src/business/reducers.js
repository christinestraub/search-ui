import { combineReducers } from 'redux'
import { search } from './search/reducers'
import { ui } from './ui/reducers'

export default combineReducers({
  search,
  ui
})
