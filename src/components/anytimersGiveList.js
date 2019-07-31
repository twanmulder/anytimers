import React from "react";
import Expand from "react-expand-animated";

import AnytimersDetailList from "./anytimersDetailList";


class AnytimersGive extends React.PureComponent {
  state = { open: false, boxshadow: false };

  // Toggle function to toggle AnytimersDetailList elements
  toggle = () => {
    this.setState(prevState => ({ open: !prevState.open }));
    this.setState(prevState => ({ boxshadow: !prevState.boxshadow }));
  };

  render() {
    // transition const for expand element
    const transitions = ["height", "opacity"];

    return(
      <div className={this.state.boxshadow ? "user-wrapper box-shadow" : "user-wrapper"}>
        <div className="user" onClick={this.toggle}>
          <h4 className="username">{this.props.to}</h4>
          <h4 className="number">{this.props.amount}</h4>
        </div>

        <Expand 
          open={this.state.open}
          duration={ 175 }
          easing={ "ease-out" }
          transitions={transitions}
          >

          <AnytimersDetailList
            to={this.props.to}
            description={this.props.description}
            amount={this.props.amount}
          />
        </Expand>
      </div>
    )
  }
}

// Create an element called anytimersGiveList, 
// which includes an ES6 map function that genereates an AnytimersGive for every user
class anytimersGiveList extends React.Component{
  render() {
    const { anytimers } = this.props;
    return(
      <div className="anytimers give">
        <h3>Anytimers to give out</h3>
        <div className="users">
          {anytimers.map(any => (
            <AnytimersGive
              to={any.to}
              amount={any.amount}
              description={any.description}
              key={any.description}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default anytimersGiveList;
