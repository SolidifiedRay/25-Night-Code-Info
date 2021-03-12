import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function Underdevelopment() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="error">你来到了什么也没有的sekai（在做了在做了</Alert>
    </div>
  );
}

export default Underdevelopment;
