import React from 'react';
import Trush from '../../images/logos/trash.png';
import PlusAlt from '../../images/logos/plus.png';
import './Event.css';

const Event = (props) => {
    const { _id, name, imageURL } = props.events;

    // Update event handler
    const updateEvent = (event) => {
        console.log('ID NO=', event);
        // Please create the back-end link...
    }

    // Delete event handler
    const deleteEvent = (event) => {
        console.log('ID NO=', event);
        // For the deleted func here...
    }

    return (
        <div className="events-sec">
            <div className="event">
                <img src={imageURL} className="event-img" alt="volunteer-img" />
                <h5 className="event-title">{name}</h5>
            </div>
            <div className="event-hover">
                <img onClick={() => updateEvent(_id)} src={PlusAlt} className="plush" alt="plus-alt" />
                <img onClick={() => deleteEvent(_id)} src={Trush} className="trush" alt="Trush-icon" />
            </div>
        </div>
    );
};

export default Event;