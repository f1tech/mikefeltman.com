import React, { useContext } from "react";
import Hidden from "@material-ui/core/Hidden";
import SiteContext from "./siteContext";

/* TODO: refactor this to use an array of objects for the dimensions and breakpoints. Have a size for every breakpoint.*/
const F1Location = props => {
  const site = useContext(SiteContext);
  // const location = props.url
  //   ? props.url
  //   : "https://www.google.com/maps/place/F1+Technologies/@42.436981,-82.8870864,17z/data=!3m1!4b1!4m5!3m4!1s0x882529978e18996f:0x8d8e103ec5409f19!8m2!3d42.4369771!4d-82.8848977&output=embed";

  const location = props.location ? props.location : site.location.mapLink;
  // console.log({ location });
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
