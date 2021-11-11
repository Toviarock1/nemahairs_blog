import React, { useEffect, useState, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../hoc/Layout/Layout";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchAllPost } from "../../store/allPost";
import CenteredSpinner from "../../components/CenteredSpinner/CenteredSpinner";

function App() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const Home = lazy(() => import("./../Home/Home"));
  const SinglePost = lazy(() => import("./../SinglePost/SinglePost"));
  const Search = lazy(() => import("./../Search/Search"));

  useEffect(() => {
    dispatch(fetchAllPost());
  }, [dispatch]);

  console.log(searchText);
  return (
    <>
      <Layout
        searchText={searchText}
        setSearchText={(e) => setSearchText(e.target.value)}
      >
        <Suspense fallback={<CenteredSpinner />}>
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
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
