import React from "react";
import { Link } from "react-router-dom";

class noAnytimers extends React.Component {
	render() {
		return (
			<div className="noAnytimers">
				<Link to="/addfriends">
					<h2>
						You have no friends <i className="far fa-frown"></i>
					</h2>
					
					<p>Add them using the button at the top-right.</p>
				</Link>
			</div>
		);
	}
}
export default noAnytimers;
