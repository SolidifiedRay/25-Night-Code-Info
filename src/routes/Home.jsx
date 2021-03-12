import React from "react";
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

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert severity="info">
          看到这个关系图了吗，全都可以嗑
      </Alert>
      <br/>
      <img
        src={`${process.env.PUBLIC_URL}/images/banner_cn.jpg`}
        alt="banner"
        style={{ width: "100%"}}
      />
      <br/><br/>
    </div>
  );
}

export default Home;