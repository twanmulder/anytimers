import React from 'react'
import { Route, Switch, Redirect } from 'react-router'

export default (
  <Switch>
    <Route path="/" />
    <Route path="/roadmap" />
    <Redirect from="*" to="/" />
  </Switch>
)
