import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import group from './group'
import category from './category'

export default combineReducers({
  alert,
  auth,
  group,
  category
})