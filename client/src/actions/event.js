import axios from 'axios'
import { ADD_EVENT, EVENT_ERROR } from './types'
import { setAlert } from './alert'

// export const getGroups = (category_name) => async dispatch => {
//   try {
//     const res = await axios.get(`/api/groups/${category_name}`)
//     dispatch({
//       type: GET_GROUPS,
//       payload: res.data
//     })
//   } catch (err) {
//     dispatch({  
//       type: GROUP_ERROR,
//       payload: { msg: err.response, status: err.response }
//     })
//   }
// }

// Add event
export const createEvent = (formData, name) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(`/api/groups/${name}/event`, formData, config);

    dispatch({
      type: ADD_EVENT,
      payload: res.data
    });

    dispatch(setAlert('Event Created', 'success'));
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};