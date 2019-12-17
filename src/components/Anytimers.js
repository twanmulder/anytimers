import React from 'react'

import anytimers from '../content/anytimers'

class Anytimer extends React.Component {
  render() {
    return (
      <li className="anytimer-item is-revealing">
        <h4 className="anytimer-names">
          {this.props.from}
          <span className="anytimer-amount">{this.props.amount}</span>
          <span className="anytimer-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
          {this.props.to}
        </h4>
        <p className="anytimer-description">{this.props.description}</p>
      </li>
    )
  }
}

class Anytimers extends React.Component {
  render() {
    return (
      <section className="hero hero-anytimers">
        <div className="container">
          <div className="hero-inner">
            <h4 className="anytimer-subtitle">Recent anytimers</h4>
            <ul className="anytimer-list">
              {anytimers.map((any, i) => (
                <Anytimer
                  to={any.to}
                  from={any.from}
                  amount={any.amount}
                  description={any.description}
                  key={i}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default Anytimers
