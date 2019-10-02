import React, { useContext } from "react";
import SiteContext from "./siteContext";
// when secure routes are in place we'll need redirect
// import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./Home";

const F1Routes = props => {
  const site = useContext(SiteContext);

  return (
    <Switch>
      {/* Add support for specifying an array of paths and then don't
      hard code home here.  */}
      <Route exact path="/" render={props => <Home {...props} />} />
      {site.navItems
        .filter(item => item.component)
        .map((item, index) => (
          <Route
            key={index}
            exact
            // props doesn't actually get passed here. I'd love to
            // make that happen and keep this dynamic.
            render={props => item.component}
            // render={props => {item.component {...props}}}
            path={`/${item.route}`}
          />
        ))}
    </Switch>
  );
};

export default withRouter(F1Routes);

// need this when auth is implemented.
// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const site = useContext(SiteContext);
//   const auth = site.authService;
//   if (auth.isAuthenticated()) {
//     return <Route {...rest} render={props => <Component {...props} />} />;
//   } else {
//     return (
//       <Route>
//         <Redirect to="/login" />
//       </Route>
//     );
//   }
// };
