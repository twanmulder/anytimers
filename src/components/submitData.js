import React from "react";
import { Link } from "react-router-dom";

class submitData extends React.Component {
	render() {
		const buttonText = this.props.buttonText;
		return (
			<Link to="/">
				<input
					value={buttonText}
					type="submit"
					className="submit-button"
				></input>
			</Link>
		);
	}
}

export default submitData;
