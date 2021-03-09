import React, { Component } from 'react';

export class Login extends Component {
  static displayName = Login.name;

  render () {
    return (
      <div>
        <div>
            <label>Username</label>
            <input type="text"/>
        </div>
        <br/>
        <button>Login</button>
      </div>
    );
  }
}
