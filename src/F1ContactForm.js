import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import TextareaAutosize from "@material-ui/core/TextareaAutosize";
// import InputLabel from "@material-ui/core/InputLabel";
import SiteContext from "./siteContext";
import FormGroup from "@material-ui/core/FormGroup";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";

// TODO: Binding
// TODO: Make the Send Button a FAB!
// TODO: Implement validation & sending the actual email.
// TODO: Make headings bigger on desktop.
const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  inputLabel: {
    margin: theme.spacing(1)
  },
  textArea: {}
  // card: {
  //   maxWidth: 1000
  // }
}));

const F1ContactForm = () => {
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
    const update = { ...contactInfo, [e.target.id]: e.target.value };
    setContactInfo(update);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={site.avatar && <Avatar src={site.avatar} />}
        action={
          <IconButton aria-label="send email" color="primary">
            <SendIcon />
          </IconButton>
        }
        title={<h1>Email {site.title}</h1>}
        subheader={<h3>We'd love to hear from you!</h3>}
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
            />
          </FormGroup>
          {/* <FormGroup>
            <InputLabel className={classes.inputLabel}>Message</InputLabel>
            <TextareaAutosize
              id="message"
              // label="Message"
              rows={3}
              // fullwidth
              className={classes.textField}
              // value={values.name}
              // onChange={handleChange("name")}
              margin="normal"
            />
          </FormGroup> */}
        </form>
      </CardContent>
    </Card>
  );
};
export default F1ContactForm;
