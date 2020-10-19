import { SET_TODO, ADD_TODO, DELETE_TODO } from '../actions/types'

const initialState = {
  todos: []
}

const todoReducer = (state = initialState, action) => {

  const { type, payload} = action;
  
  switch(type) {
    case SET_TODO:
      return {...state, todos: payload}
    case ADD_TODO:
      return {...state, todos: [...state.todos, payload]}
    case DELETE_TODO:
      return {...state, todos: state.todos.filter(todo => todo.id !== payload)}
    default:
      return {...state }
  }
}

export default todoReducer