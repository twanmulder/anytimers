import React from "react";
import { Link } from "react-router-dom";

class Register extends React.PureComponent {
  render() {
    return (
      <div>
      <h1>
        <Link to="landing">
          <i className="fas fa-chevron-left"></i>
        </Link>
        Register
      </h1>

  		<form>
  			<div className="wrapper">
  				<div className="input-type">
  					<label htmlFor="first-name">First name</label>
  					<input placeholder="John" id="first-name" type="text"></input>
  				</div>
  				<div className="input-type">
  					<label htmlFor="last-name">Last name</label>
  					<input placeholder="Doe" id="last-name" type="text"></input>
  				</div>
  				<div className="input-type">
  					<label htmlFor="email">E-mail</label>
  					<input placeholder="JohnDoe@Hotmale.com" id="email" type="text"></input>
  				</div>
  				<div className="input-type">
  					<label htmlFor="password">Password</label>
  					<input type="password" placeholder="•••••••" id="password"></input>
  				</div>

  				<input value="Sign Up" type="submit" className="submit-button"></input>
  			</div>
  		</form>

  		<div className="sign-up">Sign up using</div>
  		<form id="social">
  			<input value="Facebook" type="submit" className="submit-button" id="facebook"></input>
  			<input value="Google" type="submit" className="submit-button" id="google"></input>
  		</form>
      </div>
    );
  }
}

export default Register;
