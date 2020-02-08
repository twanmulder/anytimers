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
          <p>
            {description}
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
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
            <h3>Anytimers Roadmap</h3>

            <div className="timeline">
              {roadmapItems.map(item => (
                <RoadmapItem
                  title={item.title}
                  description={item.description}
                  key={item.title}
                />
              ))}
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
