import React from "react";
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './redux/store';
import TopNavbar from "./Components/TopNavbar";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TopNavbar/>
        <Routes />
      </Provider>
    );
  }
}

export default App;
