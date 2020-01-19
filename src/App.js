import React, { Fragment } from 'react'

import Header from './components/Header'
import Main from './components/Main'

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Main></Main>
      </Fragment>
    )
  }
}

export default App
