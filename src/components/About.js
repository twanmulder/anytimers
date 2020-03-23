import React, { Fragment } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import welcome from '../media/welcome.png'
import overview from '../media/overview.png'

class About extends React.Component {
  render() {
    return (
      <Fragment>
        <section id="about" className="container section about">
          <div className="container-inner">
            <div className="text">
              <h2>Effortlessly tracking your anyimers.</h2>
              <p>
                No more arguments, no more bickering. Just one simple solution
                that you can carry around in your pocket.
              </p>
              <p>
                Whether you're a well-trained veteran or you're just starting
                out, Anytimers brings you and your friends clarity.
              </p>
            </div>
            <img alt="placeholder" src={welcome} />
          </div>
        </section>

        <section id="roadmap" className="container section roadmap">
          <div className="container-inner">
            <div className="text">
              <h2>Continuous and clear updates.</h2>
              <p>
                Anytimers is constantly working on improving its experience.
                Feedback from
                <strong> YOU </strong> is the most important way to do this.
              </p>
              <p>
                To keep you informed of the progress and updates, we've created
                a roadmap of all up-and-coming features.
              </p>
              <Link to="/roadmap" className="button">
                See roadmap
              </Link>
            </div>
            <img alt="placeholder" src={overview} />
          </div>
        </section>
      </Fragment>
    )
  }
}

export default About
