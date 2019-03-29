import React from "react";
import { Redirect } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import BeerButtons from "../components/beerButtons";

class Overview extends React.PureComponent {

  state = {
    isSidebarToggle: false,
  }

  render() {
    const hasCookie = document.cookie.indexOf("signed_in") > -1;
    const isToggled = this.state.isSidebarToggle;

    return (
      <div>
        {!hasCookie && <Redirect to="/landing" />}
        <div className="wrapper">
          <div className="header">
            <div className="group">
              <div className="groupSelected">
                <h2>All</h2>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="groupList">
                <div className="groupInfo">
                  <h4>Select group (or all)</h4>
                </div>
                <div className="groupItem active">
                  <h3>All</h3>
                </div>
                <div className="groupItem">
                  <h3>Fashion Bois</h3>
                </div>
                <div className="groupItem">
                  <h3>Mannenavond</h3>
                </div>
                <div className="groupItem">
                  <h3>Redactiecommissie</h3>
                </div>
              </div>

            </div>

            <div id="profile" className="profile" onClick={ () => this.setState({isSidebarToggle: !isToggled})}>
              <i className="fas fa-user-circle"></i>
            </div>
          </div>

          <BeerButtons />


          <div id="anytimers" className="anytimers">
            <div className="anytimers give">
              <h3>Anytimers to give out</h3>
              <div className="users">
                <div id ="user" className="user">
                  <i className="fas fa-circle"></i>
                  <h4 className="username">Boyen de Leeuw</h4>
                  <h4 className="number">12</h4>
                </div>
                <div id="userList" className="userList">
                  <div className="userdetail">
                    <h5>Vijf cheeseburgers in z'n nek duwen.</h5>
                    <h5 className="number">5</h5>
                  </div>
                  <div className="userdetail">
                    <h5>In de gracht springen met al z'n kleren aan.</h5>
                    <h5 className="number">7</h5>
                  </div>
                </div>
                <div className="user">
                  <i className="fas fa-circle"></i>
                  <h4 className="username">Daan Heijnen</h4>
                  <h4 className="number">7</h4>
                </div>
                <div className="user">
                  <i className="fas fa-circle"></i>
                  <h4 className="username">Tijs Ots</h4>
                  <h4 className="number">9</h4>
                </div>
              </div>
            </div>
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
          </div>

        </div>

        <Sidebar />

      </div>
    )
  }
}

export default Overview;
