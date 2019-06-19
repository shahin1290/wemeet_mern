import axios from 'axios'
import { GET_GROUPS, GROUP_ERROR } from './types'

export const getGroups = (category_name) => async dispatch => {
  try {
    const res = await axios.get(`/api/groups/${category_name}`)
    dispatch({
      type: GET_GROUPS,
      payload: res.data
    })
  } catch (err) {
    dispatch({  
      type: GROUP_ERROR,
      payload: { msg: err.response, status: err.response }
    })
  }
}