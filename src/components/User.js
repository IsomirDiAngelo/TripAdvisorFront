import React, { Component } from 'react';

export class User extends Component {
  static displayName = User.name;

  constructor(props) {
      super(props);
      this.state = {id: props.id, user: undefined, loading: true}
  }

  componentDidMount() {
      this.fetchData();
  }

  static renderUser(user) {
      return (
          <div>
              <h1>Welcome, {user.username} !</h1>
              <h2>Firstname: {user.firstname}</h2>
              <h2>Lastname: {user.lastname}</h2>
              <h2>Phone: {user.phone}</h2>
              <h2>Email: {user.email}</h2>
              <h2>Street: {user.street}</h2>              
              <h2>City: {user.city}</h2>
              <h2>State: {user.state}</h2>
              <h2>ZipCode: {user.zipcode}</h2>
          </div>
          
      )
  }

  render () {
    let content = this.state.loading 
                ? <p>Loading...</p>
                : this.renderUser();
                  
    return (
      <div>
        {content}
      </div>
    );
  }

  async fetchData() {
    const response = await fetch('' + this.state.id);
    const data = await response.json();
    this.setState({ user: data, loading: false });
  }
}
