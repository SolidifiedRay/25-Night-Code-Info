import React from 'react';
import { withRouter, Route } from "react-router-dom";
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
import MusicVideoIcon from '@material-ui/icons/MusicVideo';

import Underdevelopment from './routes/Underdevelopment';
import Home from './routes/Home';
import CardsList from './routes/CardsList';
import EventsList from './routes/EventsList';
import MainStory from './routes/MainStory';
import Radio from './routes/Radio';

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

function App(props) {
  const { window, history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const commonItemList = [
    {
      text: "首页",
      icon: <HomeIcon />,
      onClick: () => history.push("/")
    },
    {
      text: "关于",
      icon: <InfoIcon />,
      onClick: () => history.push("/")
    }
  ];

  const teamItemList = [
    {
      text: "团体介绍",
      icon: <PersonIcon />,
      onClick: () => history.push("/underdevelopment")
    },
    {
      text: "角色介绍",
      icon: <PeopleAltIcon />,
      onClick: () => history.push("/underdevelopment")
    }
  ]

  const storyItemList = [
    {
      text: "主线剧情",
      icon: <MenuBookIcon />,
      onClick: () => history.push("/mainstory")
    },
    {
      text: "活动剧情",
      icon: <ImportContactsIcon />,
      onClick: () => history.push("/eventslist")
    },
    {
      text: "卡面剧情",
      icon: <LocalLibraryIcon />,
      onClick: () => history.push("/cardslist")
    }
  ]

  const talkItemList = [
    {
      text: "地图对话",
      icon: <ForumIcon />,
      onClick: () => history.push("/underdevelopment")
    },
    {
      text: "节日对话",
      icon: <ChatIcon />,
      onClick: () => history.push("/underdevelopment")
    },
    {
      text: "Live对话",
      icon: <LiveTvIcon />,
      onClick: () => history.push("/underdevelopment")
    }
  ]

  const SeiyuuItenList = [
    {
      text: "电台节目",
      icon: <RadioIcon />,
      onClick: () => history.push("/radio")
    },
    {
      text: "官方延伸",
      icon: <LanguageIcon />,
      onClick: () => history.push("/underdevelopment")
    }
  ]

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {commonItemList.map((item, index) => {
          const {text, icon, onClick } = item;
          return(
            <ListItem button key={text} onClick={onClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {teamItemList.map((item, index) => {
          const {text, icon, onClick } = item;
          return(
            <ListItem button key={text} onClick={onClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {storyItemList.map((item, index) => {
          const {text, icon, onClick } = item;
          return(
            <ListItem button key={text} onClick={onClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {talkItemList.map((item, index) => {
          const {text, icon, onClick } = item;
          return(
            <ListItem button key={text} onClick={onClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {SeiyuuItenList.map((item, index) => {
          const {text, icon, onClick } = item;
          return(
            <ListItem button key={text} onClick={onClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

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
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route exact path="/" component={Home} />
        <Route path="/underdevelopment" component={Underdevelopment} />
        <Route path="/mainstory" component={MainStory} />
        <Route path="/cardslist" component={CardsList} />
        <Route path="/eventslist" component={EventsList} />
        <Route path="/radio" component={Radio} />
      </main>
    </div>
  );
}

export default withRouter(App);