import React from "react";
import "./App.css";
import { routesAdminPage, routesHomePage } from "./Routes";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Containers/Home";
import Admin from "./Containers/Admin";
import LoginPage from "./Containers/Admin/login";
function App() {
  const showLayoutHomePage = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <Home
            key={index}
            path={item.path}
            exact={item.exact}
            component={item.component}
          />
        );
      });
    }
  };
  const showLayoutAdminPage = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <Admin
            key={index}
            path={item.path}
            exact={item.exact}
            component={item.component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <Switch>
        {showLayoutHomePage(routesHomePage)}
        {showLayoutAdminPage(routesAdminPage)}

        <Route path="/admin/login" component={LoginPage} />
        <Route path="" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
