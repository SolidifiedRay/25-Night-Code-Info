import React from 'react';
import CharaCard from '../components/CharaCard';
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

function CardsList() {
  const classes = useStyles();

  const cardItems = [
    {
      id: 'ena4002',
      path: 'ena/4002.png',
      title: '諦めたくないから',
      subtitle: '东云绘名 - 満たされないペイルカラー（4星) ',
      prelink: 'https://www.bilibili.com/video/BV1FA411u7KM',
      postlink: 'https://www.bilibili.com/video/BV1FA411u7KM?p=2',
    },
    {
      id: 'mfy4002',
      path: 'mfy/4002.png',
      title: '投げかけた言葉',
      subtitle: '朝比奈真冬 - 満たされないペイルカラー（4星) ',
      prelink: 'https://www.bilibili.com/video/BV1zf4y1z7ZQ',
      postlink: 'https://www.bilibili.com/video/BV1zf4y1z7ZQ',
    },
    {
      id: 'knd4002',
      path: 'knd/4002.png',
      title: '想いをメロディーに……',
      subtitle: '宵崎奏 - 満たされないペイルカラー（4星) ',
      prelink: 'https://www.bilibili.com/video/BV1Jo4y1R7Tm',
      postlink: 'https://www.bilibili.com/video/BV1Jo4y1R7Tm',
    },
    {
      id: 'rin3001',
      path: 'rin/3001.png',
      title: '出会いの意味を探して',
      subtitle: '镜音铃 - 満たされないペイルカラー（3星) ',
      prelink: 'https://www.bilibili.com/video/BV1Nh411k7R5?p=3',
      postlink: 'https://www.bilibili.com/video/BV1Nh411k7R5?p=4',
    },
    {
      id: 'mzk2002',
      path: 'mzk/2002.png',
      title: 'トラスト ユー',
      subtitle: '晓山瑞希 - 満たされないペイルカラー（2星) ',
      prelink: 'https://www.bilibili.com/video/BV1Nh411k7R5',
      postlink: 'https://www.bilibili.com/video/BV1Nh411k7R5?p=2',
    },
    {
      id: 'ena4001',
      path: 'ena/4001.png',
      title: '東雲家の年末',
      subtitle: '东云绘名 - セカイのハッピーニューイヤー！（4星) ',
      prelink: 'https://www.bilibili.com/video/BV1Ko4y1o7YD',
      postlink: 'https://www.bilibili.com/video/BV1Ko4y1o7YD',
    },
    {
      id: 'mzk4001',
      path: 'mzk/4001.png',
      title: '屋上のフレンドシップ',
      subtitle: '晓山瑞希 - KAMIKOU FESTIVAL!（4星) ',
      prelink: 'https://www.bilibili.com/video/BV1fv4y1o7cn',
      postlink: 'https://www.bilibili.com/video/BV1fv4y1o7cn?p=2',
    },
    {
      id: 'mfy3002',
      path: 'mfy/3002.png',
      title: '楽しい楽しい二人三脚？',
      subtitle: '朝比奈真冬 - 走れ！体育祭！～実行委員は大忙し～（3星) ',
      prelink: 'https://www.bilibili.com/video/BV1Fa411w7eK?p=3',
      postlink: 'https://www.bilibili.com/video/BV1Fa411w7eK?p=4',
    },
    {
      id: 'mfy4001',
      path: 'mfy/4001.png',
      title: '不自由マスカレード',
      subtitle: '朝比奈真冬 - 囚われのマリオネット（4星）',
      prelink: 'https://www.bilibili.com/video/BV1br4y1w7Eh',
      postlink: 'https://www.bilibili.com/video/BV1oK4y177qr',
    },
    {
      id: 'knd4001',
      path: 'knd/4001.png',
      title: '絶たれた糸',
      subtitle: '初音未来 - 囚われのマリオネット（4星）',
      prelink: 'https://www.bilibili.com/video/BV1ga4y1s75w',
      postlink: 'https://www.bilibili.com/video/BV1354y1r7eG',
    },
    {
      id: 'miku4001',
      path: 'miku/4001.png',
      title: '生きているように',
      subtitle: '宵崎奏 - 囚われのマリオネット（4星）',
      prelink: 'https://www.bilibili.com/video/BV1zK4y177dx',
      postlink: 'https://www.bilibili.com/video/BV17V411y7d9',
    },
    {
      id: 'mzk3002',
      path: 'mzk/3002.png',
      title: '戯れのひととき',
      subtitle: '晓山瑞希 - 囚われのマリオネット（3星）',
      prelink: 'https://www.bilibili.com/video/BV1PT4y1F7u8?p=3',
      postlink: 'https://www.bilibili.com/video/BV1PT4y1F7u8?p=4',
    },
    {
      id: 'ena2002',
      path: 'ena/2002.png',
      title: 'マリオネットドレス',
      subtitle: '东云绘名 - 囚われのマリオネット（2星）',
      prelink: 'https://www.bilibili.com/video/BV1PT4y1F7u8',
      postlink: 'https://www.bilibili.com/video/BV1PT4y1F7u8?p=2',
    },
    {
      id: 'knd2001',
      path: 'knd/2001.png',
      title: '25時、ナイトコードで。',
      subtitle: '宵崎奏 - 2星卡面',
      prelink: 'https://www.bilibili.com/video/BV1Sy4y117EZ',
      postlink: 'https://www.bilibili.com/video/BV1Sy4y117EZ',
    },
    {
      id: 'mfy2001',
      path: 'mfy/2001.png',
      title: '25時、ナイトコードで。',
      subtitle: '朝比奈真冬 - 2星卡面',
      prelink: 'https://www.bilibili.com/video/BV1Sy4y117EZ',
      postlink: 'https://www.bilibili.com/video/BV1Sy4y117EZ',
    },
    {
      id: 'ena2001',
      path: 'ena/2001.png',
      title: '25時、ナイトコードで。',
      subtitle: '东云绘名 - 2星卡面',
      prelink: 'https://www.bilibili.com/video/BV1Sy4y117EZ',
      postlink: 'https://www.bilibili.com/video/BV1Sy4y117EZ',
    },
    {
      id: 'mzk2001',
      path: 'mzk/2001.png',
      title: '25時、ナイトコードで。',
      subtitle: '晓山瑞希 - 2星卡面',
      prelink: 'https://www.bilibili.com/video/BV1Sy4y117EZ',
      postlink: 'https://www.bilibili.com/video/BV1Sy4y117EZ',
    },
    {
      id: 'miku2001',
      path: 'miku/2001.png',
      title: '25時、ナイトコードで。',
      subtitle: '初音未来 - 2星卡面',
      prelink: 'https://www.bilibili.com/video/BV1Sy4y117EZ',
      postlink: 'https://www.bilibili.com/video/BV1Sy4y117EZ',
    },
    {
      id: 'knd1001',
      path: 'knd/1001.png',
      title: '音楽に愛された少女',
      subtitle: '宵崎奏 - 1星卡面',
      prelink: 'https://www.bilibili.com/video/BV1pA411H7uZ',
      postlink: 'https://www.bilibili.com/video/BV1pA411H7uZ',
    },
    {
      id: 'mfy1001',
      path: 'mfy/1001.png',
      title: '『いい子』に見られる優等生',
      subtitle: '朝比奈真冬 - 1星卡面',
      prelink: 'https://www.bilibili.com/video/BV1pA411H7uZ',
      postlink: 'https://www.bilibili.com/video/BV1pA411H7uZ',
    },
    {
      id: 'ena1001',
      path: 'ena/1001.png',
      title: 'SNS依存な絵描き',
      subtitle: '东云绘名 - 1星卡面',
      prelink: 'https://www.bilibili.com/video/BV1pA411H7uZ',
      postlink: 'https://www.bilibili.com/video/BV1pA411H7uZ',
    },
    {
      id: 'mzk1001',
      path: 'mzk/1001.png',
      title: '『カワイイ』にこだわる自由人',
      subtitle: '晓山瑞希 - 1星卡面',
      prelink: 'https://www.bilibili.com/video/BV1pA411H7uZ',
      postlink: 'https://www.bilibili.com/video/BV1pA411H7uZ',
    },
  ];

  return (
    <div className={classes.root}>
      <Alert severity="info">
        感谢所有汉化的老师！看完记得3连支持一下！如果没有卡面就是目前还没有汉化，若有遗漏欢迎补充！
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
            <CharaCard
              id={item.id}
              path={item.path}
              title={item.title}
              subtitle={item.subtitle}
              prelink={item.prelink}
              postlink={item.postlink}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CardsList;
