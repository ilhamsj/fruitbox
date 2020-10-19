import axios from "axios"
import { SET, ADD, DELETE } from './types'

export const addCategory = data => {
    return ({
        type: ADD,
        payload: data
    })
}

export const deleteCategory = data => {
    return ({
        type: DELETE,
        payload: data
    })
}

export const setCategory = () => async dispatch => {
    try {
        const res = await axios.get(`https://foodfood.herokuapp.com/api/v1/categories`)
        dispatch({
            type: SET,
            payload: res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}