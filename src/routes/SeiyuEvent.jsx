import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MuiAlert from '@material-ui/lab/Alert';

import SeiyuEventCard from '../components/SeiyuEventCard';
import { seiyuEventData } from '../db/seiyuEventData';

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
        {seiyuEventData.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={seiyuEventData.indexOf(item)}>
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
