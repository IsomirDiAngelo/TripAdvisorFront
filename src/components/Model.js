import React from 'react';
import './Model.css';

function Model({id, name, city, cost}) {

    return (
        <article className="model-content">
            <h3><span className="brand">{name}</span></h3>
            <a href={'service' + id}>Click here for more details</a>
        </article>
    )
}

export default Model;