import React from 'react';
import './Event.css';

const Event = (props) => {
    // console.log(props.events);
    const { name, imageURL } = props.events;


    return (
        <div className="volt-sec">
            <img src={imageURL} alt="volunteer-img" />
            <h5>{name}</h5>
        </div>
    );
};

export default Event;