import React from "react";

class AnytimersGive extends React.PureComponent {
  render() {
    return(
      <div>

        <div className="user">
          <i className="fas fa-circle"></i>
          <h4 className="username">{this.props.to}</h4>
          <h4 className="number">{this.props.amount}</h4>
        </div>

        <div className="userList">
          <div className="userdetail">
            <h5>{this.props.description}</h5>
            <h5 className="number">{this.props.amount}</h5>
          </div>
        </div>

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
              description={any.description}
              key={any.description}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default anytimersGiveList;
