import React from "react";

class Counter extends React.Component {
	// PASS COUNT AS PROP
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	// COUNT INCREASE TO STATE PROPS
	increment() {
		this.setState({
			count: this.state.count + 1
		});
	}

	// COUNT DECREASE TO STATE PROPS
	decrement() {
		if (this.state.count === 0) {
			this.setState({
				counter: 0
			});
		} else {
			this.setState({
				count: this.state.count - 1
			});
		}
	}

	render() {
		return (
			<div className="amount">
				<div className="minus" onClick={e => this.decrement(e)}>
					<i className="fas fa-chevron-left"></i>
				</div>
				<div className="number">
					<p id="drinkValue">{this.state.count}</p>
				</div>
				<div className="plus" onClick={e => this.increment(e)}>
					<i className="fas fa-chevron-right"></i>
				</div>
			</div>
		);
	}
}

export default Counter;
