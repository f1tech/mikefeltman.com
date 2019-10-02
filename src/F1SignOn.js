import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import SiteContext from "./siteContext";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles(theme => ({
  navButton: {
    margin: 2,
    color: "white"
  }
}));

const F1SignOn = props => {
  const site = useContext(SiteContext);
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState();
  let loginStatus;
  if (site.authService) {
    if (isLoggedIn !== site.authService.authenticated) {
      setIsLoggedIn(site.authService.authenticated);
    }
    // really should have the auth service handling this
    // but haven't figured out how to get a cleaner reference to
    // stash
    let token = site.stash.get("authToken");
    if (token) {
      site.authService.token = token;
    }
    const logInOut = logIn => {
      let startStatus = loginStatus;
      if (logIn) {
        loginStatus = site.authService.login();
      } else {
        loginStatus = site.authService.logout();
      }

      if (startStatus !== site.authService.authenticated) {
        setIsLoggedIn(site.authService.authenticated);
      }

      site.stash.set("authToken", site.authService.token);
      console.log(site.stash.get("authToken"));
    };

    if (isLoggedIn) {
      return (
        <Button className={classes.navButton} onClick={() => logInOut(false)}>
          <LockOutlinedIcon />
          Logout
        </Button>
      );
    }
    return (
      <Button className={classes.navButton} onClick={() => logInOut(true)}>
        <LockOutlinedIcon />
        Login
      </Button>
    );
  } else {
    return <></>;
  }
};

export default F1SignOn;
