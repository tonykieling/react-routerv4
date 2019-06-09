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
    userLogin: "",
    userLocation: "",
    userPublicRepos: "",
    userCompany: "",
    userAvatarURL: "",
    checkboxActive: true
  }

  handleChange = e => {
      this.setState({
        name: e.target.value
      })
  }

  handleSubmit = e => {
    e.preventDefault()
    const userReceived = e.target.name.value
    if (!userReceived)
      alert("Please, inform a name to query on github's database")
    else
      checkUserOnInternet(userReceived)
        .then(res => this.setState({
          userName: res.name || "empty",
          userLogin: res.login || "empty",
          userPublicRepos: res.public_repos || "empty",
          userCompany: res.company || "empty",
          userAvatarURL: res.avatar_url || "empty",
          userLocation: res.location || "empty"}))
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
              onChange={this.handleChange} checked={this.state.name === "torvalds"}/>
              torvalds<br/>
            <input 
              type="radio" id="tonykieling" value="tonykieling" name="user" 
              onChange={this.handleChange} checked={this.state.name === "tonykieling"}/>
              tonykieling<br/>
            <input 
              type="radio" id="billgates" value="billgates" name="user" 
              onChange={this.handleChange} checked={this.state.name === "billgates"}/>
              billgates<br/>
            <input 
              type="radio" id="fabpot" value="fabpot" name="user" 
              onChange={this.handleChange} checked={this.state.name === "fabpot"}/>
              fabpot<br/>
            <input 
              type="radio" id="richard-stallman" value="richard-stallman" name="user" 
              onChange={this.handleChange} checked={this.state.name === "richard-stallman"}/>
              richard-stallman<br/>
          </label>
            <input type="submit" value="Submit" />
        </form>

        {(this.state.userName) ?
          <div>
            <h3>Name: { this.state.userName }</h3>
            <h3>Login: { this.state.userLogin }</h3>
            <img src={this.state.userAvatarURL} alt="avatar" width="70"/>
            <h3>Location: { this.state.userLocation }</h3>
            <h3>Company: { this.state.userCompany}</h3>
            <h3>Public Repos: { this.state.userPublicRepos }</h3>
          </div> :
          <h3>No name for awhile</h3>
          }

      </div>
    )
  }
}
