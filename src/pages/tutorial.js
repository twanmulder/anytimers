import React from "react";
import { Redirect } from "react-router-dom";

class Tutorial extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			frame: 0,
			frames: [
				{
					h1: "Add Friends",
					p: "Search and add your friends to start tracking your anytimers."
				},
				{ h1: "Add Anytimers", p: "Add anytimers using the 'beer' button." },
				{ h1: "Drink Anytimers", p: "Drink anytimers and have fun!" }
			],
			toOverview: false
		};
	}
	handleClick = () => {
		// If the button is clicked on final frame, redirect to overview page
		if (this.state.frame === 2) {
			this.setState({ toOverview: true });
			return;
		}
		// Toggle active dot class
		document
			.querySelectorAll(".onBoarding-dot")
			[this.state.frame].classList.toggle("active");
		document
			.querySelectorAll(".onBoarding-dot")
			[this.state.frame + 1].classList.toggle("active");
		// Increase the state frame to frame++
		this.setState(prevState => {
			return { frame: prevState.frame + 1 };
		});
	};
	render() {
		if (this.state.toOverview === true) {
			return <Redirect to="/" />;
		}
		return (
			<div className="onBoarding">
				<div className="onBoarding-image"></div>
				<div className="onBoarding-text">
					<h2>{this.state.frames[this.state.frame].h1}</h2>
					<p>{this.state.frames[this.state.frame].p}</p>
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
