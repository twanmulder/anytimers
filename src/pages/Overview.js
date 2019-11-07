import React from 'react'
import { compose } from 'recompose'
import { withFirebase } from '../components/Firebase'

import NoAnytimers from '../components/noAnytimers'
import BeerButtons from '../components/beerButtons'
import AnytimersGiveList from '../components/anytimersGiveList'
import AnytimersReceiveList from '../components/anytimersReceiveList'
import Header from '../components/Header'

import anytimers from '../content/anytimers'

class OverviewBase extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      anytimersFrom: [],
      anytimersTo: [],
    }
  }

  isEmpty = anytimers => {
    if (Object.keys(anytimers).length === 0) {
      return true
    } else {
      return false
    }
  }

  firestoreGetAnytimers = () => {
    const currentUserUid = this.props.firebase.auth.W
    const db = this.props.firebase.db
    const anytimersFrom = []
    const anytimersTo = []

    // Get anytimers from
    // db.collection('anytimers')
    //   .where('from', '==', currentUserUid)
    //   .get()
    //   .then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //       anytimersFrom.push(doc.data())
    //     })
    //   })
    //   .catch(function(error) {
    //     console.log('Error getting documents: ', error)
    //   })
    //   .then(this.setState({ anytimersFrom: anytimersFrom }))

    // Get anytimers to
    // db.collection('anytimers')
    //   .where('to', '==', currentUserUid)
    //   .get()
    //   .then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //       anytimersTo.push(doc.data())
    //     })
    //   })
    //   .catch(function(error) {
    //     console.log('Error getting documents: ', error)
    //   })
    //   .then(this.setState({ anytimersTo: anytimersTo }))
  }

  componentDidMount() {
    this.firestoreGetAnytimers()
  }

  render() {
    const { anytimersFrom, anytimersTo } = this.state
    return (
      <div className="wrapper">
        <Header />
        {/* If the anytimers object is empty, add noAnytimers component */
        /* Else, add the beerbuttons and the anytimers components  */}
        {this.isEmpty(anytimers) ? (
          <NoAnytimers />
        ) : (
          [
            <BeerButtons />,
            <div id="anytimers">
              <AnytimersGiveList anytimers={anytimersFrom} />
              <AnytimersReceiveList />
            </div>,
          ]
        )}
      </div>
    )
  }
}

const Overview = compose(withFirebase)(OverviewBase)

export default Overview
