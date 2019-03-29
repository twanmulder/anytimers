import React from "react";

class anytimersReceive extends React.Component {
  render() {
    return(
      <div className="anytimers receive">
        <h3>Anytimers to receive</h3>
        <div className="users">
          <div className="user">
            <i className="fas fa-circle"></i>
            <h4 className="username">Boyen de Leeuw</h4>
            <h4 className="number">4</h4>
          </div>
          <div className="user">
            <i className="fas fa-circle"></i>
            <h4 className="username">Daan Heijnen</h4>
            <h4 className="number">6</h4>
          </div>
          <div className="user">
            <i className="fas fa-circle"></i>
            <h4 className="username">Tijs Ots</h4>
            <h4 className="number">14</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default anytimersReceive;
