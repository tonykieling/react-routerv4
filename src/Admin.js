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
    userName: "",
    checkboxActive: ""
  }

  handleChange = e => {
    // console.log(e.target)
    if(e.target.name === "name"){
      console.log("e.target.name === 'name'")
      this.setState({
        checkboxActive: false,
        name: e.target.value
      })
    } else {
      console.log("checbox value", e.target.value)
      if(e.target.value === this.state.name){
        console.log("==========")
        e.target.checked = true
      }
      this.setState({
        name: e.target.value,
        checkboxActive: true
      })
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    // console.log("e: ", e.target.name.name)
    const userReceived = e.target.name.value
    checkUserOnInternet(userReceived)
      .then(res => this.setState({userName: res.name || res.login}))
  }

  render() {
    return (
      <div>
        <h1>Admin Page</h1>
        <form onSubmit={this.handleSubmit} >
          <label>
            Name:
            <input type="text" name="name" value={this.state.name}
                    onChange={this.handleChange} placeholder="name, please" disabled={this.checkboxActive}
            /> <br />
            <input 
              type="radio" id="torvalds" value="torvalds" name="user" 
              onChange={this.handleChange} />
              torvalds<br/>
            <input 
              type="radio" id="tonykieling" value="tonykieling" name="user" 
              onChange={this.handleChange} />
              tonykieling<br/>
            <input 
              type="radio" id="billgates" value="billgates" name="user" 
              onChange={this.handleChange} />
              billgates<br/>
          </label>
            <input type="submit" value="Submit" />
        </form>

        {(this.state.userName) ?
          <h3>{ this.state.userName }</h3> :
          <h3>No name for awhile</h3>
          }

      </div>
    )
  }
}
