import React, { Component } from 'react'

export default class Error extends Component {

  render() {
    console.log("this.props: ", this.props)
    return (
      <div>
        <h1>ERROR!</h1>
        <p>Ops, something wrong has happened</p>
      </div>
    )
  }
}
