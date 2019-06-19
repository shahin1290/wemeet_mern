import axios from 'axios'
import { GET_CATEGORIES, CATEGORY_ERROR } from './types'

export const getCategories = () => async dispatch => {
  try {
    const res = await axios.get('/api/categories')
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data
    })
  } catch (err) {
    dispatch({  
      type: CATEGORY_ERROR,
      payload: { msg: err.response, status: err.response }
    })
  }
}