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
                                In 2019 I travelled and worked my way around Australia, and have come back to the UK
                                eager to find work in web development.
                            </p>
                            <p>During the Covid-19 lockdown at the start of 2020, I taught myself web development.
                                Flash forward 8 months and I have built a full website for a client, as well as having
                                a number of personal projects under my belt.
                            </p>
                            <p>
                                <strong>All of my work can be viewed over on the Portfolio page</strong>
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
