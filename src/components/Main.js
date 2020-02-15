import React from 'react'

import Hero from './Hero'
import AppStoreButtons from './AppStoreButtons'
import About from './About'

class Main extends React.Component {
  render() {
    return (
      <main>
        <Hero />
        <About />
        <AppStoreButtons />
      </main>
    )
  }
}

export default Main
