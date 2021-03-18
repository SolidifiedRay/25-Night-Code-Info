import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MuiAlert from '@material-ui/lab/Alert';

import CharaCard from '../components/CharaCard';
import { cardData } from '../db/cardData';

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
        {cardData.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={cardData.indexOf(item)}>
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
