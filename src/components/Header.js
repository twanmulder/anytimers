import React from 'react'

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
            Anytimers
          </a>
          <a
            href="#form-section"
            className="signup-button light header-signup"
            data-show="signup"
          >
            Get early access
          </a>
        </nav>
      </header>
    )
  }
}

export default Header
