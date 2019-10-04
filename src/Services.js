import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import SiteContext from "./siteContext";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import F1Styles from "./common/F1Styles";

const useStyles = makeStyles(theme => ({
  ...F1Styles(theme)
}));

const About = () => {
  const site = useContext(SiteContext);
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title={<h1>Mike's Services</h1>}
        subheader="Mike is a full service software developer!"
        avatar={
          site.avatar && <Avatar src={site.avatar} className={classes.avatar} />
        }
      />
      <CardContent>
        <Typography variant="body1" className={classes.cardContent}>
          Software technology is becoming ever more sophisticated and sometimes
          you need a helping hand. Whether you need analysis and design
          assistance, additional programming support, custom application
          development, technical project mentoring or advice on the latest
          technology, F1 Technologies can help.
        </Typography>
        <Typography variant="body1" className={classes.cardContent}>
          Our solutions allow your business to reduce costs, increase worker
          productivity, and grow and improve customer service by enabling you
          with the right tools and applications. These tools can be used to
          collaborate between departments or with customers, to conduct commerce
          on the Internet, to automate manual processes, replace or supplement
          legacy systems and to reduce customer service and marketing burdens by
          automating the right business processes.
        </Typography>
        <Typography variant="body1" className={classes.cardContent}>
          We have been entrusted to create mission critical business solutions
          for major corporations such as EDS, General Motors, Hexcel
          Corporation, ITW Devilbiss, Libbey Owens Ford, HCR-ManorCare,
          Mitsubishi Electronics, Network Parking, Petro Canada, Unison
          Behavioral Health Group, Inc. and others because we understand and
          utilize current technologies such as: · Object Oriented Analysis,
          Design and Programming · N-Tier Distributed Processing · Web
          Automation · XML Web Services · Client Server Databases Our mission is
          to match your business needs with the right solutions.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default About;
