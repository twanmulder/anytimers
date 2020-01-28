import React, { Fragment } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    )
  }
}

export default App
