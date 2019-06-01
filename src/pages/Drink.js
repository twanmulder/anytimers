import React from "react";
import { Link } from "react-router-dom";

import Counter from "../components/Counter";

class Drink extends React.Component{
  render() {
    return (
      <div className="update">
        <div className="cross">
            <h1>Drink an anytimer</h1>
            <Link to="/">
              <i className="fas fa-times"></i>
            </Link>
        </div>
        <div className="drink update-data">
          <Counter />     
          <div className="anytime_from">
            <p>Anytimer from</p>
          </div>
          <select className="dropdown" name="">
            <option value="BLANK">Pick a name</option>
            <option value="$USER">Boyen de Leeuw</option>
            <option value="$USER">Daan Heijnen</option>
            <option value="$USER">Tijs Ots</option>
          </select>
          <div className="anytime_to">
            <p>Anytimer to</p>
          </div>
          <select className="dropdown" name="">
            <option value="BLANK">Pick a name</option>
            <option value="$USER_SELF">Twan Mulder (Self)</option>
            <option value="$USER">Boyen de Leeuw</option>
            <option value="$USER">Daan Heijnen</option>
            <option value="$USER">Tijs Ots</option>
          </select>
          <form id="description_form" className="" action="index.html" method="">
            <input value="Drink anytimer" type="submit" className="submit-button"></input>
          </form>
        </div>
        </div>
    )
  }
}

export default Drink;
