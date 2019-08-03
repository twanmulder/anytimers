import React from "react";
import { Redirect, Link } from "react-router-dom";

class Tutorial extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			frame: 1,
			toOverview: false
		};
	}
	handleClick = () => {
		// This function is really shity, please fix it sometime
		// The redirection is pretty okay, but the text changes really suck
		if (this.state.frame === 1) {
			document
				.querySelector(".onBoarding-text")
				.getElementsByTagName("h2")[0].innerHTML = "Add Anytimers";
			document
				.querySelector(".onBoarding-text")
				.getElementsByTagName("p")[0].innerHTML =
				"Add anytimers using the 'beer' button.";
			document
				.querySelectorAll(".onBoarding-dot")[0]
				.classList.toggle("active");
			document
				.querySelectorAll(".onBoarding-dot")[1]
				.classList.toggle("active");
			this.setState(prevState => {
				return { frame: prevState.frame + 1 };
			});
		} else if (this.state.frame === 2) {
			document
				.querySelector(".onBoarding-text")
				.getElementsByTagName("h2")[0].innerHTML = "Drink Anytimers";
			document
				.querySelector(".onBoarding-text")
				.getElementsByTagName("p")[0].innerHTML =
				"Drink anytimers and have fun!";
			document
				.querySelectorAll(".onBoarding-dot")[1]
				.classList.toggle("active");
			document
				.querySelectorAll(".onBoarding-dot")[2]
				.classList.toggle("active");
			this.setState(prevState => {
				return { frame: prevState.frame + 1 };
			});
		} else if (this.state.frame === 3) {
			this.setState({ toOverview: true });
		}
	};
	render() {
		if (this.state.toOverview === true) {
			return <Redirect to="/" />;
		}
		return (
			<div className="onBoarding">
				<div className="onBoarding-image"></div>
				<div className="onBoarding-text">
					<h2>Add Friends</h2>
					<p>Search and add your friends to start tracking your anytimers.</p>
				</div>
				<div className="onBoarding-controls">
					<button className="onBoarding-button" onClick={this.handleClick}>
						Next
					</button>
					<div className="onBoarding-dots">
						<div className="onBoarding-dot active"></div>
						<div className="onBoarding-dot"></div>
						<div className="onBoarding-dot"></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Tutorial;
