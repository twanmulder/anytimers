import React from "react";
import Sidebar from "../components/Sidebar";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAsideToggle: false
		};
	}
	render() {
		const isAsideToggled = this.state.isAsideToggle;
		return (
			<div className="header">
				<div className="header-title">
					<h1>My any's</h1>
				</div>

				<div
					id="header-profile"
					className="header-profile"
					onClick={() => this.setState({ isAsideToggle: !isAsideToggled })}
				>
					<div className="header-profile-circle"></div>
				</div>
				<div
					className={isAsideToggled ? "overlay toggled" : "overlay"}
					onClick={() => this.setState({ isAsideToggle: !isAsideToggled })}
				></div>
				<Sidebar isAsideToggled={this.state.isAsideToggle} />
			</div>
		);
	}
}

export default Header;
