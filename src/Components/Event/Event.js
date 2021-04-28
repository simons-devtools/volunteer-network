import React from 'react';
import Trush from '../../images/logos/trash.png';
import './Event.css';

const Event = (props) => {
    const { _id, name, imageURL } = props.events;

    const deleteEvent = (event) => {
        console.log('ID NO=', event);
    }

    return (
        <div className="volt-sec">
            <img src={imageURL} alt="volunteer-img" />
            <p>{name} <img onClick={() => deleteEvent(_id)} src={Trush} alt="Trush-icon" /></p>
        </div>
    );
};

export default Event;