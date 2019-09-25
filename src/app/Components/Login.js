import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
        <form className="registration-form">
          <input type="text" value="ddddd" placeholder="Email" />
          <input type="text" value="" placeholder="Password" />
        <div className='remember'>
          <input type="checkbox" />
          <span>Remember</span>
        </div>
          <button >Sign In</button>
          <div className="form-footer">
            <span> Forgot password</span>
          <span onClick={() => this.props.loadSignupPage("signup")} >Don't have an account</span>
          </div>
        </form>
    );
  }
}
