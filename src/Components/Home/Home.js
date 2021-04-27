import React from 'react';
import { Col, Container, Row, TabContainer } from 'react-bootstrap';
import './Home.css';
import Background from '../../images/bg-banner.png';
import Volunteer from '../Volunteer/Volunteer';

const Home = () => {
    return (
        <div className="main">
            <Container>
                <Row>
                    <Col>
                        <div className="welcome-sec">
                            <h1>Hello! everybody...</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam placeat a ab eligendi error, quam repellat aliquam dignissimos tempore write, beatae, quam repellat aliquam dignissimos tempore aum, beatae, quam repellat aliquam dignissimos tempore text, beatae, buam repellat aliquam dignissimos tempore dance, beatae, incidunt animi illo facilis.</p>
                            <button className="simple-btn">Get Start</button>
                            <button className="simple-btn">Lern More</button>
                        </div>
                    </Col>
                    <Col>
                        <div className="welcome-sec">
                            <img className="bg-banner" src={Background} alt="bg-banner" />
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <div className="text-center mt-5 pt-5 search">
                            <h2>WE GROW BY HELPING PEOPLE IN NEED</h2>
                            <input type="text" placeholder="type something. . ." className="search-control" />
                            <input type="submit" value="Search" />
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="mt-5">
                <Volunteer></Volunteer>
            </div>
        </div>
    );
};

export default Home;