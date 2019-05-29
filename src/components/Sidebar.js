import React from 'react';

class Sidebar extends React.PureComponent {

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
              <li>Add friends</li>
              <li>Profile</li>
              <li>Settings</li>
            </ul>
            <div className="profileAsideLogOut">
              <p>Log out</p>
            </div>
          </div>
        </div>
    )
  }
}

export default Sidebar;
