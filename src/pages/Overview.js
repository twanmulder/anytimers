import React from "react";
import { Redirect } from "react-router-dom";

import BeerButtons from "../components/beerButtons";
import AnytimersGiveList from "../components/anytimersGiveList";
import AnytimersReceiveList from "../components/anytimersReceiveList";
import Header from "../components/Header";

import anytimers from "../content/anytimers";

class Overview extends React.PureComponent {
	render() {
		const hasCookie = document.cookie.indexOf("signed_in") > -1;

		return (
			<div className="wrapper">
				{!hasCookie && <Redirect to="/landing" />}
				<Header />
				<BeerButtons />
				<div id="anytimers">
					<AnytimersGiveList anytimers={anytimers} />
					<AnytimersReceiveList />
				</div>
			</div>
		);
	}
}

export default Overview;
