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
                            <h1>TJC Webdev / How Can I Help You?</h1>
                            <p>
                                I can help you with all your website needs. From changing content on an existing
                                website to creating a new, fully responsive website.
                            </p>
                            <p>
                                <strong>Head on over to the Contact page to get in touch today!</strong>
                            </p>

                            <h1 className="aboutSecondHeading">Tom Corkhill</h1>
                            <p>
                            I am searching for my first job in website development. 
                            In 2019 I travelled and worked in Australia and came back to the UK eager to find work, however confused about what industry to go into. 
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
