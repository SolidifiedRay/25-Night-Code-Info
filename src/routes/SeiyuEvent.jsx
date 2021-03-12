import React from 'react';
import SeiyuEventCard from '../components/SeiyuEventCard';
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

function SeiyuEvent() {
  const classes = useStyles();

  const cardItems = [
    {
      id: 'seiyu001',
      path: '003.png',
      title: 'プロセカアフタートーク 満たされないペイルカラー編0',
      subtitle: '铃木实里',
      link: 'https://www.bilibili.com/video/BV18A411K7De',
    },
    {
      id: 'seiyu002',
      path: '002.png',
      title: 'プロセカストーリーシアター 25時、ナイトコードで。編',
      subtitle: '铃木实里 x 佐藤日向',
      link: 'https://www.bilibili.com/video/BV1Ab4y1R775',
    },
    {
      id: 'seiyu001',
      path: '001.png',
      title: 'プロジェクトセカイ ワンダショちゃんねる #4',
      subtitle: '铃木实里',
      link: 'https://www.bilibili.com/video/BV1Wv4y1f7Sx',
    },
  ];

  return (
    <div className={classes.root}>
      <Alert severity="info">注意：基本都是生肉搬运</Alert>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {cardItems.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={cardItems.indexOf(item)}>
            <SeiyuEventCard
              id={item.id}
              path={item.path}
              title={item.title}
              subtitle={item.subtitle}
              link={item.link}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default SeiyuEvent;
