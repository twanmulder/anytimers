import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import './css/css.scss'
import * as ROUTES from '../src/constants/routes'

import Firebase, { FirebaseContext } from './components/Firebase'

import Overview from './pages/Overview'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Forgotpassword from './pages/Forgotpassword'
import Register from './pages/Register'
import Tutorial from './pages/Tutorial'
import Fournulfour from './pages/Fournulfour'
import Add from './pages/Add'
import Drink from './pages/Drink'
import AddFriends from './pages/addFriends'

const Index = () => {
  return (
    <BrowserRouter>
      <div className="app" id="app">
        <Switch>
          <Route path={ROUTES.LANDING} component={Landing} />
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.FORGOT_PASSWORD} component={Forgotpassword} />
          <Route path={ROUTES.REGISTER} component={Register} />
          <Route path={ROUTES.TUTORIAL} component={Tutorial} />
          <Route path={ROUTES.ADD} component={Add} />
          <Route path={ROUTES.DRINK} component={Drink} />
          <Route path={ROUTES.ADD_FRIENDS} component={AddFriends} />
          <Route exact path={ROUTES.OVERVIEW} component={Overview} />

          <Route path="/" component={Fournulfour} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Index />
  </FirebaseContext.Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
