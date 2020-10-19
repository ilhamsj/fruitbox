import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { addTodo, delTodo, setTodo } from "../store/actions/todoAction";

const TodoApp= () => {
  const todos = useSelector(state => state.todoReducer.todos);
  const dispatch = useDispatch();
  
  const addNewTodo = () => {
    const data = {
      id: 1,
      completed: false,
      title: "delectus aut autem",
      userId: 1
    }
    dispatch(addTodo(data))
  }

  useEffect(() => {
    dispatch(setTodo())
  }, [dispatch])
  
  return(
    <div>
      <h1>Todo app</h1>
      <button onClick={addNewTodo}>Add</button>
      <ul>
        {
            todos.map((todo, k) =>
                <li key={k}>
                <p>{todo.title}</p>
                <button onClick={() => dispatch(delTodo(todo.id))}>
                    delete
                </button>
                </li>
            )
        }
      </ul>
    </div>
  )
}
export default TodoApp;