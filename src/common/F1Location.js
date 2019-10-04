import React, { useContext } from "react";
import Hidden from "@material-ui/core/Hidden";
import SiteContext from "../siteContext";

/* TODO: refactor this to use an array of objects for the dimensions and breakpoints. Have a size for every breakpoint.*/
const F1Location = props => {
  const site = useContext(SiteContext);
  const location = props.mapLink ? props.mapLink : site.location.mapLink;
  return (
    <>
      <Hidden only={["md", "sm", "xs"]}>
        <iframe
          title={site.location.name}
          src={location}
          width="100%"
          height="600"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Hidden>
      <Hidden only={["xl", "lg", "sm", "xs"]}>
        <iframe
          title={site.location.name}
          src={location}
          width="100%"
          height="450"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Hidden>
      <Hidden only={["xl", "lg", "md"]}>
        <iframe
          title={site.location.name}
          src={location}
          width="100%"
          height="250"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Hidden>
    </>
  );
};

export default F1Location;
