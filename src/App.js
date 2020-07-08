import React from "react";
import "./App.css";
import AddressbookContainer from "./components/AddressbookContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddressbookContainer />
      </div>
    </Provider>
  );
}

export default App;
