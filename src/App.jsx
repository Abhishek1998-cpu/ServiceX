import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// To use Js of the Bootstrap in React import file below
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  return (
    //   <></> is the syntactic sugar, use multiple elements only inside it
    <>
      <Navbar />,
      <Switch>
        {/* https://reactrouter.com/core/api/Switch */}
        {/* Always try to use exact path in Switch */}
        {/* Use Redirect to go to the default path after writing invalide ending url */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
