import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.PureComponent {
  setCookie = () => {
    document.cookie = "signed_in=true";
    document.location.reload();
  };

  render() {
    const hasCookie = document.cookie.indexOf("signed_in") > -1;
    return (
      <div>
        {hasCookie && <Redirect to="/overview" />}
        <h1><i className="fas fa-chevron-left"></i> Log in</h1>

        <form>
          <div className="wrapper">
            <div className="sign-in-text">
              <b>Welcome back!</b> <br /> Nice to see you again.
            </div>
            <div className="input-type">
              <label htmlFor="email">E-mail</label>
              <input placeholder="JohnDoe@Hotmale.com" id="email" type="text"></input>
            </div>
            <div className="input-type">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="•••••••••" id="password" type="text"></input>
              <div className="forgot-password">
                <b>Forgot</b> your password?
              </div>
            </div>

            <input value="Sign in" type="submit" className="submit-button" onClick={this.setCookie}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
