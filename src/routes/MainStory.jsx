import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MuiAlert from '@material-ui/lab/Alert';

import MainStoryCard from '../components/MainStoryCard';
import { mainStoryData } from '../db/mainStoryData';

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

  return (
    <div className={classes.root}>
      <Alert severity="info">
        感谢PJS字幕组的汉化和制作！看完记得3连支持一下！
      </Alert>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {mainStoryData.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={mainStoryData.indexOf(item)}>
            <MainStoryCard
              id={item.id}
              path={item.path}
              title={item.title}
              link={item.link}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default EventsList;
