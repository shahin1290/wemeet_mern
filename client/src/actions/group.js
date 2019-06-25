import axios from 'axios'
import { ADD_GROUP, GET_GROUPS, ADD_MEMBER, GROUP_ERROR } from './types'
import { setAlert } from './alert'

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

// Add group
export const createGroup = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/groups', formData, config);

    dispatch({
      type: ADD_GROUP,
      payload: res.data
    });

    dispatch(setAlert('Group Created', 'success'));
  } catch (err) {
    dispatch({
      type: GROUP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add member
export const addMember= (group) => async dispatch => {
  try {
    const res = await axios.post(`api/members/${group}/members`, formData, config);

    dispatch({
      type: ADD_MEMBER,
      payload: res.data
    });

    dispatch(setAlert('Member Added', 'success'));
  } catch (err) {
    dispatch({
      type: GROUP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};