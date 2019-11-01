import React from 'react'

class Description extends React.Component {
  render() {
    return (
      <div className="description">
        <div className="update-data-text">
          <label htmlFor="description">Description</label>
        </div>
        <input
          placeholder="Type here"
          type="text"
          name="description"
          id="description"
        />
      </div>
    )
  }
}

export default Description
