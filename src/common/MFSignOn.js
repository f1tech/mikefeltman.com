import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import SiteContext from "../siteContext";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles(theme => ({
  navButton: {
    margin: 2,
    color: "white"
  }
}));

const MFSignOn = props => {
  const site = useContext(SiteContext);
  const authService = { props };
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let loginStatus;
  if (authService) {
    if (isLoggedIn !== authService.authenticated) {
      setIsLoggedIn(authService.authenticated);
    }
    // really should have the auth service handling this
    // but haven't figured out how to get a cleaner reference to
    // stash
    let token = site.stash.get("authToken");
    if (token) {
      authService.token = token;
    }
    const logInOut = logIn => {
      let startStatus = loginStatus;
      if (logIn) {
        loginStatus = authService.login();
      } else {
        loginStatus = authService.logout();
      }

      if (startStatus !== authService.authenticated) {
        setIsLoggedIn(authService.authenticated);
      }

      site.stash.set("authToken", authService.token);
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

export default MFSignOn;
