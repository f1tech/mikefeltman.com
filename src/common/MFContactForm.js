import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SiteContext from "../siteContext";
import FormGroup from "@material-ui/core/FormGroup";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import MFStyles from "./MFStyles";
// TODO: Binding
// TODO: Make the Send Button a FAB
// TODO: Implement validation & sending the actual email.
const useStyles = makeStyles(theme => MFStyles(theme));

const MFContactForm = props => {
  const site = useContext(SiteContext);
  const classes = useStyles();
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    from: "",
    subject: "",
    message: ""
  });

  const sendMail = () => {
    let mailTo = site.contact.email;
    alert("Emailing " + mailTo);
  };

  const handleChange = e => {
    setContactInfo({ ...contactInfo, [e.target.id]: e.target.value });
  };

  return (
    <Card>
      <CardHeader
        avatar={
          site.avatar && <Avatar src={site.avatar} className={classes.avatar} />
        }
        action={
          <IconButton aria-label="send email" color="primary">
            <SendIcon />
          </IconButton>
        }
        title={
          <h1 className={classes.noVertPad}>
            {props.title ? props.title : "Email " + site.title}
          </h1>
        }
        subheader={<h3 className={classes.noVertPad}>{props.subtitle}</h3>}
        className={classes.noVertPad}
      />
      <CardContent>
        <form onSubmit={sendMail}>
          <FormGroup row>
            <TextField
              id="firstName"
              label="First Name"
              className={classes.textField}
              value={contactInfo.firstName}
              onChange={handleChange}
              margin="normal"
              required
              aria-describedby="First Name"
            />
            <TextField
              id="lastName"
              label="Last Name"
              className={classes.textField}
              value={contactInfo.lastName}
              onChange={handleChange}
              margin="normal"
              required
            />
          </FormGroup>
          <FormGroup>
            <TextField
              id="from"
              label="Email Address"
              type="email"
              className={classes.textField}
              value={contactInfo.from}
              onChange={handleChange}
              margin="normal"
              required
              helperText="Please enter your email address"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              id="subject"
              label="Subject"
              className={classes.textField}
              value={contactInfo.subject}
              onChange={handleChange}
              margin="normal"
              required
            />
          </FormGroup>
          <FormGroup>
            <TextField
              id="message"
              label="Message"
              multiline
              rows={3}
              className={classes.textField}
              value={contactInfo.message}
              onChange={handleChange}
              margin="normal"
              required
              variant="outlined"
            />
          </FormGroup>
        </form>
      </CardContent>
    </Card>
  );
};
export default MFContactForm;
