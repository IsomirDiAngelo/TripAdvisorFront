import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import Service from './components/Service';
import Rate from './components/Rate';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;


  render () {
    return (
      <Layout>
        <Route exact path='/' children={<Home/>} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/service:id' children={<Service/>} />
        <Route exact path='/rate:id' children={<Rate/>} />
      </Layout>
    );
  }
}
