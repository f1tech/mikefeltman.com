import React, { useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SiteContext from "./siteContext";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
  listItemText: {
    color: "navy"
  },
  linkButton: {
    width: "20px",
    height: "20px",
    marginRight: "33px",
    marginLeft: "2px"
  }
});

const F1MenuItems = props => {
  const { classes } = props;
  const site = useContext(SiteContext);

  const itemClick = item => {
    if (item.link) {
      window.open(item.link);
    }
  };

  return (
    <List>
      {site.navItems
        .filter(item => item.drawer === true)
        .map((item, idx) => (
          <ListItem
            button
            key={idx}
            onClick={() => itemClick(item)}
            href={item.link}
            route={item.route}
            component={Link}
            to={item.route ? `/${item.route}` : window.location}
          >
            {item.icon ? <ListItemIcon>{item.icon}</ListItemIcon> : ""}
            {item.img ? (
              <img
                src={`${item.img}`}
                alt={item.link}
                className={classes.linkButton}
              />
            ) : (
              ""
            )}
            {item.label ? (
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={item.label}
              />
            ) : (
              ""
            )}
          </ListItem>
        ))}
    </List>
  );
};

export default withStyles(styles)(F1MenuItems);
