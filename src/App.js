import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import "./App.css";
import SinglePost from "./containers/SinglePost/SinglePost";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path='/' render={Home} exact/>
          <Route path='/blog/:slug' render={SinglePost} exact/>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
