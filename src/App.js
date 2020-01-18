import React from 'react'
import sr from './components/ScrollReveal'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends React.Component {
  componentDidMount() {
    // Reveal animations
    if (document.body.classList.contains('has-animations')) {
      /* global ScrollReveal */
      sr.reveal('.hero-title, .hero-paragraph, .text', {
        duration: 600,
        distance: '40px',
        // easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        easing: 'ease-in-out',
        origin: 'top',
        interval: 150,
      })

      sr.reveal('.hero-ball', {
        delay: 400,
        duration: 2200,
        distance: '40px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        origin: 'bottom',
        interval: 200,
      })

      sr.reveal('.hero-illustration-browser, .hero-squares', {
        delay: 400,
        duration: 600,
        distance: '40px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        origin: 'right',
        interval: 150,
      })

      sr.reveal('.anytimer-item, .anytimer-subtitle', {
        delay: 800,
        duration: 600,
        distance: '40px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        origin: 'bottom',
        interval: 150,
      })
    }
  }

  render() {
    return (
      <div className="body-wrap boxed-container">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    )
  }
}

export default App
