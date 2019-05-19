import React from "react";

class AnytimerDetail extends React.Component{
  render() {
    return(
      <div>
        <div className="userdetail">
          <h5>{this.props.description}</h5>
          <h5 className="number">{this.props.amount}</h5>
        </div>
      </div>
    )
  }
}

// Create an element called AnytrimersDetailList, 
// which includes an ES6 map function that genereates an AnytimerDetail for every anytimer

class AnytimersDetailList extends React.Component {
  render() {
    return(
      <div className="userList">
        <AnytimerDetail
          to={this.props.to}
          description={this.props.description}
          amount={this.props.amount}
        />
      </div>
    )
  }
}

export default AnytimersDetailList;
