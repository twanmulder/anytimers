import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: '', errorMessage: false, successMessage: false }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ email: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    const email = this.state.email

    fetch('https://service.anytimers.app/api/v1/beta/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    }).then(response => {
      if (response.status === 400) {
        return this.setState({
          errorMessage: 'This email-adres is already taken.',
          successMessage: false,
        })
      } else if (response.status === 200) {
        return this.setState({
          email: '',
          errorMessage: false,
          successMessage: 'Thank you for signing up!',
        })
      }
    })
  }

  render() {
    const { errorMessage, successMessage } = this.state
    return (
      <section className="text is-revealing">
        <h5>Want to get early access to the private beta?</h5>
        <form
          className="newsletter newsletter-website connected"
          id="signup-form-top"
          onSubmit={this.handleSubmit}
        >
          <div className="newsletter-fields">
            <input
              value={this.state.email}
              onChange={this.handleChange}
              className="email"
              placeholder="Your Email"
              required="required"
              id="email"
              name="email"
              type="email"
            />
            <button className="signup-button">Sign up</button>
          </div>
          <div className="message error-message">{errorMessage}</div>
          <div className="message success-message">{successMessage}</div>
        </form>
      </section>
    )
  }
}

export default Form
