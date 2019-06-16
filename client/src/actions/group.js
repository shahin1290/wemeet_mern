import axios from 'axios'
import { setAlert } from './alert'
import { GET_GROUPS, GROUP_ERROR } from './types'

export const getGroups = () => async dispatch => {
  try {
    const res = await axios.get('/api/groups/new')
    console.log(res)
    dispatch({
      type: GET_GROUPS,
      payload: res.data
    })
  } catch (err) {
    dispatch({  
      type: GROUP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}