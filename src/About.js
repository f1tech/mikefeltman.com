import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import SiteContext from "./siteContext";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  avatar: {
    height: 80,
    width: 80
  },
  cardContent: {
    textAlign: "justify",
    marginBottom: 8
  }
}));

const About = props => {
  const site = useContext(SiteContext);
  const classes = useStyles();
  console.log(props);
  return (
    <Card>
      <CardHeader
        title={<h1>All About Mike</h1>}
        subheader="Experienced and adventurous entrepreneur, polygloy, autodidact full stack engineer and leader"
        avatar={
          site.avatar && <Avatar src={site.avatar} className={classes.avatar} />
        }
      />
      <CardContent>
        <Typography variant="body1" className={classes.cardContent}>
          Mike Feltman has been president of F1 Technologies since founding the
          company in 1990 as Neon Software. With Mike at the helm, F1
          Technologies has enjoyed years of success as a consulting firm,
          training firm, distributor and most notably the developers of the
          FoxExpress line of application development tools.
        </Typography>
        <Typography variant="body1" className={classes.cardContent}>
          Mike is a frequent conference speaker and has spoken at conferences
          throughout North America and Europe on a wide variety topics. Mike’s
          main focus has been on Visual FoxPro application development, but he
          also speaks on object orientation, Internet application development,
          client-server development, the software business and othersubjects.
          Mike has also published articles in FoxPro Advisor, FoxTalk and the
          Virtual FoxPro User Group’s newsletter and served as technical editor
          of the book “Building Visual FoxPro Applications with Visual
          FoxExpress” published by Hentzenwerke.
        </Typography>
        <Typography variant="body1" className={classes.cardContent}>
          Mike is actively involved in F1 Technologies consulting practice and
          has developed numerous applications and web sites for a wide variety
          of industries including Automotive, Healthcare, Construction, Retail
          and Manufacturing. Mike has been involved with a number of successful
          software projects for large companies such as Petro Canada, General
          Motors, Mitsubishi, Libbey Owens Ford, Teledyne and others as well as
          many projects for small and medium sized business. Mike is heavily
          experienced in desktop, LAN, client-server and Internet development.
        </Typography>
        <Typography variant="body1" className={classes.cardContent}>
          Prior to starting F1 Technologies, Mike worked at Fox Software - the
          original creators of FoxPro. At Fox Software Mike worked in technical
          support, training and marketing, developed in-house systems and
          performed product maintenance on the FoxCentral module in FoxBase+
        </Typography>
        <Typography variant="body1" className={classes.cardContent}>
          Mike got his start in computers at the age of 15 as an assistant
          instructor at the University of Toledo and became an instructor at the
          University of Toledo at the age of 17. At the University Mike taught a
          wide variety of courses on topics including operating systems,
          databases, word processing and robotics. Mike also developed the
          University’s robotics courseware and developed a registration system
          for the university in FoxBase+.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default About;
