import React from 'react'

import Hero from './Hero'
import Anytimers from './Anytimers'

class Main extends React.Component {
  render() {
    return (
      <main style={{ flexDirection: 'column' }}>
        <Hero></Hero>
        <Anytimers></Anytimers>
      </main>
    )
  }
}

export default Main
