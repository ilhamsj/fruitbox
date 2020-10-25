import categoryService from "../../Service/CategoryService"
import { SET, ADD, DELETE } from './types'

export const addCategory = data => {
    return ({
        type: ADD,
        payload: data
    })
}

export const deleteCategory = data => async dispatch => {
    try {
        const res = await categoryService.deleteData(data);
        console.log(res)
        dispatch({
            type: DELETE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const setCategory = () => async dispatch => {
    try {
        const res = await categoryService.getAll()
        dispatch({
            type: SET,
            payload: res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}