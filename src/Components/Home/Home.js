import React from 'react';
import { Container } from 'react-bootstrap';
import Volunteer from '../Event/Event';
import './Home.css';

const Home = () => {
    const volunteers = [
        { id: 'jhdfbjb533', title: 'volunteers number one', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj6E5pxGLLI-HF_FxmSWZ9Y9VdLJiCWmOzNQ&usqp=CAU' },
        { id: 'vhghfh1154', title: 'volunteers number two', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbt7OZPEKj-_lNdboZS7a1nru96C1tvQOG1Q&usqp=CAU' },
        { id: 'hgchvc5445', title: 'volunteers number three', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGUdqehH5TVfEeeg-Php9okgC0GcMRqGbWQ&usqp=CAU' },
        { id: 'hgefgh3216', title: 'volunteers number four', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-9uPYT-bP0_jdeb0yQ5MHTSDA9CWIzL2UQ&usqp=CAU' },
        { id: 'gwfyg35417', title: 'volunteers number five', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5Yju-7WYl7ANDBSnuGYxxenLIOnNFZSNZw&usqp=CAU' },
        { id: 'dfvh154565', title: 'volunteers number one', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj6E5pxGLLI-HF_FxmSWZ9Y9VdLJiCWmOzNQ&usqp=CAU' },
        { id: 'nbvch32158', title: 'volunteers number two', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbt7OZPEKj-_lNdboZS7a1nru96C1tvQOG1Q&usqp=CAU' },
        { id: 'bnvd546237', title: 'volunteers number three', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGUdqehH5TVfEeeg-Php9okgC0GcMRqGbWQ&usqp=CAU' },
        { id: 'bfhjdc3322', title: 'volunteers number four', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-9uPYT-bP0_jdeb0yQ5MHTSDA9CWIzL2UQ&usqp=CAU' },
        { id: 'hyeffr87f5', title: 'volunteers number five', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5Yju-7WYl7ANDBSnuGYxxenLIOnNFZSNZw&usqp=CAU' }
    ];

    return (
        <Container>
            <div className="text-center mt-5 search">
                <h2>WE GROW BY HELPING PEOPLE IN NEED</h2>
                <input type="text" placeholder="type something. . ." className="search-control" />
                <input type="submit" value="Search" />
            </div>

            <div className="event-container">
                {
                    volunteers.map(volt => <Volunteer volunteer={volt} key={volt.id} />)
                }
            </div>
        </Container>
    );
};

export default Home;