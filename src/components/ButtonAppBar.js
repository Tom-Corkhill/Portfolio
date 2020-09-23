import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

export default function ButtonAppBar() {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          backgroundColor: 'black'
        },
        menuButton: {
          marginLeft: theme.spacing(2),
          color: 'white'
        },
        title: {
          flexGrow: 1,
        },
      }));

    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.root} position="static">
                <Container fixed>
                    <Toolbar>

                        <Link to="/">
                        <Button color="inherit" className={classes.menuButton}>
                            Home
                        </Button>
                        </Link>

                        <Link to="/about">
                        <Button color="inherit" className={classes.menuButton}>
                            About
                        </Button>
                        </Link>

                        <Link to="/portfolio">
                        <Button color="inherit" className={classes.menuButton}>
                            Portfolio
                        </Button>
                        </Link>

                        {/* <Link to="/contact">
                        <Button color="inherit" className={classes.menuButton}>
                            Contact
                        </Button>
                        </Link> */}

                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}
