import React from 'react';
import { Grid, Container } from '@material-ui/core';

export default function About() {
    return (
        <div className="wrapper colour">
            <Container fixed>
                <Grid container spacing={6} justify="center">
                    <Grid item xs={12} md={4}>
                        <div className="aboutPic"></div>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <div className="aboutText">
                            <h1>What I can offer</h1>
                            <p><strong>Technologies:</strong> HTML, CSS, Javascript, NodeJS, Express, MongoDB, React, Bootstrap, MaterialUI and Git.</p>
                            <p>
                            I can offer a range of services from updating existing projects to creating brand new fully responsive websites.
                            </p>
                            <p>
                            If you think I will suit a role available please don’t hesitate to contact me at <strong><a className="about-anchor" rel="noopener noreferrer" href="mailto: tjcorkhill@gmail.com" target="_blank">TJCorkhill@gmail.com</a></strong> or head over to
                            my <strong><a className="about-anchor" rel="noopener noreferrer" href="https://github.com/Tom-Corkhill" target="_blank">GitHub</a></strong> profile to see more. 
                            </p>

                            <h1 className="aboutSecondHeading">Tom Corkhill</h1>
                            <p>
                            I am searching for my first job in website development. 
                            In 2019 I travelled and worked in Australia and came back to the UK eager to find work. 
                            </p>
                            <p>
                            When the Covid-19 lockdown struck I used that time to teach myself to code, and absolutely loved it. 
                            I learnt it through a range of different courses and online tutorials. 
                            Eight months later I have built a full website for a client and have created other personal projects. 
                            These can all be viewed over on the portfolio page.  
                            </p>
                            <p>
                            I am now eager to find my first role in the industry and progress my skills further.
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
