import React, { Component } from "react";
import { connect } from "react-redux";
import { signinApi } from "./../redux/actions/customer";

export class Login extends Component {

  state = {
    email: "",
    password: "",
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signinUser(this.state);

    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    const { customer } = this.props;

    if (customer.isAuthenticated) {
      this.props.removeModal();
    }
    return (
      <form className="registration-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.email}
          placeholder="Email"
          onChange={this.onInputChange}
          name="email"
        />
        <input
          type="text"
          value={this.state.password}
          placeholder="Password"
          onChange={this.onInputChange}
          name="password"
          type="password"
        />
        <div className="remember">
          <input type="checkbox" />
          <span>Remember</span>
        </div>
        <button type="submit">Sign In</button>
        <div className="form-footer">
          <span> Forgot password</span>
          <span onClick={() => this.props.loadSignupPage("signup")}>
            Don't have an account
          </span>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signinUser: (data) => dispatch(signinApi(data)),
});
const mapStateToProps = (state) => ({
  customer: state.customer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

