import React from 'react'

class Form extends React.Component {
  render() {
    return (
      <div class="text is-revealing">
        <h5>Want to get early access and product updates?</h5>
        <form
          class="newsletter newsletter-website connected"
          id="signup-form-top"
        >
          <div class="newsletter-fields">
            <input
              class="email"
              placeholder="Your Email"
              required=""
              type="email"
              value=""
            />
            <button class="signup-button">Sign up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
