import React from 'react'

class Anytimers extends React.Component {
  render() {
    return (
      <section className="hero hero-anytimers">
        <div className="container">
          <div className="hero-inner">
            <h4 className="anytimer-subtitle">Recent anytimers</h4>
            <ul className="anytimer-list">
              <li className="anytimer-item is-revealing">
                <h4 className="anytimer-names">
                  Boyen
                  <span className="anytimer-amount">4</span>
                  <span className="anytimer-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-arrow-right"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  Wouter
                </h4>
                <p className="anytimer-description">Omdat hij een mafklap is</p>
              </li>
              <li className="anytimer-item is-revealing">
                <h4 className="anytimer-names">
                  Daan
                  <span className="anytimer-amount">13</span>
                  <span className="anytimer-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-arrow-right"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  Joep
                </h4>
                <p className="anytimer-description">5 flessen ice trekken</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default Anytimers
