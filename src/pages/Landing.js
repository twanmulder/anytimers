import React from "react";
import { Redirect } from "react-router-dom";

class Landing extends React.PureComponent {
  setCookie = () => {
    document.cookie = "signed_in=true";
    document.location.reload();
  };

  render() {
    const hasCookie = document.cookie.indexOf("signed_in") > -1;
    return (
      <div>
        {hasCookie && <Redirect to="/overview" />}
        <h1>DIT IS DE LANDING</h1>
        <button onClick={this.setCookie}>Set Cookie</button>
      </div>
    );
  }
}

export default Landing;
