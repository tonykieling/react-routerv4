import React, { Component } from 'react'

export default class Home extends Component {

  render() {
    console.log("this.props: ", this.props)
    return (
      <div>
        <h1>This is Home Component</h1>
      </div>
    )
  }
}
