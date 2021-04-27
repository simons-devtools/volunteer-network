import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import voltImg from '../../images/volt-pic.png';
import './Volunteer.css';

const Volunteer = () => {
    return (
        <div>
            <Container fluid>
                <Row className="volt-container">
                    <Col>
                        <div className="volt-sec">
                            <img src={voltImg} alt="volunteer-img" />
                            <h5>This is volunteer page</h5>
                        </div>
                    </Col>
                    <Col>
                        <div className="volt-sec">
                            <img src={voltImg} alt="volunteer-img" />
                            <h5>This is volunteer page</h5>
                        </div>
                    </Col>
                    <Col>
                        <div className="volt-sec">
                            <img src={voltImg} alt="volunteer-img" />
                            <h5>This is volunteer page</h5>
                        </div>
                    </Col>
                    <Col>
                        <div className="volt-sec">
                            <img src={voltImg} alt="volunteer-img" />
                            <h5>This is volunteer page</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Volunteer;