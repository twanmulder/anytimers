import React from "react";
import { Link } from "react-router-dom";

class Forgotpassword extends React.Component {
  render() {
    return (
      <div>
      <h1>
        <Link to="Login">
          <i className="fas fa-chevron-left"></i>
        </Link>
       Forgot password
      </h1>

  		<form>
  			<div className="wrapper">
          <div className="forgot-password-text">
            Forgot your password? <br /> <br /> Fill in your email address to receive a link to reset your password.
          </div>
  				<div className="input-type">
  					<label htmlFor="email">E-mail</label>
  					<input placeholder="JohnDoe@Hotmale.com" id="email" type="text"></input>
  				</div>

  				<input value="Reset password" type="submit" className="submit-button"></input>
  			</div>
  		</form>
      </div>
    );
  }
}

export default Forgotpassword;
