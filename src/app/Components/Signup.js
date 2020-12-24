import React, { Component } from "react";
import { connect } from "react-redux";
import { signupApi } from "./../redux/actions/customer";

export class Signup extends Component {

  state = {
    email: "",
    password: "",
    name: ""
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUpUser(this.state);

    this.setState({
      email: "",
      password: "",
      name: ""
    });
  };

  
  render() {
    const { email, password, name } = this.state;
   const { customer } = this.props;

  if (customer.isAuthenticated) {
     this.props.removeModal();
  //  return (<Redirect  to='/'/>)
  }

    return (
      <form className="registration-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          name="name"
          onChange={this.onInputChange}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          name="email"
          onChange={this.onInputChange}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          name="password"
          onChange={this.onInputChange}
        />
        <button>Sign Up</button>
        <div className="form-footer">
          <span className="form-footer-member"> Already a member ?</span>
          <span onClick={() => this.props.loadloginPage("login")}>
            {" "}
            Sign In
          </span>
        </div>
      </form>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  signUpUser: data => dispatch(signupApi(data))
});
const mapStateToProps = state => ({
  customer: state.customer
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
