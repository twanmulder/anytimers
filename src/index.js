import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import './css/css.scss'
import { compose } from 'recompose'

import Firebase, { FirebaseContext } from './components/Firebase'
import { withFirebase } from './components/Firebase'

import Loading from './pages/Loading'

import NavigationAuth from './components/NavigationAuth'
import NavigationNonAuth from './components/NavigationNonAuth'

class IndexBase extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authUser: null,
      loading: true,
    }
  }
  componentDidMount() {
    this.setState({ loading: true })

    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser ? this.setState({ authUser }) : this.setState({ authUser: null })
      this.setState({ loading: false })
    })
  }
  componentWillUnmount() {
    this.listener()
  }

  render() {
    const { loading, authUser } = this.state
    return (
      <React.Fragment>
        {loading ? (
          <Loading />
        ) : (
          <BrowserRouter>
            <div className="app" id="app">
              {authUser ? <NavigationAuth /> : <NavigationNonAuth />}
            </div>
          </BrowserRouter>
        )}
      </React.Fragment>
    )
  }
}

const Index = compose(withFirebase)(IndexBase)

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
