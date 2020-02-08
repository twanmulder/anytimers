import React from 'react'

import Logo from '../media/Logo'
import { HashLink as Link } from 'react-router-hash-link'

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
          <Link to="/#about" className="navigation-link">
            About
          </Link>
          <Link to="/roadmap" className="navigation-link">
            Roadmap
          </Link>
          <Link to="/#form-section" className="signup-button">
            Get early access
          </Link>
        </nav>
      </header>
    )
  }
}

export default Header
