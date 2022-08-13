import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFirstSevenPost, fetchAllPost } from "../../store/allPost";
import { fetchSocialMediaLinks } from "../../store/socialHandles";
import Layout from "../../hoc/Layout/Layout";
import Home from "./../Home/Home";
import SinglePost from "./../SinglePost/SinglePost";
import Search from "./../Search/Search";
import About from "../About/About";
import Advertise from "../../containers/AdvertiseContainer/AdvertiseContainer";
import Contact from "../../containers/ContactContainer/ContactContainer";
import AllPost from "../AllPost/AllPost";
//css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [searchText, setSearchText] = useState("");
  //redux
  const socialMediaLinks = useSelector((state) => state.socialMediaLinks.links);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFirstSevenPost());
    dispatch(fetchAllPost());
    dispatch(fetchSocialMediaLinks());
  }, [dispatch]);

  console.log(searchText);
  return (
    <Layout
      searchText={searchText}
      setSearchText={(e) => setSearchText(e.target.value)}
      facebookUrl={socialMediaLinks[0].facebook_link}
      twitterUrl={socialMediaLinks[0].twitter_link}
      instagramUrl={socialMediaLinks[0].instagram_link}
      linkedinUrl={socialMediaLinks[0].linkedin_link}
      pinterestUrl={socialMediaLinks[0].pinterest_link}
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
        <Route path="/about">
          <About />
        </Route>
        <Route path="/advertise">
          <Advertise />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/allpost">
          <AllPost />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
