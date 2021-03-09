import React, { Component } from 'react';

export class Register extends Component {
  static displayName = Register.name;

  render () {
    return (
      <div>
        <div>
            <label>Username</label>
            <input type="text" className="form-control search-filter"/>
        </div>
        <div>
            <label>Firstname</label>
            <input type="text" className="form-control search-filter"/>
        </div>
        <div>
            <label>Lastname</label>
            <input type="text" className="form-control search-filter"/>
        </div>
        <div>
            <label>Phone</label>
            <input type="text" className="form-control search-filter"/>
        </div>
        <div>
            <label>Email</label>
            <input type="text" className="form-control search-filter"/>
        </div>
        <div>
            <label>Street</label>
            <input type="text" className="form-control search-filter"/>
        </div>
        <div>
            <label>City</label>
            <input type="text" className="form-control search-filter"/>
        </div>
        <div>
            <label>State</label>
            <input type="text" className="form-control search-filter"/>
        </div>
        <div>
            <label>ZipCode</label>
            <input type="text" className="form-control search-filter"/>
        </div>
        <br/>
        <button>Register</button>
      </div>
    );
  }
}
