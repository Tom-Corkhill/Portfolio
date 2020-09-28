import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MarkGithubIcon } from '@primer/octicons-react';
// import { ImLinkedin } from 'react-icons/im';
import video from '../images/LogoVid2.mp4';
 
export default function ButtonAppBar() {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          backgroundColor: '#22679e',
          height: 110,
          textDecoration: 'none',
          zIndex: 1
        },
        menuButton: {
          marginLeft: 5,
          color: 'white',
          textDecoration: 'none',
          fontSize: 17,
          padding: 20,
          marginTop: 20
        },
        homeButton: {
            marginLeft: 700,
            color: 'white',
            textDecoration: 'none',
            fontSize: 17,
            padding: 20,
            marginTop: 20
        },
        toolbar: {
          display: 'flex',
          justifyContent: 'center',
          textDecoration: 'none',
          alignItems: 'center',
          zIndex: 1,
        },
        icons: {
            height: 40,
            width: 40,
            color: 'white',
            marginTop: 14,
            marginLeft: 10
        },
        icon: {
            fontSize: 40,
            color: 'white',
            zIndex: 5
        }
      }));

    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.root} position="static">
                <Container fixed>
                    <Toolbar className={classes.toolbar}>

                        <Link to="/">
                            <video id="logoVideo" muted loop autoPlay>
                                <source src={video} type="video/mp4" />
                            </video>
                        </Link>

                        <Link to="/">
                        <Button color="inherit" className={classes.homeButton}>
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

                        <IconButton className={classes.icons} href="https://github.com/Tom-Corkhill" target="_blank" >
                            <MarkGithubIcon size={36}  />
                        </IconButton>
                        



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
