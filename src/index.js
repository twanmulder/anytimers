import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import './css/style.scss'
import * as serviceWorker from './serviceWorker'

import GA from './utils/GoogleAnalytics'
import ScrollToTop from './utils/ScrollToTop'

import Home from './pages/Home'
import Roadmap from './pages/Roadmap'

ReactDOM.render(
  <BrowserRouter>
    {GA.init() && <GA.RouteTracker />}
    <ScrollToTop />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/roadmap" exact component={Roadmap} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
