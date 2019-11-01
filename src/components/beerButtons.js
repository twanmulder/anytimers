import React from 'react'
import { Link } from 'react-router-dom'

class BeerButtons extends React.Component {
  state = {
    isButtonToggle: false,
  }

  render() {
    const isOverlayToggled = this.state.isButtonToggle
    return (
      <div>
        <div
          className={isOverlayToggled ? 'overlay toggled' : 'overlay'}
          onClick={() => this.setState({ isButtonToggle: !isOverlayToggled })}
        ></div>

        <div className="bttns">
          <div
            className={
              isOverlayToggled ? 'cross-bttn toggled bttn' : 'cross-bttn bttn'
            }
            onClick={() => this.setState({ isButtonToggle: !isOverlayToggled })}
          >
            <i className="fas fa-times"></i>
          </div>

          <Link to="/add" aria-label="Go to add anytimer page">
            <div
              className={
                isOverlayToggled ? 'add-bttn toggled bttn' : 'add-bttn bttn'
              }
            >
              <i className="fas fa-plus"></i>
            </div>
          </Link>

          <Link to="/drink" aria-label="Go to drink anytimer page">
            <div
              className={
                isOverlayToggled ? 'drink-bttn toggled bttn' : 'drink-bttn bttn'
              }
            >
              <i className="fas fa-beer"></i>
            </div>
          </Link>

          <div
            className={
              isOverlayToggled ? 'beer-bttn toggled bttn' : 'beer-bttn bttn'
            }
            onClick={() => this.setState({ isButtonToggle: !isOverlayToggled })}
          >
            <i className="fas fa-beer"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default BeerButtons
