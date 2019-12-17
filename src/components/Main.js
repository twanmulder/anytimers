import React from 'react'

import Hero from './Hero'
import Anytimers from './Anytimers'

class Main extends React.Component {
  state = {
    isMobile: false,
  }

  componentDidMount() {
    this.setState({ isMobile: window.innerWidth <= 1024 })
  }

  render() {
    const { isMobile } = this.state
    return (
      <main style={{ flexDirection: 'column' }}>
        <Hero></Hero>
        {isMobile ? '' : <Anytimers></Anytimers>}
      </main>
    )
  }
}

export default Main
