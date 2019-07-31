import React from 'react';
import { Link } from "react-router-dom";

class Sidebar extends React.PureComponent {
  deleteCookie = () => {
    document.cookie = "signed_in= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    document.location.reload();
  };

  render() {
    return (
        <div className={ this.props.isAsideToggled ? "profileAside toggled" : "profileAside"}>
          <div className="profileDetail">
            <div className="profileAvatar">
              <div className="profileAvatarCircle"></div>
            </div>
            <div className="profileName">
              <p>Twan Mulder</p>
            </div>
            <ul>
              <Link to="/addfriends">
                <li>Add friends</li>
              </Link>
              <li>Profile</li>
              <li>Settings</li>
            </ul>
            <div className="profileAsideLogOut" onClick={this.deleteCookie}>
              <p>Log out</p>
            </div>
          </div>
        </div>
    )
  }
}

export default Sidebar;
