import React, { Component } from 'react'

export default class Home extends Component {

  render() {
    console.log("this.props: ", this.props)
    return (
      <div>
        <h1>Admin Page</h1>
        <p>This is an Admin area</p>
      </div>
    )
  }
}
