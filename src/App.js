import React from "react";
import { Provider} from "react-redux";

import store from "./store";
import TodoApp from './components/TodoApp'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TodoApp/>
      </div>
    </Provider>
  )
}
export default App;