import React from "react";
import { Switch, Route } from "react-router-dom";
import AddUsers from "./components/AddUsers";
import Users from "./components/Users";
import Header from "./components/Header";
import Edit from "./components/Edit";
export default function Routes() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/add" component={AddUsers} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/" component={Users} />
      </Switch>
    </div>
  );
}
