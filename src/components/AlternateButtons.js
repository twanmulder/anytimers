import React from 'react'

class AlternateButtons extends React.Component {
  render() {
    return (
      <section
        id="form-section"
        className="form-section form-section--alternate"
      >
        <div className="form-wrapper">
          <h5>Want to get early access to the private beta?</h5>
          <h6>Find it on your favorite app store.</h6>
          <div
            className="newsletter newsletter-website connected"
            id="signup-form-top"
          >
            <div className="newsletter-fields">
              <a className="signup-button">Play Store</a>
              <a className="signup-button">App Store</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default AlternateButtons
