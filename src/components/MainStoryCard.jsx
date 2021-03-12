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
    height: 175,
  },
});

const redirect = (path) => {
  window.open(path);
};

function MainStoryCard({ id, path, title, link }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={process.env.PUBLIC_URL + '/images/main/' + path}
        title={id}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="h2">
          {title}
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
          主线剧情
        </Button>
      </CardActions>
    </Card>
  );
}

export default MainStoryCard;
