import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import ProjectCardSocial from './ProjectCardSocial';

import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';

export default function Portfolio() {

    const { cards } = useContext(GlobalContext);

    return (
        <div className="wrapper colour">
            <Container maxWidth="lg">
                <h1 className="portfolioTitle">My Work</h1>
                <h3 className="portfolioSubtitle">Hover over the boxes to view more</h3>
                <Grid container spacing={3} justify="center">
                    {cards.map((card) => 
                        <Grid key={card.title} item xs={12} md={4}>
                            <ProjectCardSocial 
                            title={card.title} 
                            image={card.image} 
                            content={card.content} 
                            viewURL={card.viewURL} 
                            gitURL={card.gitURL}
                            sliderDesc={card.sliderDesc}
                            languages={card.languages}
                            />

                        </Grid>
                    )}
                </Grid>
            </Container>
        </div>
    );
  }