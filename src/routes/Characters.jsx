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

function Characters() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="info">开发中... 下面的链接为萌娘百科上的角色介绍</Alert>

      <Alert variant="outlined" severity="info">
        <a
          href="https://zh.moegirl.org.cn/%E5%AE%B5%E5%B4%8E%E5%A5%8F"
          target="_blank"
          rel="noreferrer"
        >
          宵崎奏
        </a>
      </Alert>
      <Alert variant="outlined" severity="info">
        <a
          href="https://zh.moegirl.org.cn/%E6%9C%9D%E6%AF%94%E5%A5%88%E7%9C%9F%E5%86%AC"
          target="_blank"
          rel="noreferrer"
        >
          朝比奈真冬
        </a>
      </Alert>
      <Alert variant="outlined" severity="info">
        <a
          href="https://zh.moegirl.org.cn/%E4%B8%9C%E4%BA%91%E7%BB%98%E5%90%8D"
          target="_blank"
          rel="noreferrer"
        >
          東雲繪名
        </a>
      </Alert>
      <Alert variant="outlined" severity="info">
        <a
          href="https://zh.moegirl.org.cn/%E6%99%93%E5%B1%B1%E7%91%9E%E5%B8%8C"
          target="_blank"
          rel="noreferrer"
        >
          晓山瑞希
        </a>
      </Alert>
    </div>
  );
}

export default Characters;
