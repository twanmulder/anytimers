import React from "react";
import { Link } from "react-router-dom";

class Fournulfour extends React.Component {
  render() {
    return (
      <div id="fournulfour">
        <div className="veralign">
          <h1>OOPSIE WOOPIE YOU MADE A FUCKY WUCKY <br /></h1>
          <Link to="/">
            <h1 className="fournulfourbutton">CLICK ME TO GO BACK</h1>
          </Link>
        </div>
      </div>
    )
  }
}

export default Fournulfour;
