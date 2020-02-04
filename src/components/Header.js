import React from 'react'

import Logo from '../media/Logo'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolled: false,
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    if (document.documentElement.scrollTop > 1) {
      this.setState({ scrolled: true })
    } else if (this.state.scrolled !== false) {
      this.setState({ scrolled: false })
    }
  }

  render() {
    const scrolled = this.state.scrolled
    return (
      <header className={scrolled ? 'scrolled' : ''}>
        <nav>
          <a className="logo" href="/">
            <Logo />
            Anytimers
          </a>
          <a className="navigation-link" href="/#about">
            About
          </a>
          <a className="navigation-link" href="roadmap">
            Roadmap
          </a>
          <a href="/#form-section" className="signup-button">
            Get early access
          </a>
        </nav>
      </header>
    )
  }
}

export default Header
