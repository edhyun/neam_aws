import item from './item'
import containers from './containers'
import publish from './publish'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
  item,
  containers,
  publish
})

export default rootReducer