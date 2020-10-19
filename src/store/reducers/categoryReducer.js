import { SET, ADD, DELETE } from '../actions/types'

const initialState = {
  categories: []
}

const categoryReducer = (state = initialState, action) => {

  const { type, payload} = action;
  
  switch(type) {
    case SET:
      return {...state, categories: payload}
    case ADD:
      return {...state, categories: [...state.categories, payload]}
    case DELETE:
      return {...state, categories: state.categories.filter(todo => todo.id !== payload)}
    default:
      return {...state }
  }
}

export default categoryReducer