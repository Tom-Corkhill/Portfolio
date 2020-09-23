import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { MarkGithubIcon } from '@primer/octicons-react';

export default function Icons(props) {
const eyeIcon = <FontAwesomeIcon icon={faEye} />

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
    fontSize: "34px",
    paddingLeft: "10px",
    paddingRight: "10px",
    zIndex: 2
  },
}));


  const classes = useStyles();

  return (
      <React.Fragment>
            <IconButton href={props.viewURL} target="_blank">
                <div className={classes.icons}>
                    {eyeIcon}
                </div>
            </IconButton>
            <IconButton>
                <MarkGithubIcon className={classes.icons} size={32} href={props.gitURL} target="_blank" />
            </IconButton>
      </React.Fragment>
  );
}