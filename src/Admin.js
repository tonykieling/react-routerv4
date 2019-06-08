import React, { Component } from 'react'

async function checkUserOnInternet(user) {
  let response = await fetch(`https://api.github.com/users/${user}`)
      // .then(response => response.json())
  let data = await response.json()
  console.log("data: ", data)
  return(data)
}

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
    e.preventDefault()
    console.log("e: ", e.target.name.value)
    const userReceived = e.target.name.value
    let x = checkUserOnInternet(userReceived)
      .then(console.log)
    // console.log("x: ", x)
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
