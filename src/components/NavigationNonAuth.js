import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Forgotpassword from '../pages/Forgotpassword'
import Register from '../pages/Register'

import * as ROUTES from '../constants/routes'

class NavigationNonAuth extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route path={ROUTES.LANDING} component={Landing} />
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.FORGOT_PASSWORD} component={Forgotpassword} />
        <Route path={ROUTES.REGISTER} component={Register} />

        <Redirect from="/" to={ROUTES.LANDING} />
      </React.Fragment>
    )
  }
}

export default NavigationNonAuth
