import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SiteContext from "./siteContext";
import Avatar from "@material-ui/core/Avatar";

const drawerWidth = 300;
// Change this to use the new styles hooks!
const styles = theme => ({
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
  avatar: {
    marginRight: 8,
    marginLeft: -15,
    width: 50,
    height: 50
  }
});

const F1Drawer = props => {
  const site = useContext(SiteContext);

  const [state, setState] = useState({
    drawerOpen: false
  });

  const toggleDrawer = event => {
    setState(state => ({ drawerOpen: !state.drawerOpen }));
  };
  const { classes, theme } = props;
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
        anchor={theme.direction === "rtl" ? "right" : "left"}
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
              <Avatar src={site.avatar} className={classes.avatar} />
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

F1Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(F1Drawer);
