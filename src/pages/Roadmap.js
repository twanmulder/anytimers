import React, { Fragment } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Form from '../components/Form'

import roadmapItems from '../content/roadmapItems'

class RoadmapItem extends React.Component {
  render() {
    const { title, description } = this.props

    return (
      <div className="container">
        <div className="content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

class Roadmap extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />

        <main>
          <section className="section section-roadmap">
            <div class="container-inner">
              <article>
                <h2>Anytimers Roadmap</h2>
                <p>
                  Anytimers is a continuous work in progress. To keep improving
                  its experience, we want to be open about future updates.
                </p>
                <p>
                  By sharing our roadmap, we want to enable you to communicate
                  with us. If you have any feedback, or run into any problems
                  using Anytimers, don't hesitate to let us know.
                </p>
                <a
                  className="button"
                  href="https://twitter.com/AnytimersApp"
                  target="_blank"
                >
                  Give us feedback
                </a>
              </article>

              <div className="timeline">
                {roadmapItems.map(item => (
                  <RoadmapItem
                    title={item.title}
                    description={item.description}
                    key={item.title}
                  />
                ))}
              </div>
            </div>
          </section>

          <Form />
        </main>

        <Footer />
      </Fragment>
    )
  }
}

export default Roadmap
