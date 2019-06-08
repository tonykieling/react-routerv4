import React, { Component } from 'react'

export default class About extends Component {

  render() {
    console.log("this.props: ", this.props)
    return (
      <div>
        <h1>This is ABOUT Component</h1>
        <p>About something...</p>
      </div>
    )
  }
}
