import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import User from '../../images/logos/users.png';
import Plus from '../../images/logos/plus.png';
import './AddEvent.css';
import axios from 'axios';

const AddEvent = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            date: data.date,
            description: data.description,
            imageURL: imageURL
        };
        const url = `http://localhost:5000/addEvent`;
        // console.log(eventData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            // .then(res => console.log('server side response', res));
    };

    const handleImageUpload = (event) => {
        // console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '7d2598c0cf9adb7c67d11745142e540b');
        imageData.append('image', event.target.files[0])

        // Send a POST request
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                // console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <Container className="addEvent-container">
            <div className="side-bar">
                <div>
                    <img src={User} alt="user-alt" style={{ height: '20px', marginLeft: '12px' }} />
                    <span className="px-2">Volunteer register list</span>
                </div>
                <div>
                    <p style={{ color: 'blue', cursor: 'pointer', marginTop: '15px' }}>
                        <img src={Plus} alt="add-alt" style={{ height: '20px', marginLeft: '12px' }} />
                        <span>add event</span>
                    </p>
                </div>
            </div>

            <div className="pannel-out">
                <div className="pannel-in">
                    <h3>Add your events below</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p>
                            <input type="name" defaultValue="Event Name" {...register("name")} className="mr-5" />
                            <input type="date" {...register("date", { required: true })} />
                        </p>
                        <p>
                            <textarea type="text" defaultValue="Enter Description. . ." {...register("description")} style={{ padding: '30px 10px', width: '415px' }} />
                        </p>
                        <p>
                            <input type="file" onChange={handleImageUpload} />
                            <input type="submit" style={{ padding: '0 30px' }} />
                        </p>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default AddEvent;