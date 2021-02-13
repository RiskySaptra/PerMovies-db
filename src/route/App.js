import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Home, Details, Search } from "../pages/Index";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={Details} />
        <Route path="/search/:id" component={Search} />
      </Switch>
    </>
  );
};

export default App;
