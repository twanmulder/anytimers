import React from "react";

class AnytimersGive extends React.PureComponent {
  render() {
    const { from, to, description, amount, drunk } = this.props;
    return(
      <div className="user">
        <i className="fas fa-circle"></i>
        <h4 className="username" dangerouslySetInnerHTML={{__html: to }} />
        <h4 className="number" dangerouslySetInnerHTML={{__html: amount }} />
      </div>
    )
  }
}

class anytimersGiveList extends React.Component{
  render() {
    const { anytimers } = this.props;
    return(
      <div className="anytimers give">
        <h3>Anytimers to give out</h3>
        <div className="users">
          {anytimers.map(any => (
            <AnytimersGive
              to={any.to}
              amount={any.amount}
              key={any.description}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default anytimersGiveList;
