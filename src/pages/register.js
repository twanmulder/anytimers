import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { withFirebase } from '../components/Firebase'
import { compose } from 'recompose'
import * as ROUTES from '../constants/routes'

const INITIAL_STATE = {
  fullname: '',
  email: '',
  password: '',
  error: null,
}

class Register extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="landing" aria-label="Link back to landing page">
            <i className="fas fa-chevron-left"></i>
          </Link>
          Create account
        </h1>
        <SignUpForm />
      </div>
    )
  }
}

class SignUpFormBase extends Register {
  constructor(props) {
    super(props)
    this.state = { ...INITIAL_STATE }
  }

  setCookie = () => {
    document.cookie = 'signed_in=true'
  }

  onSubmit = event => {
    const { fullname, email, password } = this.state
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
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
    const { fullname, email, password, error } = this.state
    const isInvalid = password === '' || email === '' || fullname === ''
    return (
      <form
        autoComplete="off"
        className="register-form"
        onSubmit={this.onSubmit}
      >
        <div className="wrapper">
          <div className="input-type">
            <label htmlFor="full-name">Full name</label>
            <input
              placeholder="John Doe"
              id="full-name"
              type="text"
              name="fullname"
              value={fullname}
              onChange={this.onChange}
            ></input>
          </div>
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
            <div className="password-requirements">
              <p>Password must be at least 8 charachters</p>
            </div>
          </div>

          <input
            value="Create account"
            type="submit"
            className="submit-button"
            disabled={isInvalid}
          ></input>

          {error && <p className="error-message">{error.message}</p>}
        </div>
      </form>
    )
  }
}

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase)
export default Register
export { SignUpForm }
