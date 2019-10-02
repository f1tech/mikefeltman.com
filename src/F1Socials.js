import React, { useContext } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import SiteContext from "./siteContext";

const useStyles = makeStyles(theme => ({
  linkButton: {
    width: "40px",
    height: "40px"
  }
}));

export default function F1Socials() {
  const site = useContext(SiteContext);
  const classes = useStyles();

  return (
    <>
      {site.navItems
        .filter(item => item.social === true)
        .map((button, idx) => (
          <Tooltip title={button.tip} key={idx}>
            {button.img ? (
              <IconButton href={`${button.link}`}>
                <img
                  src={`${button.img}`}
                  alt={button.link}
                  className={classes.linkButton}
                />
              </IconButton>
            ) : (
              <IconButton size="medium">{button.icon}</IconButton>
            )}
          </Tooltip>
        ))}
    </>
  );
}
