import React from 'react'

class Hero extends React.Component {
  render() {
    return (
      <section className="section hero">
        <div className="container-inner">
          <article>
            <h1 className="hero-headline">
              <span className="hero-headline-text">
                <div className="word-container">
                  <div className="word">Any&nbsp;</div>
                </div>
                <div className="word-container">
                  <div className="word">Place</div>
                </div>
                <div className="word-container">
                  <div className="word">,</div>
                </div>
                <br />
                <div className="word-container">
                  <div className="word">Any&nbsp;</div>
                </div>
                <div className="word-container">
                  <div className="word">Time</div>
                </div>
                <div className="word-container">
                  <div className="word">.</div>
                </div>
              </span>
            </h1>

            <h4 className="hero-intro">
              Keep track of all your anytimers.
              <br />
              Wherever you are, whenever you are.
            </h4>
          </article>
        </div>
      </section>
    )
  }
}

export default Hero
