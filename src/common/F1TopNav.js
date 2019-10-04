import React, { useContext } from "react";
import SiteContext from "../siteContext";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  navButton: {
    margin: 2,
    color: "white"
  },
  linkButton: {
    width: 20,
    height: 20,
    paddingRight: 3
  }
}));

export default function F1BottomNav() {
  const classes = useStyles();
  const site = useContext(SiteContext);

  const itemClick = item => {
    if (item.link) {
      window.open(item.link);
    }
  };

  return (
    <Hidden mdDown>
      {site.navItems
        .filter(button => button.top === true)
        .map((button, idx) => (
          <Button
            key={idx}
            className={button.className ? button.className : classes.navButton}
            href={button.link}
            component={Link}
            to={button.route ? `/${button.route}` : window.location}
            onClick={() => itemClick(button)}
          >
            {button.icon ? button.icon : ""}
            {button.img ? (
              <img
                src={`${button.img}`}
                alt={button.link}
                className={classes.linkButton}
              />
            ) : (
              ""
            )}
            {button.label}
          </Button>
        ))}
    </Hidden>
  );
}
