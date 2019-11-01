import React from 'react'

import Counter from './Counter'
import Description from './Description'
import SubmitData from '../components/submitData'

class updateData extends React.Component {
  render() {
    const description = this.props.description
    const buttonText = this.props.buttonText
    return (
      <div className="add update-data">
        <form>
          <Counter />
          <div className="update-data-text">
            <label htmlFor="anytimer-from">Anytimer from</label>
          </div>
          <select className="dropdown" name="anytimer-from" id="anytimer-from">
            <option value="BLANK">Pick a name</option>
            <option value="$USER">Boyen de Leeuw</option>
            <option value="$USER">Daan Heijnen</option>
            <option value="$USER">Tijs Ots</option>
          </select>
          <div className="update-data-text">
            <label htmlFor="anytimer-to">Anytimer to</label>
          </div>
          <select className="dropdown" name="anytimer-to" id="anytimer-to">
            <option value="BLANK">Pick a name</option>
            <option value="$USER_SELF">Twan Mulder (Self)</option>
            <option value="$USER">Boyen de Leeuw</option>
            <option value="$USER">Daan Heijnen</option>
            <option value="$USER">Tijs Ots</option>
          </select>
          {/* If description prop is true, add the description component */}
          {description ? <Description /> : null}
          <SubmitData buttonText={buttonText} />
        </form>
      </div>
    )
  }
}

export default updateData
