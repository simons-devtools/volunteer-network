import React from 'react';
import './Event.css';

const Event = (props) => {
    // console.log(props.volunteer);
    const { title, photo } = props.volunteer;


    return (
        <div className="volt-sec">
            <img src={photo} alt="volunteer-img" />
            <h5>{title}</h5>
        </div>
    );
};

export default Event;