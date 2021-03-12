import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';

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
      <Typography variant="h5">欢迎来到本站！</Typography>
      <Divider />
      <Typography component="div">
        <Box textAlign="justify" m={1}>
          25人你好。本站整理了25时相关的各种资源（虽然目前还没整理完），请随意食用。
          <br />
          本站只整理了视频链接，并未直接使用任何内容，因此没有专门去要授权，若有不妥之后会进行修改。
          <br />
          在此感谢各位汉化和制作视频的老师们！请大家可以的话尽量都三连支持一下他们！
          <br />
          如果有什么问题或者建议都欢迎戳下方链接联系我！谢谢！
          <br />
          （如果宁疑惑为啥本站和sekai
          viewer长得一样，是因为我们有相同类型的替身（划掉)，用了同款的UI组件material-ui，
          如果宁有兴趣也可以点下方的链接查看源码，如果还有兴趣一起开发那就更好了！）
          <br />
        </Box>
      </Typography>
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
      <br />
      <br />
    </div>
  );
}

export default Home;
