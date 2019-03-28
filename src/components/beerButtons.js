import React from "react";
import { Link } from "react-router-dom";

class BeerButtons extends React.Component {

  state = {
    isButtonToggle: false,
  }


  render() {
    const isToggled = this.state.isButtonToggle;
    return (
      <div>
        <div
        className={ isToggled ? "overlay toggled" : "overlay"}
        onClick={ () => this.setState({isButtonToggle: !isToggled}) }
        ></div>

        <div
          className={ isToggled ? "cross-bttn toggled bttn" : "cross-bttn bttn"}
          onClick={ () => this.setState({isButtonToggle: !isToggled}) }>
          <i className="fas fa-times"></i>
        </div>

        <Link to="/add">
          <div className={ isToggled ? "add-bttn toggled bttn" : "add-bttn bttn"}>
            <i className="fas fa-plus"></i>
          </div>
        </Link>

        <Link to="/drink">
          <div className={ isToggled ? "drink-bttn toggled bttn" : "drink-bttn bttn"}>
            <i className="fas fa-beer"></i>
          </div>
        </Link>

        <div
          className={ isToggled ? "beer-bttn toggled bttn" : "beer-bttn bttn"}
          onClick={ () => this.setState({isButtonToggle: !isToggled}) }>
          <i className="fas fa-beer"></i>
        </div>

      </div>
    )
  }
}

export default BeerButtons;
