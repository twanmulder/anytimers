import React from 'react'

import Hero from './Hero'

class Main extends React.Component {
  render() {
    return (
      <main style={{ flexDirection: 'column' }}>
        <Hero></Hero>
      </main>
    )
  }
}

export default Main
