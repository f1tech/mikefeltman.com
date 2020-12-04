import React, { useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import LoveIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { BrowserRouter as Router } from "react-router-dom";
import MFBottomNav from "./common/MFBottomNav";
import MFDrawer from "./common/MFDrawer";
import MFMenuItems from "./common/MFMenuItems";
import MFTopNav from "./common/MFTopNav";
import MFRoutes from "./common/MFRoutes";
import SiteContext from "./siteContext";
import { Link } from "react-router-dom";
import MFSignOn from "./common/MFSignOn";
import MFStyles from "./common/MFStyles";

const useStyles = makeStyles(theme => ({
  ...MFStyles(theme),
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
            <MFDrawer>
              <MFMenuItems />
            </MFDrawer>
            <Typography variant="h5">
              <Link className={classes.appTitle} to="/" variant="h5">
                {site.title}
              </Link>
            </Typography>
            <div className={classes.grow} />
            <MFTopNav />
            <MFSignOn />
          </Toolbar>
        </AppBar>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item className={classes.mainContent}>
            <MFRoutes />
          </Grid>
          <Grid item className={classes.footer}>
            <MFBottomNav />
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
