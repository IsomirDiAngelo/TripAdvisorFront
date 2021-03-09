import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Rate() {
    
    let { id } = useParams();
    let [response, setResponse] = useState(new Object());
    let [service, setService] = useState(undefined);

    useEffect(() => fetch('' + id)
        .then(response => response.json())
        .then(json => setService(json))
    , []);

    useEffect(() => {
        let newService = new Object();
        newService.name = 'Test1';
        newService.city = 'Test1';
        newService.phone = 4;
        newService.website = 'www.google.com';
        newService.type = 'Camping';
        newService.cost = 50;
        setService(newService);
    }, []);

    if (service !== undefined) {
        return(
            <div>
                <h1>Write a review for {service.name}</h1>
                <div>
                    <label>Username</label>
                    <input 
                        type="text"
                        onChange={event => 
                        {
                            let newResponse = response;
                            newResponse.username = event.target.value;
                            setResponse(response);
                        }} />
                </div>
                <div>
                    <label>Write a comment!</label>
                    <input 
                        type="text"
                        onChange={event => 
                        {
                            let newResponse = response;
                            newResponse.comment = event.target.value;
                            setResponse(response);
                        }} />
                </div>
                <div>
                    <label>Give {service.name} a rating!</label>
                    <select 
                        onChange={event => 
                            {
                                let newResponse = response;
                                newResponse.rating = event.target.value;
                                setResponse(response);
                            }}>
                        <option value="1">Very bad</option>
                        <option value="2">Bad</option>
                        <option value="3">Neutral</option>
                        <option value="4">Good</option>
                        <option value="5">Great</option>
                    </select>
                </div>
                <button onClick={fetch('')}>Submit</button>
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

export default Rate;