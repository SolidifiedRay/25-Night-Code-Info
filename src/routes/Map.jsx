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

function Map() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="info">开发中...</Alert>
      <Alert variant="outlined" severity="info">
        目前可以查看L老师整理的&nbsp;
        <a
          href="https://s.weibo.com/weibo?q=%2325%E6%97%B6%E5%9C%B0%E5%9B%BE%E5%B0%8F%E5%AF%B9%E8%AF%9D%23&from=default"
          target="_blank"
          rel="noreferrer"
        >
          25时地图小对话
        </a>
      </Alert>
    </div>
  );
}

export default Map;
