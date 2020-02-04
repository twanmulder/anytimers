import React from 'react'

import Hero from './Hero'
import Form from './Form'
import About from './About'

class Main extends React.Component {
  render() {
    return (
      <main>
        <Hero />
        <Form />
        <About />
      </main>
    )
  }
}

export default Main
