import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: '' }

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
    })
  }

  render() {
    return (
      <div className="text is-revealing">
        <h5>Want to get early access and product updates?</h5>
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
              required=""
              id="email"
              name="email"
              type="email"
            />
            <button className="signup-button">Sign up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
