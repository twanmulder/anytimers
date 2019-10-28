import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import { withFirebase } from '../components/Firebase'

const Forgotpassword = () => (
  <div>
    <h1>
      <Link to="Login">
        <i className="fas fa-chevron-left"></i>
      </Link>
      Forgot password
    </h1>
    <ForgotpasswordForm />
  </div>
)

const INITIAL_STATE = {
  email: '',
  error: null,
  succes: false,
}

class ForgotpasswordFormBase extends Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }
  onSubmit = event => {
    const { email } = this.state
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE })
        this.setState({ succes: true })
      })
      .catch(error => {
        this.setState({ error })
      })
    event.preventDefault()
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    const { email, error } = this.state
    const isInvalid = email === ''
    return (
      <form onSubmit={this.onSubmit} autoComplete="off">
        <div className="wrapper">
          <div className="forgot-password-text">
            <p>Forgot your password?</p>
            <p>
              Fill in your email address to receive a link to reset your
              password.
            </p>
          </div>
          <div className="input-type">
            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              type="text"
              id="email"
              placeholder="JohnDoe@Hotmale.com"
            ></input>
          </div>
        </div>
        <button disabled={isInvalid} type="submit" className="submit-button">
          Reset My Password
        </button>
        {error && <p className="error-message">{error.message}</p>}
        {this.state.succes ? (
          <p className="succes-message">
            Your password has been reset, check your email :)
          </p>
        ) : (
          ''
        )}
      </form>
    )
  }
}

export default Forgotpassword
const ForgotpasswordForm = compose(
  withRouter,
  withFirebase
)(ForgotpasswordFormBase)
export { ForgotpasswordForm }
