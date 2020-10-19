import React from "react";
import { Provider} from "react-redux";

import store from "./store";
import Category from "./components/Category";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Category/>
      </div>
    </Provider>
  )
}
export default App;