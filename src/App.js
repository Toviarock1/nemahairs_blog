import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import "./App.css";
import SinglePost from "./containers/SinglePost/SinglePost";
import { useDispatch } from "react-redux";
import { fetchAllPost } from "./store/allPost";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPost());
    //dispatch(toggleLoading())
  }, [dispatch])
  return (
    <>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/post/:slug' exact>
            <SinglePost />
          </Route>
          <Route>
             <Redirect to='/' />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
