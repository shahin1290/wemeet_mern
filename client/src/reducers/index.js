import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import group from './group'
import category from './category'
import { reducer as form } from 'redux-form'

export default combineReducers({
  alert,
  auth,
  group,
  category,
  form
})