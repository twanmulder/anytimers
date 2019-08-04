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
				{
					h1: "Add Anytimers",
					p: "Add a from, to, amount, and description to your anytimer."
				},
				{
					h1: "Drink Anytimers",
					p: "Drink anytimers using the same 'beer' button. Have fun!"
				}
			],
			toOverview: false
		};
	}

	dotClick = index => {
		// Toggle active dot class
		document
			.querySelectorAll(".onBoarding-dot")
			[this.state.frame].classList.toggle("active");
		document
			.querySelectorAll(".onBoarding-dot")
			[index].classList.toggle("active");
		this.setState({ frame: index });
	};

	nextClick = () => {
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
					<button className="onBoarding-button" onClick={this.nextClick}>
						Next
					</button>
					<div className="onBoarding-dots">
						<div
							className="onBoarding-dot active"
							onClick={() => this.dotClick(0)}
						></div>
						<div
							className="onBoarding-dot"
							onClick={() => this.dotClick(1)}
						></div>
						<div
							className="onBoarding-dot"
							onClick={() => this.dotClick(2)}
						></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Tutorial;
