import React, { Component } from 'react';

export default class Auth extends Component {
  constructor() {
    super() 

    this.state = {
      username: '',
      password: ''
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type='text' onChange={ this.handleUsernameChange } />
        <input type='text' onChange={ this.handlePasswordChange } />
        <button>Login</button>
        <button>Register</button>
      </div>
    )
  }
}