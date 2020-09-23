import React from 'react';
import Container from '@material-ui/core/Container';

export default function Contact() {

    return (
        <div className="wrapper position colour">
            <Container fixed>
                <h1>CONTACT</h1>
                <p>Lets work together!</p>
                <form>
                    <input className='formLayout' type="text" name="Name" placeholder="Name" required></input>
                    <input className='formLayout' type="email" name="email" placeholder="Enter Email" required></input>
                    <textarea className='formMessage' name="message" placeholder="Your Message" rows="10" cols="30" required></textarea>
                    <button className="formButton">Submit</button>
                </form>
            </Container>
        </div>
    )
}
