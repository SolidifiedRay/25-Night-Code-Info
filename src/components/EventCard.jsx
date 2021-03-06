import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 123,
  },
});

const redirect = (path) => {
  window.open(path);
};

function EventCard({ id, path, title, subtitle, time, link }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={process.env.PUBLIC_URL + '/images/events/' + path}
        title={id}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {subtitle}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {time}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            redirect(link);
          }}
        >
          活动剧情
        </Button>
      </CardActions>
    </Card>
  );
}

export default EventCard;
