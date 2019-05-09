import React from "react";
import { Link, Redirect } from "react-router-dom";

class Login extends React.PureComponent {
  setCookie = () => {
    document.cookie = "signed_in=true";
    document.location.reload();
  };

  render() {
    const hasCookie = document.cookie.indexOf("signed_in") > -1;
    return (
      <div>
        {hasCookie && <Redirect to="/" />}
        <div className="cross">
            <Link to="/">
              <i className="fas fa-times"></i>
            </Link>
          </div>
        <div className="sign-in-text">
              <p>Welcome back!</p>
              <p>Nice to see you again.</p>
            </div>
        <form>
            <div className="input-type">
              <label htmlFor="email">E-mail</label>
              <input placeholder="JohnDoe@Hotmale.com" id="email" type="text"></input>
            </div>
            <div className="input-type">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="•••••••••" id="password"></input>
              <div className="forgot-password">
                <Link to="forgotpassword">
                  <b>Forgot</b> your password?
                </Link>
              </div>
            </div>

            <input value="Sign in" type="submit" className="login-button" onClick={this.setCookie}></input>
        </form>
      </div>
    );
  }
}

export default Login;
