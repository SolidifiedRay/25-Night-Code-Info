import React from "react";
import MuiAlert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';

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
          看到这个关系图了吗，全都可以嗑
      </Alert>
      <br/>
      <img
        src={`${process.env.PUBLIC_URL}/images/banner.jpg`}
        alt="banner"
        style={{ width: "100%"}}
      />
      <Divider />
      <Grid container spacing={2}>
        <Grid item>
          <a
            href="https://github.com/SolidifiedRay/25-Night-Code-Info"
            target="_blank"
          >
            <GitHubIcon fontSize="small" /> 源码
          </a>
        </Grid>
        <Grid item></Grid>
        <Grid item>
          <a
            href="https://weibo.com/6209419972/profile?topnav=1&wvr=6"
            target="_blank"
          >
            <MailIcon fontSize="small" /> 联系我（微博）
          </a>
        </Grid>
      </Grid>
      <br/><br/>
    </div>
  );
}

export default Home;