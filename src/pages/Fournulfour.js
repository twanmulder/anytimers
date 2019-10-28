import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

class Fournulfour extends React.Component {
  render() {
    return (
      <div id="fournulfour">
        <div className="veralign">
          <h1>
            OOPSIE WOOPSIE YOU MADE A FUCKY WUCKY <br />
          </h1>
          <Link to={ROUTES.LANDING}>
            <h1 className="fournulfourbutton">CLICK ME TO GO BACK</h1>
          </Link>
        </div>
      </div>
    )
  }
}

export default Fournulfour
