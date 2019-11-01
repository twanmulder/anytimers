import React from 'react'
import { Link } from 'react-router-dom'

class Landing extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="landing-wrapper">
          {/* <img className="imglanding" src="https://origin-assets.the-sub.com/cdn/redesign/shared/image/birra-moretti-glass.png" alt="beer glass" /> */}
          <div className="welcome">
            <span>Welcome</span> to <span>Anytimers.nl</span>! THE website to
            track all your anytimers between you and your friends.
          </div>
          <div className="register">
            <Link to="/register">
              <input
                value="Create account"
                type="submit"
                className="register-button"
              />
            </Link>
          </div>
          <div className="log-in">
            <span>
              Already have an account?
              <Link to="/login">&nbsp;Log-in.</Link>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
