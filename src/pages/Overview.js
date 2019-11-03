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
  isEmpty = anytimers => {
    if (Object.keys(anytimers).length === 0) {
      return true
    } else {
      return false
    }
  }

  testGetData = () => {
    const currenUserUid = this.props.firebase.auth.W
    const db = this.props.firebase.db
    console.log(currenUserUid)
    // let docRef = db.collection('anytimers').where('to', '==', currenUserUid)
    // docRef
    //   .get()
    //   .then(function(doc) {
    //     if (doc.exists) {
    //       console.log('Document data:', doc.data())
    //     } else {
    //       // doc.data() will be undefined in this case
    //       console.log('No such document!')
    //     }
    //   })
    //   .catch(function(error) {
    //     console.log('Error getting document:', error)
    //   })
  }

  render() {
    this.testGetData()
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
              <AnytimersGiveList anytimers={anytimers} />
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
