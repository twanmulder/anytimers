import React from "react";
import { Link } from "react-router-dom";

import UpdateData from "../components/updateData";

class Add extends React.Component {
	render() {
		return (
			<div className="update">
				<div className="cross">
					<h1>Add an anytimer</h1>
					<Link to="/">
						<i className="fas fa-times"></i>
					</Link>
				</div>
				<UpdateData description={true} buttonText={"Add anytimer"} />
			</div>
		);
	}
}

export default Add;
