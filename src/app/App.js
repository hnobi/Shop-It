import React from "react";
import Routes from './Routes';
import { BrowserRouter } from "react-router-dom";
import TopNavbar from "./Components/TopNavbar";
import { connect } from "react-redux";

class App extends React.Component {

  state = {
   isLoggedIn : localStorage.getItem('isLoggedIn') || false
  }
 
  render() {
        const {customer} = this.props;

    return (
      <BrowserRouter>
        <TopNavbar {...this.state} isAuthenticated={customer.isAuthenticated} />
        <Routes />
      </BrowserRouter>
    );
  }
}


const mapStateToProps = (state) => ({
  customer: state.customer,
});

export default connect(mapStateToProps)(App);

