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

function Group() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="info">开发中...</Alert>
      <Alert variant="outlined" severity="info">
        目前可以查看&nbsp;
        <a
          href="https://zh.moegirl.org.cn/25%E6%97%B6%EF%BC%8C%E5%9C%A8Night_Code%E3%80%82"
          target="_blank"
          rel="noreferrer"
        >
          萌娘百科
        </a>
        &nbsp;上的介绍
      </Alert>
      <Alert variant="outlined" severity="info">
        或者查看&nbsp;
        <a
          href="https://bbs.yamibo.com/forum.php?mod=redirect&goto=findpost&ptid=514109&pid=39976980&fromuid=470380"
          target="_blank"
          rel="noreferrer"
        >
          某吃货之羊老师
        </a>
        &nbsp;的25小论文（
      </Alert>
    </div>
  );
}

export default Group;
