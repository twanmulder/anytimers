import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <section>
          <ul className="footer-social-wrapper">
            <li className="footer-social">
              <p>
                You can
                <a
                  href="https://twitter.com/AnytimersApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;tweet at us
                </a>
                , or
                <a
                  href="mailto:info@anytimers.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;send us an email
                </a>
                .
              </p>
            </li>
          </ul>

          <ul className="footer-copyright-wrapper">
            <li className="footer-copyright">
              <span>Anytimers</span>
            </li>
            <li className="footer-copyright">
              <span>© Copyright 2020 Anytimers Software.</span>
            </li>
            <li className="footer-copyright">
              <span> All rights reserved.</span>
            </li>
          </ul>
        </section>
      </footer>
    )
  }
}

export default Footer
