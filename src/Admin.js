import React, { Component } from 'react'

async function checkUserOnInternet(user) {
  const response = await fetch(`https://api.github.com/users/${user}`)
  const data = await response.json()
  console.log("data: ", data)
  return(data)
}

export default class Home extends Component {
  state = {
    name: "",
    userName: ""
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
    checkUserOnInternet(userReceived)
      .then(res => this.setState({userName: res.name}))
      // .then(res => console.log("userName is ", res.name))
  }

  render() {
    return (
      <div>
        <h1>Admin Page</h1>
        <p>This is an Admin area</p>
      
        <form onSubmit={this.handleSubmit} >
          <label>
            Name:
            <input type= "text" name= "name" value="tonykieling" onChange={this.handleChange} placeholder= "name, please"
            />
            </label>
            <input type="submit" value="Submit" />
        </form>

        {(this.state.userName) ?
          <h3>{this.state.userName}</h3> :
          <h3>No name for awhile</h3>
          }

      </div>
    )
  }
}
