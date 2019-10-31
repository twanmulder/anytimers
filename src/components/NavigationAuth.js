import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import * as ROUTES from '../constants/routes'

import Tutorial from '../pages/Tutorial'
import Add from '../pages/Add'
import Drink from '../pages/Drink'
import AddFriends from '../pages/addFriends'
import Overview from '../pages/Overview'

class NavigationAuth extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path={ROUTES.TUTORIAL} component={Tutorial} />
          <Route path={ROUTES.ADD} component={Add} />
          <Route path={ROUTES.DRINK} component={Drink} />
          <Route path={ROUTES.ADD_FRIENDS} component={AddFriends} />
          <Route exact path={ROUTES.OVERVIEW} component={Overview} />

          <Redirect from={ROUTES.LANDING} to={ROUTES.OVERVIEW} />
          <Redirect from={ROUTES.LOGIN} to={ROUTES.OVERVIEW} />
          <Redirect from={ROUTES.FORGOT_PASSWORD} to={ROUTES.OVERVIEW} />
          <Redirect from={ROUTES.REGISTER} to={ROUTES.OVERVIEW} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default NavigationAuth
