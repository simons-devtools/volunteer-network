import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Volunteer from '../Event/Event';
import './Home.css';

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <Container>
            <div className="text-center mt-5 search">
                <h2>WE GROW BY HELPING PEOPLE IN NEED</h2>
                <input type="text" placeholder="type something. . ." className="search-control" />
                <input type="submit" value="Search" />
            </div>

            <div className="event-container">
                {
                    events.map(event => <Volunteer events={event} key={event._id} />)
                }
            </div>
        </Container>
    );
};

export default Home;