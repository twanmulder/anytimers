import React from 'react'
import { Link } from 'react-router-dom'

import UpdateData from '../components/updateData'

class Drink extends React.Component {
  render() {
    return (
      <div className="update">
        <div className="cross">
          <h1>Drink an anytimer</h1>
          <Link to="/" aria-label="Go back to overview page">
            <i className="fas fa-times"></i>
          </Link>
        </div>
        <UpdateData description={false} buttonText={'Drink anytimer'} />
      </div>
    )
  }
}

export default Drink
