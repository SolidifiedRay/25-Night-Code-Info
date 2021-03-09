import React from "react";
import { Link } from "react-router-dom";
import MuiAlert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
       {/* FIXME: a place holder */}
      <br/><br/><br/><br/>
      <Alert severity="info">
        <Typography variant="h6">
          看到这个关系图了吗，全都可以嗑！
        </Typography>
      </Alert>
      <br/>
      <img
        src={`${process.env.PUBLIC_URL}/images/banner.jpg`}
        alt="banner"
        style={{ width: "100%"}}
      />
      <br/><br/>
    </div>
  );
}

export default Home;