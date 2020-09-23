import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography } from '@material-ui/core';
import PantrySorter from '../images/PantrySorter.png';
import Icons from './Icons';

export default function ProjectCardPantry() {
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  icons: {
    color: "black",
    fontSize: "36px",
  },
}));


  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
            className={classes.media}
            image={PantrySorter}
            title="The Storey Social"
        />
        <CardActions disableSpacing>
            <Grid container justify="center">
                <Grid item xs ={4}></Grid>
                <Grid item xs={4}>
                    <Icons />
                </Grid>
                <Grid item xs ={4}></Grid>  
            </Grid>
        </CardActions>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            A Social Media Consultant Portfolio
            </Typography>
        </CardContent>
    </Card>
  );
}