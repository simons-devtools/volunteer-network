import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddEvent.css';

const AddEvent = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Container>
            <div className="mt-5">
                <h3>Add your events below</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue="events name" {...register("example")} />
                    <input defaultValue="author name" {...register("exampleRequired", { required: true })} />
                    <input type="submit" />
                </form>
            </div>
        </Container>
    );
};

export default AddEvent;