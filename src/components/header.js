import React from "react"

class header extends React.Component {
  render() {
    return(
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

        <div id="profile" className="profile">
          <i className="fas fa-user-circle"></i>
        </div>
      </div>
    )
  }
}

export default header;
