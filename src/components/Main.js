import React from 'react'

import Hero from './Hero'
import Anytimers from './Anytimers'

class Main extends React.Component {
  state = {
    isMobile: false,
  }

  isViewportMobile = () => {
    this.setState({ isMobile: window.innerWidth <= 1024 })
  }

  componentDidMount() {
    this.isViewportMobile()
    window.addEventListener('resize', this.isViewportMobile)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.isViewportMobile)
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
