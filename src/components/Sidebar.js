import React from 'react'
import { Link } from 'react-router-dom'

import SignOutButton from './SignOutButton'

class Sidebar extends React.PureComponent {
  render() {
    return (
      <div
        className={
          this.props.isAsideToggled ? 'profileAside toggled' : 'profileAside'
        }
      >
        <div className="profileDetail">
          <div className="profileAvatar">
            <div className="profileAvatarCircle"></div>
          </div>
          <div className="profileName">
            <p>Twan Mulder</p>
          </div>
          <ul>
            <li>
              <Link to="/addfriends">Add friends</Link>
            </li>
            <li>Profile</li>
            <li>Settings</li>
          </ul>
          <SignOutButton />
        </div>
      </div>
    )
  }
}

export default Sidebar
