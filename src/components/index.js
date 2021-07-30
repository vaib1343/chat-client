import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Chat from "./Chat";
import Navbar from "./common/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/chat" component={Chat} />
        <Route render={() => <h1>Error 404 page not Found</h1>} />
      </Switch>{" "}
    </>
  );
};

export default App;
