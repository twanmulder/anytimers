import React from "react";
import { Link } from "react-router-dom";

class addFriends extends React.PureComponent {
	render() {
		return (
			<div className="add-friends">
				<div className="cross">
					<h1>Add Your Friends</h1>
					<Link to="/">
						<i className="fas fa-times"></i>
					</Link>
				</div>
				<div className="search-wrapper">
					<div className="search-icon">
						<i className="fas fa-search"></i>
					</div>
					<form>
						<div className="search-input input-type">
							<input
								type="text"
								id="search-friends"
								placeholder="Search..."
							></input>
						</div>
					</form>
				</div>
				<div className="search-subtext">
					<h2>You can find them by email or (full) name.</h2>
				</div>
			</div>
		);
	}
}

export default addFriends;
