import React from 'react';

class Sidebar extends React.PureComponent {

  render() {
    return (
        <div className="profileAside">
          <div className="profileDetail">
            <div className="profileAvatar">
              <i className="fas fa-user-circle"></i>
            </div>
            <div className="profileName">
              <p>Twan Mulder</p>
            </div>
            <ul>
              <li>Add friends</li>
              <li>Join group</li>
              <li>Create group</li>
              <li>Settings</li>
            </ul>
          </div>
        </div>
    )
  }
}

export default Sidebar;
