import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import './css/css.scss'

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
          <Route path="/landing" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/forgotpassword" component={Forgotpassword} />
          <Route path="/register" component={Register} />
          <Route path="/tutorial" component={Tutorial} />
          <Route path="/add" component={Add} />
          <Route path="/drink" component={Drink} />
          <Route path="/addfriends" component={AddFriends} />
          <Route exact path="/" component={Overview} />

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
