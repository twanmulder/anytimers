import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Forgotpassword from '../pages/Forgotpassword'
import Register from '../pages/Register'

import * as ROUTES from '../constants/routes'

class NavigationNonAuth extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.FORGOT_PASSWORD} component={Forgotpassword} />
          <Route path={ROUTES.REGISTER} component={Register} />

          <Redirect from="/" to={ROUTES.LANDING} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default NavigationNonAuth
