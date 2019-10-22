import React from 'react'
import { Link } from 'react-router-dom'

class Register extends React.Component {
  setCookie = () => {
    document.cookie = 'signed_in=true'
  }

  render() {
    return (
      <div>
        <h1>
          <Link to="landing" aria-label="Link back to landing page">
            <i className="fas fa-chevron-left"></i>
          </Link>
          Register
        </h1>

        <form className="register-form">
          <div className="wrapper">
            <div className="input-type">
              <label htmlFor="full-name">Full name</label>
              <input placeholder="John Doe" id="full-name" type="text"></input>
            </div>
            <div className="input-type">
              <label htmlFor="birth-date">Day of birth</label>
              <input placeholder="Doe" id="birth-date" type="date"></input>
            </div>
            <div className="input-type">
              <label htmlFor="email">E-mail</label>
              <input
                placeholder="JohnDoe@Hotmale.com"
                id="email"
                type="text"
              ></input>
            </div>
            <div className="input-type">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="•••••••••"
                id="password"
              ></input>
              <div className="password-requirements">
                <p>Pasword must be at least 8 charachters</p>
              </div>
            </div>

            <Link to="/tutorial">
              <input
                value="Sign Up"
                type="submit"
                className="submit-button"
                onClick={this.setCookie}
              ></input>
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

export default Register
