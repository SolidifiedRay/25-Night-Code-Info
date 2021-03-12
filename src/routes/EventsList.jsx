import React from 'react';
import EventCard from '../components/EventCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function EventsList() {
  const classes = useStyles();

  const cardItems = [
    {
      id: '20210218',
      path: '20210218.png',
      title: '満たされないペイルカラー',
      subtitle: '团活',
      time: '2021/2/18 ~ 2021/2/26',
      link: 'https://www.bilibili.com/video/BV155411E75N',
    },
    {
      id: '20201231',
      path: '20201231.png',
      title: 'セカイのハッピーニューイヤー！',
      subtitle: '2021新年活动：全员',
      time: '2020/12/31 ~ 2021/1/8',
      link: 'https://www.bilibili.com/video/BV12p4y1B7ZS',
    },
    {
      id: '20201210',
      path: '20201210.png',
      title: 'KAMIKOU FESTIVAL！',
      subtitle: '混活：晓山瑞希',
      time: '2020/12/10 ~ 2020/10/18',
      link: 'https://www.bilibili.com/video/BV1gf4y1e76V',
    },
    {
      id: '20201109',
      path: '20201109.png',
      title: '走れ！体育祭！～実行委員は大忙し～',
      subtitle: '混活：朝比奈真冬',
      time: '2020/11/9 ~ 2020/11/17',
      link: 'https://www.bilibili.com/video/BV1Vz4y1y7aM',
    },
    {
      id: '20201020',
      path: '20201020.png',
      title: '囚われのマリオネット',
      subtitle: '团活',
      time: '2020/10/20 ~ 2020/10/29',
      link: 'https://www.bilibili.com/video/BV1ut4y1e7Aa',
    },
  ];

  return (
    <div className={classes.root}>
      <Alert severity="info">
        感谢PJS字幕组的汉化和制作！看完记得3连支持一下！没列出来的就是目前还没有汉化，若有遗漏欢迎补充！
      </Alert>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {cardItems.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={cardItems.indexOf(item)}>
            <EventCard
              id={item.id}
              path={item.path}
              title={item.title}
              subtitle={item.subtitle}
              time={item.time}
              link={item.link}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default EventsList;
