import React, { useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import LoveIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { BrowserRouter as Router } from "react-router-dom";
import F1BottomNav from "./common/F1BottomNav";
import F1Drawer from "./common/F1Drawer";
import F1MenuItems from "./common/F1MenuItems";
import F1TopNav from "./common/F1TopNav";
import F1Routes from "./common/F1Routes";
import SiteContext from "./siteContext";
import { Link } from "react-router-dom";
import F1SignOn from "./common/F1SignOn";
import F1Styles from "./common/F1Styles";

const useStyles = makeStyles(theme => ({
  ...F1Styles(theme),
  app: {
    margin: theme.spacing(0),
    minHeight: "100vh"
  },
  mainContent: { overflow: "scroll", width: "100%", textAlign: "center" },
  footer: {
    marginTop: 5,
    position: "relative",
    bottom: 0
  },
  appTitle: {
    textDecoration: "none",
    color: "white"
  },
  loveIcon: {
    color: "red"
  },
  bottomNav: {
    margin: 2
  }
}));

function App() {
  const classes = useStyles();
  const site = useContext(SiteContext);

  return (
    <div className={classes.app}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <F1Drawer>
              <F1MenuItems />
            </F1Drawer>
            <Typography variant="h5">
              <Link className={classes.appTitle} to="/" variant="h5">
                {site.title}
              </Link>
            </Typography>
            <div className={classes.grow} />
            <F1TopNav />
            <F1SignOn />
          </Toolbar>
        </AppBar>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item className={classes.mainContent}>
            <F1Routes />
          </Grid>
          <Grid item className={classes.footer}>
            <F1BottomNav />
            <Typography variant="body2" align="center">
              Made with
              <LoveIcon className={classes.loveIcon} />
              in Grosse Pointe Woods, Michigan
            </Typography>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
