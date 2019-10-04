import React, { useContext } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SiteContext from "../siteContext";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  bottomNav: {
    margin: 2
  },
  bottomNavButton: {
    width: 20
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
    <BottomNavigation className={classes.bottomNav} showLabels>
      {site.navItems
        .filter(item => item.bottom === true)
        .map((item, idx) => (
          <BottomNavigationAction
            className={classes.bottomNavButton}
            key={idx}
            label={item.label}
            value={item.value}
            icon={item.icon}
            href={item.link}
            component={Link}
            to={item.route ? `/${item.route}` : window.location}
            onClick={() => itemClick(item)}
          />
        ))}
    </BottomNavigation>
  );
}
