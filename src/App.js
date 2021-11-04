import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import "./App.css";
import SinglePost from "./containers/SinglePost/SinglePost";
import { useDispatch } from "react-redux";
import { fetchAllPost } from "./store/counter";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPost())
  }, [dispatch])
  return (
    <>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/blog/:slug' exact>
            <SinglePost />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
