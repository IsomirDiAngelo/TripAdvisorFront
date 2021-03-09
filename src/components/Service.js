import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/* export class ServiceComponent extends Component {
  static displayName = Service.name;

  constructor(props) {
      super(props);
      this.state = {id: 0, destination: undefined, loading: true}
  }

  componentDidMount() {
      this.fetchData();
  }

  static renderDestination(destination) {
      return (
          <div>
              <h1>{destination.name}</h1>
              <h2>City: {destination.city}</h2>
              <h2>Phone: {destination.phone}</h2>
              <h2>Web: <a href={destination.website}></a></h2>
              <h2>Type: {destination.type}</h2>
              <h2>Cost: {destination.cost}</h2>
          </div>
          
      )
  }

  render () {
    let content = this.state.loading 
                ? <p>Loading...</p>
                : this.renderDestination();
                  
    return (
      <div>
        {content}
        <br/>
        <label>Give this destination a rating!</label>
        <br/>
        <a href='rate'>Click here</a>
      </div>
    );
  }

  async fetchData() {
    const response = await fetch('' + this.state.id);
    const data = await response.json();
    this.setState({ destination: data, loading: false });
  }
} */

function Service() {

  let { id } = useParams();
  let [service, setService] = useState([]);

  useEffect(() => fetch('https://localhost:44324/services/1', { method: 'GET', mode: 'cors'})
    .then(response => response.json())
    .then(json => { setService(json); console.log(service); })
  , []);

  /* useEffect(() => {
    let newService = new Object();
    newService.name = 'Test1';
    newService.city = 'Test1';
    newService.phone = 4;
    newService.website = 'www.google.com';
    newService.type = 'Camping';
    newService.cost = 50;
    setService(newService);
  }, []); */
  
  if (service !== []) {
    return(
      <div>
        <h1>{service.serviceName}</h1>
        <h2>City: {service.serviceCity}</h2>
        <h2>Phone: {service.servicePhone}</h2>
        <h2>Web: <a href={'https://'+service.website}>{service.website}</a></h2>
        <h2>Type: {service.type}</h2>
        <h2>Cost: {service.cost}</h2>
        <br/>
        <a href={'rate'+id}>Give this service a rating!</a>
        <br/>
    </div>
    )
  }
  else {
    return(
      <div>
        <h1>Error 404 : Service was not found</h1>
      </div>
    )
  }

  
}

export default Service;