import React from 'react'

import NoAnytimers from '../components/noAnytimers'
import BeerButtons from '../components/beerButtons'
import AnytimersGiveList from '../components/anytimersGiveList'
import AnytimersReceiveList from '../components/anytimersReceiveList'
import Header from '../components/Header'

import anytimers from '../content/anytimers'

class Overview extends React.PureComponent {
  isEmpty = anytimers => {
    if (Object.keys(anytimers).length === 0) {
      return true
    } else {
      return false
    }
  }
  render() {
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

export default Overview
