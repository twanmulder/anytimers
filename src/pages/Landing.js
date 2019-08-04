import React from "react";
import { Link, Redirect } from "react-router-dom";

class Landing extends React.Component {
	render() {
		const hasCookie = document.cookie.indexOf("signed_in") > -1;

		return (
			<div className="wrapper">
				{hasCookie && <Redirect to="/" />}
				<div className="landing-wrapper">
					{/* <img className="imglanding" src="https://origin-assets.the-sub.com/cdn/redesign/shared/image/birra-moretti-glass.png" alt="beer glass" /> */}
					<div className="welcome">
						<span>Welcome</span> to <span>Anytimers.nl</span>! THE website to
						track all your anytimers between you and your friends.
					</div>
					<div className="register">
						<Link to="/register">
							<input
								value="Register"
								type="submit"
								className="register-button"
							/>
						</Link>
					</div>
					<div className="log-in">
						<span>
							Already have an account?
							<Link to="/login">&nbsp;Log-in.</Link>
						</span>
					</div>
					<div className="cookies">
						<p>This site uses cookies!</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;
