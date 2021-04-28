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
        <div>
            <div className="volt-sec">
                <img src={imageURL} alt="volunteer-img" className="event-img" />
                <div className="">
                    <p className="head-line">{name} <img onClick={() => deleteEvent(_id)} src={Trush} alt="Trush-icon" /></p>
                    <img onClick={() => updateEvent(_id)} src={PlusAlt} className="plush" alt="plus-alt" />
                </div>
            </div>
        </div>
    );
};

export default Event;