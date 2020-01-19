import React, { Fragment } from 'react'

import Hero from './Hero'
import Form from './Form'

class Main extends React.Component {
  render() {
    return (
      <Fragment>
        <Hero></Hero>
        <Form></Form>
      </Fragment>
    )
  }
}

export default Main
