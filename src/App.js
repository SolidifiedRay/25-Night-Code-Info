import React from "react";
import {HashRouter, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import ResponsiveDrawer from './components/ResponsiveDrawer';
import Underdevelopment from './routes/Underdevelopment';
import Home from './routes/Home';

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
    <HashRouter basename='/'>
      <ResponsiveDrawer />
      <Route exact path="/" component={Home} />
      <Route path="/underdevelopment" component={Underdevelopment} />
      </HashRouter>
    </div>
  );
}

export default App;
