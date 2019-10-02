import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import F1Location from "./F1Location";
import F1ContactForm from "./F1ContactForm";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={1}>{children}</Box>
      {/* {children} */}
    </Typography>
  );
}

const Contact = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const changeTab = (event, newValue) => {
    setTabIndex(newValue);
  };
  return (
    <>
      <Tabs value={tabIndex} scrollButtons="auto" onChange={changeTab}>
        <Tab label="Email" value={0} />
        <Tab label="Location" value={1}></Tab>
      </Tabs>
      <TabPanel value={tabIndex} index={0}>
        <F1ContactForm />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <F1Location />
      </TabPanel>
    </>
  );
};

export default Contact;
