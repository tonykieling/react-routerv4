import React, { Component } from 'react'

export default class Home extends Component {

  state = {
    name: ""
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = e => {
    console.log("e: ", JSON.stringify(e))
  }

  render() {
    return (
      <div>
        <h1>Admin Page</h1>
        <p>This is an Admin area</p>
      
        <form onSubmit={this.handleSubmit} >
          <label>
            Name:
            <input type= "text" name= "name" value= {this.state.name} onChange={this.handleChange} placeholder= "name, please"
            />
            </label>
            <input type="submit" value="Submit" />
        </form>

      </div>
    )
  }
}
