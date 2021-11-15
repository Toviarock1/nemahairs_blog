import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllPost } from "../../store/allPost";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../hoc/Layout/Layout";
import Home from "./../Home/Home";
import "./App.css";
import SinglePost from "./../SinglePost/SinglePost";
import Search from "./../Search/Search";
import About from "../About/About";

function App() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPost());
  }, [dispatch]);

  console.log(searchText);
  return (
    <Layout
      searchText={searchText}
      setSearchText={(e) => setSearchText(e.target.value)}
    >
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/post/:slug" exact>
          <SinglePost />
        </Route>
        <Route path="/search/:slug" exact>
          <Search />
        </Route>
        <Route path="/about" >
          <About />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
