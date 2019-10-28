import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { withFirebase } from '../components/Firebase'
import { compose } from 'recompose'
import * as ROUTES from '../constants/routes'

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

class Login extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>
          <Link to="landing">
            <i className="fas fa-chevron-left"></i>
          </Link>
          Login
        </h1>
        <div className="sign-in-text">
          <p>Welcome back!</p>
          <p>Nice to see you again.</p>
        </div>
        <SignInForm />
      </div>
    )
  }
}

class SignInFormBase extends Login {
  constructor(props) {
    super(props)
    this.state = { ...INITIAL_STATE }
  }

  setCookie = () => {
    document.cookie = 'signed_in=true'
  }

  onSubmit = event => {
    const { email, password } = this.state
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE })
        this.props.history.push(ROUTES.OVERVIEW)
      })
      .catch(error => {
        this.setState({ error })
      })
    event.preventDefault()
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  // THIS NEEDS A FIX. MAYBE USE TOGGLE OR SOME OTHER WEIRD ES6 STUFF
  togglePassword = () => {
    let passwordVis = document.getElementById('password')
    let eye = document.getElementById('eye')

    if (passwordVis.type === 'password') {
      passwordVis.type = 'text'
      eye.classList.add('fa-eye-slash')
      eye.classList.remove('fa-eye')
    } else {
      passwordVis.type = 'password'
      eye.classList.add('fa-eye')
      eye.classList.remove('fa-eye-slash')
    }
  }
  render() {
    const { email, password, error } = this.state
    const isInvalid = password === '' || email === ''
    return (
      <form autoComplete="off" onSubmit={this.onSubmit}>
        <div className="input-type">
          <label htmlFor="email">E-mail</label>
          <input
            placeholder="JohnDoe@Hotmale.com"
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={this.onChange}
          ></input>
        </div>
        <div className="input-type">
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              placeholder="•••••••••"
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
            ></input>
            <div onClick={this.togglePassword}>
              <i id="eye" className="fas fa-eye"></i>
            </div>
          </div>
          <div className="forgot-password">
            <Link to="forgotpassword">Forgot your password?</Link>
          </div>
        </div>

        <input
          value="Log in"
          type="submit"
          className="login-button"
          disabled={isInvalid}
        ></input>

        {error && <p className="error-message">{error.message}</p>}
      </form>
    )
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase)
export default Login
export { SignInForm }
