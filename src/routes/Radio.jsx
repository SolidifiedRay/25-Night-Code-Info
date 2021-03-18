import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MuiAlert from '@material-ui/lab/Alert';

import RadioCard from '../components/RadioCard';
import { radioData } from '../db/radioData';

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
        {radioData.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={radioData.indexOf(item)}>
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
