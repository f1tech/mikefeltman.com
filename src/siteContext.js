import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import ResumeIcon from "@material-ui/icons/ViewHeadline";
import WhatsHotIcon from "@material-ui/icons/Whatshot";
import InfoIcon from "@material-ui/icons/Info";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import AuthService from "./common/MFAuthService";
import MFStorage from "./common/MFStorage";

/* just a workaround right now so I can specify props in the components. 
I haven't figured out how to pass them yet. */
let props;
/* Because we are not exporting a component from here, we can't
use the useStyles hook, so an inline style is used for consistency here.
*/
const linkButton = { width: "40px", height: "40px" };
const site = {
  authService: new AuthService({
    loginUrl: "login",
    adminPassword: "password"
  }),
  stash: new MFStorage(),
  useAuth: true,
  title: "Mike Feltman",
  location: {
    name: "MF Technologies",
    address: "597 Heather Lane",
    city: "Grosse Pointe Woods",
    state: "Michigan",
    postalCode: "48236",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.5655751931536!2d-82.88708638434605!3d42.43698103823262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4MF3.1!3m3!1m2!1s0x882529978e18996f%3A0x8d8e103ec5409MF9!2sMF%20Technologies!5e0!3m2!1sen!2sus!4v1569867001115!5m2!1sen!2sus"
  },
  contact: {
    email: "mikefeltman@gmail.com",
    phone: "419-509-6007"
  },
  avatar: "./img/mf.jpg",
  navItems: [
    {
      label: "Home",
      route: "Home",
      icon: <HomeIcon />,
      bottom: false,
      drawer: true,
      top: true,
      component: <Home />
    },
    {
      label: "About",
      route: "About",
      icon: <InfoIcon />,
      bottom: true,
      drawer: true,
      top: true,
      component: <About {...props} />
    },
    {
      label: "Services",
      route: "Services",
      icon: <WhatsHotIcon />,
      bottom: true,
      drawer: true,
      top: true,
      component: <Services {...props} />
    },
    {
      label: "Resume",
      link: "./MichaelFeltmanResume.pdf",
      icon: <ResumeIcon />,
      bottom: true,
      drawer: false,
      top: true
    },
    {
      img: "./img/LinkedIn.png",
      link: "https://www.linkedin.com/in/mikefeltman/",
      tip: "Connect with me on LinkedIn",
      social: true,
      top: true,
      label: "LinkedIn"
    },
    {
      img: "./img/medium.png",
      link: "https://medium.com/@wmichaelfeltman",
      tip: "Read my rants",
      label: "Blog",
      social: true,
      top: true,
      drawer: true
    },
    {
      img: "./img/GitHub.png",
      link: "https://github.com/MFtech",
      tip: "Check out my code on Github",
      social: true,
      top: true,
      label: "Github"
    },
    {
      img: "./img/stackoverflow.png",
      link: "https://stackoverflow.com/story/mikefeltman",
      tip: "Check me out on stackoverflow",
      social: true,
      top: true,
      label: "stackoverflow"
    },

    {
      label: "Contact",
      route: "Contact",
      icon: <EmailIcon />,
      bottom: true,
      drawer: true,
      top: true,
      component: <Contact {...props} />
    },
    {
      icon: <EmailIcon style={linkButton} />,
      route: "contact",
      tip: "Get in touch",
      social: true,
      component: <Contact {...props} />
    }
  ]
};

const SiteContext = React.createContext(site);
export default SiteContext;
