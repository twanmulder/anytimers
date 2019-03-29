import React from "react";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {

    return (
      <div className="wrapper">
        <img className="imglanding" src="https://origin-assets.the-sub.com/cdn/redesign/shared/image/birra-moretti-glass.png" alt="beer glass" />
        <div className="welcome">
          <b>Welcome</b> to Anytimes.nl! THE website to track all your anytimers between you and your friends.
        </div>
        <div className="log-in-register">
          <div className="log-in">
            <Link to="/login">
              <input value="Log in" type="submit" className="login-button"></input>
            </Link>
          </div>
          <div className="register">
            <Link to="/register">
              <input value="Register" type="submit" className="register-button"></input>
            </Link>
          </div>
        </div>
        <div className="cookies">
          <p>You agree to using cookies by continuing to use this website.</p>
        </div>
      </div>
    );
  }
}

export default Landing;
