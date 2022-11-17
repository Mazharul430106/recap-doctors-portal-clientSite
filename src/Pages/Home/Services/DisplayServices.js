import React from 'react';

const DisplayServices = ({ service }) => {
    const {image, name , desc} = service;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{desc}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default DisplayServices;