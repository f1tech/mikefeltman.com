import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SiteContext from "../siteContext";
import Avatar from "@material-ui/core/Avatar";
import MFStyles from "./MFStyles";

const drawerWidth = 300;

// const styles = theme => ({
const useStyles = makeStyles(theme => ({
  ...MFStyles(theme),
  appBar: {
    position: "absolute",
    marginLeft: 0,
    height: 64
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  drawerAvatar: {
    marginRight: 8,
    marginLeft: -15,
    width: 50,
    height: 50
  }
}));

const MFDrawer = props => {
  const site = useContext(SiteContext);

  const [state, setState] = useState({
    drawerOpen: false
  });

  const toggleDrawer = event => {
    setState(state => ({ drawerOpen: !state.drawerOpen }));
  };
  const classes = useStyles();

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        anchor="left"
        open={state.drawerOpen}
        onClose={toggleDrawer}
        classes={{
          paper: classes.drawerPaper
        }}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
      >
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            {site.avatar && (
              <Avatar src={site.avatar} className={classes.drawerAvatar} />
            )}
            <Typography variant="h5" color="inherit" noWrap>
              {site.title}
            </Typography>
          </Toolbar>
          <span onClick={toggleDrawer}>{props.children}</span>
        </AppBar>
      </Drawer>
    </>
  );
};
export default MFDrawer;
