import React from 'react';
import RadioCard from '../components/RadioCard';
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

function Radio() {
  const classes = useStyles();

  const cardItems = [
    {
      id: 'radio010',
      path: '010.png',
      title: '「25时，于夜之电台。」#10 ',
      subtitle: '田边留依 x 铃木实里',
      link: 'https://www.bilibili.com/video/BV1R5411A75n',
    },
    {
      id: 'radio009',
      path: '009.png',
      title: '「25时，于夜之电台。」#9 ',
      subtitle: '田边留依 x 铃木实里',
      link: 'https://www.bilibili.com/video/BV1qp4y1n7Dy',
    },
    {
      id: 'radio008',
      path: '008.png',
      title: '「25时，于夜之电台。」#8 ',
      subtitle: '楠木灯 x 田边留依 x 铃木实里 x 佐藤日向',
      link: 'https://www.bilibili.com/video/BV1GU4y1x7QJ',
    },
    {
      id: 'radio007',
      path: '007.png',
      title: '「25时，于夜之电台。」#7 ',
      subtitle: '铃木实里 × 佐藤日向',
      link: 'https://www.bilibili.com/video/BV17t4y167fb',
    },
    {
      id: 'radio006',
      path: '006.png',
      title: '「25时，于夜之电台。」#6 ',
      subtitle: '佐藤日向 × 楠木灯',
      link: 'https://www.bilibili.com/video/BV18y4y1v78g',
    },
    {
      id: 'radio005',
      path: '005.png',
      title: '「25时，于夜之电台。」#5 ',
      subtitle: '佐藤日向 × 楠木灯',
      link: 'https://www.bilibili.com/video/BV1v5411H7ub',
    },
    {
      id: 'radio004',
      path: '004.png',
      title: '「25时，于夜之电台。」#4 ',
      subtitle: '田边留依 x 铃木实里',
      link: 'https://www.bilibili.com/video/BV1qi4y1c7nQ',
    },
    {
      id: 'radio003',
      path: '003.png',
      title: '「25时，于夜之电台。」#3 ',
      subtitle: '田边留依 x 铃木实里',
      link: 'https://www.bilibili.com/video/BV1DK4y1j7FS',
    },
    {
      id: 'radio002',
      path: '002.png',
      title: '「25时，于夜之电台。」#2 ',
      subtitle: '佐藤日向 x 铃木实里',
      link: 'https://www.bilibili.com/video/BV1ct4y1v7yE',
    },
    {
      id: 'radio001',
      path: '001.png',
      title: '「25时，于夜之电台。」#1 ',
      subtitle: '佐藤日向 x 铃木实里',
      link: 'https://www.bilibili.com/video/BV1pp4y167LJ',
    },
  ];

  return (
    <div className={classes.root}>
      <Alert severity="info">
        感谢PJS字幕组的中文字幕和制作！看完记得3连支持一下！（一起来赞美L老师的后期吧）
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
            <RadioCard
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

export default Radio;
