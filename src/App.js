import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PersonIcon from '@material-ui/icons/Person';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import ForumIcon from '@material-ui/icons/Forum';
import ChatIcon from '@material-ui/icons/Chat';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import RadioIcon from '@material-ui/icons/Radio';
import LanguageIcon from '@material-ui/icons/Language';

import Home from './routes/Home';
import About from './routes/About';
import Group from './routes/Group';
import Characters from './routes/Characters';
import CardsList from './routes/CardsList';
import EventsList from './routes/EventsList';
import MainStory from './routes/MainStory';
import Map from './routes/Map';
import Festival from './routes/Festival';
import Live from './routes/Live';
import Radio from './routes/Radio';
import SeiyuEvent from './routes/SeiyuEvent';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const scrollStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = scrollStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function App(props) {
  const commonItemList = [
    {
      text: '首页',
      icon: <HomeIcon />,
      path: '/',
    },
    {
      text: '关于',
      icon: <InfoIcon />,
      path: '/about',
    },
  ];

  const teamItemList = [
    {
      text: '团体介绍',
      icon: <PeopleAltIcon />,
      path: '/group',
    },
    {
      text: '角色介绍',
      icon: <PersonIcon />,
      path: '/characters',
    },
  ];

  const storyItemList = [
    {
      text: '主线剧情',
      icon: <MenuBookIcon />,
      path: '/mainstory',
    },
    {
      text: '活动剧情',
      icon: <ImportContactsIcon />,
      path: '/eventslist',
    },
    {
      text: '卡面剧情',
      icon: <LocalLibraryIcon />,
      path: '/cardslist',
    },
  ];

  const talkItemList = [
    {
      text: '地图对话',
      icon: <ForumIcon />,
      path: '/map',
    },
    {
      text: '节日对话',
      icon: <ChatIcon />,
      path: '/festival',
    },
    {
      text: 'Live对话',
      icon: <LiveTvIcon />,
      path: '/live',
    },
  ];

  const SeiyuuItenList = [
    {
      text: '电台节目',
      icon: <RadioIcon />,
      path: '/radio',
    },
    {
      text: '其他节目',
      icon: <LanguageIcon />,
      path: '/seiyuevent',
    },
  ];

  const { window, history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedPath, setSelectedPath] = React.useState(
    props.location.pathname
  );

  const handleListItemClick = (event, path) => {
    setSelectedPath(path);
    history.push(path);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {commonItemList.map((item, index) => {
          const { text, icon, path } = item;
          return (
            <ListItem
              button
              key={text}
              selected={selectedPath === path}
              onClick={(event) => {
                handleListItemClick(event, path);
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {teamItemList.map((item, index) => {
          const { text, icon, path } = item;
          return (
            <ListItem
              button
              key={text}
              selected={selectedPath === path}
              onClick={(event) => {
                handleListItemClick(event, path);
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {storyItemList.map((item, index) => {
          const { text, icon, path } = item;
          return (
            <ListItem
              button
              key={text}
              selected={selectedPath === path}
              onClick={(event) => {
                handleListItemClick(event, path);
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {talkItemList.map((item, index) => {
          const { text, icon, path } = item;
          return (
            <ListItem
              button
              key={text}
              selected={selectedPath === path}
              onClick={(event) => {
                handleListItemClick(event, path);
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {SeiyuuItenList.map((item, index) => {
          const { text, icon, path } = item;
          return (
            <ListItem
              button
              key={text}
              selected={selectedPath === path}
              onClick={(event) => {
                handleListItemClick(event, path);
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            25時大锅饭（暂定）
          </Typography>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <React.Fragment>
        <main className={classes.content}>
          <div className={classes.toolbar} id="back-to-top-anchor" />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/group" component={Group} />
          <Route path="/characters" component={Characters} />
          <Route path="/mainstory" component={MainStory} />
          <Route path="/cardslist" component={CardsList} />
          <Route path="/eventslist" component={EventsList} />
          <Route path="/map" component={Map} />
          <Route path="/festival" component={Festival} />
          <Route path="/live" component={Live} />
          <Route path="/radio" component={Radio} />
          <Route path="/seiyuevent" component={SeiyuEvent} />
        </main>
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </React.Fragment>
    </div>
  );
}

export default withRouter(App);
