import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Home, Details, Search, Settings } from "../pages/Index";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={Details} />
        <Route path="/search/:id" component={Search} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </>
  );
};

export default App;
