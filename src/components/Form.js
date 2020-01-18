import React from 'react'

class Form extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target)

    console.log(data)

    fetch('https://service.anytimers.app/api/v1/beta/signup', {
      method: 'POST',
      body: data,
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
