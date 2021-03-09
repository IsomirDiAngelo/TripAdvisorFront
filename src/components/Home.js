import React, { useState, useEffect } from 'react';
import Model from './Model';
import '../custom.css'

function Home() {
  let [services, setServices] = useState([]);

  useEffect(() => fetch('https://localhost:44324/services/', { method: 'GET' })
    .then(response => response.json())
    .then(json => setServices([json])), []);

  useEffect(() => {
    let newService = new Object();
    newService.serviceId = 1;
    newService.serviceName = 'Test1';
    newService.serviceCity = 'Test1';
    newService.servicePhone = 4;
    newService.website = 'www.google.com';
    newService.type = 'Camping';
    newService.cost = 50;
    let newService2 = new Object();
    newService2.serviceId = 2;
    newService2.serviceName = 'Test2';
    newService2.serviceCity = 'Test1';
    newService2.servicePhone = 4;
    newService2.website = 'www.google.com';
    newService2.type = 'Camping';
    newService2.cost = 50;
    setServices([newService, newService2, newService, newService, newService, newService, newService, newService, newService]);
  }, []);

  const servicesElements = services.map(service => <Model id={service.serviceId} name={service.serviceName} city={service.serviceCity} cost={service.serviceCost}/>)

  return (
    <div className='app-content'>
      <h1>Ever dreamt of visiting new places? We have a bunch of places you need to discover!</h1>
      {servicesElements}
    </div>
  )
}


export default Home;

  