import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/home";
import BookView from "./components/Book";
import Login from "./containers/Admin/login";
import User from "./components/Admin";
import AddReview from "./containers/Admin/add";

import Layout from "./hoc/layout";
import Auth from "./hoc/auth";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home)} />
        <Route path="/login" exact component={Auth(Login, false)} />
        <Route path="/user" exact component={Auth(User, true)} />
        <Route path="/user/add" exact component={Auth(AddReview, true)} />
        <Route path="/books/:id" exact component={Auth(BookView, true)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
