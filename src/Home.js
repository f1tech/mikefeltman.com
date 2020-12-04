import React, { useRef, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import profilePic from "./img/mffire.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { CardHeader } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import MFSocials from "./common/MFSocials";
import MFStyles from "./common/MFStyles";

const useStyles = makeStyles(theme => ({
  ...MFStyles(theme),
  App: {
    margin: theme.spacing(2)
  },
  bodyButton: {
    margin: 0,
    padding: 0,
    border: 1,
    color: "red"
  },
  mfCard: {
    marginTop: 5,
    maxWidth: 1000,
    display: "inline-block"
  },
  loveIcon: {
    color: "red"
  },
  footer: {
    margin: 5
  },
  bottomNav: {
    margin: 2
  },
  overlayText: {
    position: "absolute",
    color: "white",
    overflow: "scroll",
    textAlign: "left"
  }
}));

const Home = props => {
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");
  useEffect(() => {
    window.addEventListener("resize", setTermPosition);
    return () => {
      window.removeEventListener("resize", setTermPosition);
    };
  });

  const classes = useStyles();
  const imageEl = useRef(null);
  const leftTextEl = useRef(null);
  const rightTextEl = useRef(null);

  const terms = getTerms();
  const showAttribute = e => {
    let word = e.currentTarget.innerText.replace(",", "").trim();
    let displayTerm = terms.find(term => {
      return term.word.toLowerCase() === word.toLowerCase();
    });
    setLeftText(`${displayTerm.word}: ${displayTerm.definition}`);
    setRightText(displayTerm.details);
    setTermPosition();
  };
  const setTermPosition = () => {
    console.log("setting position");
    //TODO: On mobile display all of this in a dialog.
    let rectangle = imageEl.current.getBoundingClientRect();
    leftTextEl.current.style.left = rectangle.left + 5 + "px";
    leftTextEl.current.style.top = rectangle.top + "px";
    leftTextEl.current.style.maxWidth = rectangle.width / 3 - 5 + "px";

    rightTextEl.current.style.left = (rectangle.width / 3) * 2 + "px";
    rightTextEl.current.style.top = rectangle.top + "px";
    rightTextEl.current.style.maxWidth = rectangle.width / 3 - 5 + "px";
    rightTextEl.current.style.left =
      rectangle.right - rectangle.width / 3 + "px";
  };

  return (
    <Card className={classes.mfCard}>
      <CardHeader
        title={
          <Typography>
            <Button
              size="medium"
              className={classes.bodyButton}
              onClick={event => showAttribute(event)}
            >
              Experienced
            </Button>
            {" and "}
            <Button
              size="medium"
              className={classes.bodyButton}
              onClick={event => showAttribute(event)}
            >
              adventurous
            </Button>{" "}
            <Button
              size="medium"
              className={classes.bodyButton}
              onClick={event => showAttribute(event)}
            >
              entrepreneur,
            </Button>{" "}
            <Button
              size="medium"
              className={classes.bodyButton}
              onClick={event => showAttribute(event)}
            >
              polyglot,
            </Button>{" "}
            <Button
              size="medium"
              className={classes.bodyButton}
              onClick={event => showAttribute(event)}
            >
              autodidact,
            </Button>{" "}
            <Button
              size="medium"
              className={classes.bodyButton}
              onClick={event => showAttribute(event)}
            >
              full stack engineer
            </Button>{" "}
            and
            <Button
              size="medium"
              className={classes.bodyButton}
              onClick={event => showAttribute(event)}
            >
              leader
            </Button>
          </Typography>
        }
      ></CardHeader>
      <CardActions>
        <MFSocials />
      </CardActions>
      <CardContent>
        <CardMedia
          component="img"
          alt="Mike Feltman"
          src={profilePic}
          title="Mike Feltman"
          ref={imageEl}
        />
        <Typography className={classes.overlayText} ref={leftTextEl}>
          {leftText}
        </Typography>
        <Typography className={classes.overlayText} ref={rightTextEl}>
          {rightText}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Home;

/* This could be offloaded elsewhere, but it's not used anywhere else. I moved it here to a function mostly 
to make editing this component easier. */
function getTerms() {
  return [
    {
      word: "Experienced",
      type: "adjective",
      definition:
        "having knowledge or skill in a particular field, especially a profession or job, gained over a period of time.",
      details:
        "Mike is experienced in all phases of the SDLC from conception to design, development, delivery, support and maintenance in numerous industries and technologies. As a trainer and mentor Mike has taught thousands of developers. As a presenter Mike has given numerous presenations to audiences both large and small across Europe and North America."
    },
    {
      word: "Adventurous",
      type: "adjective",
      definition:
        "willing to take risks or to try out new methods, ideas, or experiences.",
      details:
        "An outside the box thinker and pragmatic problem solver, Mike is willing to take fresh approaches to come up with innovative solutions and is never afraid to try new technology. In his personal life Mike enjoys the outdoors and sports such as wakeboarding and skydiving."
    },
    {
      word: "Entrepreneur",
      type: "noun",
      definition:
        "a person who organizes and operates a business or businesses, taking on greater than normal financial risks in order to do so.",
      details:
        "Mike founded MF Technologies at 23 years of age and has lead successful consulting, training and product ventures. One of his software products sold over 10,000 copies in over 100 countries."
    },
    {
      word: "Polyglot",
      type: "noun",
      definition: "knowing or using several languages.",
      details:
        "Mike has development experience in React, AngularJS, Vue.js, JavaScript, JSX, HTML, CSS, C#, VB.NET, Node.js and VFP."
    },
    {
      word: "Autodidact",
      type: "Noun",
      definition: "a self-taught person",
      details:
        "Mike is a constant learner that continually invests time and effort into continuing to master the technologies he knows and learning new technology. "
    },
    {
      word: "Full Stack Engineer",
      type: "noun",
      definition:
        "a skillful contriver or originator of the entirety of a computer system or application, comprising both the front end and the back end.",
      details:
        "Mike is skilled in React and other front-end JavaScript frameworks and libraries as well as HTML and CSS; experienced in C#, VB.NET and node.js on the backend and has database experience with Oracle, SQL Server, MongoDB, DynamoDB and others. "
    },
    {
      word: "Leader",
      type: "noun",
      definition:
        "person who leads or commands a group, organization, or country.a skillful contriver or originator of something.",
      details:
        "A thoughtful and decisive leader that seeks to understand and gain consensus, Mike strives to inspire others to be their best and never lets ego get in the way of decision making. "
    }
  ];
}
