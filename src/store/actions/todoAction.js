import axios from "axios"
import { SET_TODO, ADD_TODO, DELETE_TODO } from './types'

export const addTodo = data => {
    return ({
        type: ADD_TODO,
        payload: data
    })
}

export const delTodo = data => {
    return ({
        type: DELETE_TODO,
        payload: data
    })
}

export const setTodo = () => async dispatch => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/`)
        console.log(res.data)
        dispatch({
            type: SET_TODO,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}