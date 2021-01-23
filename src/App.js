import React from "react";
import DrawerComponent from "./components/Drawer/DrawerComponent";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <DrawerComponent />
    </Provider>
  );
}

export default App;
