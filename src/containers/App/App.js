import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFirstSevenPost, fetchAllPost } from '../../store/allPost';
import { fetchSocialMediaLinks } from '../../store/socialHandles';
import Layout from '../../hoc/Layout/Layout';
import Home from './../Home/Home';
import SinglePost from './../SinglePost/SinglePost';
import Search from './../Search/Search';
import About from '../About/About';
import Advertise from '../../containers/AdvertiseContainer/AdvertiseContainer';
import Contact from '../../containers/ContactContainer/ContactContainer';
import AllPost from '../AllPost/AllPost';
//css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [searchText, setSearchText] = useState('');
  //redux
  const socialMediaLinks = useSelector((state) => state.socialMediaLinks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFirstSevenPost());
    dispatch(fetchAllPost());
    dispatch(fetchSocialMediaLinks());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(socialMediaLinks.links[0].facebook_link);
  // }, []);

  return (
    <Layout
      searchText={searchText}
      setSearchText={(e) => setSearchText(e.target.value)}
      facebookUrl={socialMediaLinks ? socialMediaLinks.links.facebook_link : ''}
      twitterUrl={socialMediaLinks ? socialMediaLinks.links.twitter_link : ''}
      instagramUrl={
        socialMediaLinks ? socialMediaLinks.links.instagram_link : ''
      }
      linkedinUrl={socialMediaLinks ? socialMediaLinks.links.linkedin_link : ''}
      pinterestUrl={
        socialMediaLinks ? socialMediaLinks.links.pintrest_link : ''
      }
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nemahairs Blog</title>
        <link rel="icon" href="./../../assets/svgs/favicon.ico" />
        <meta
          name="description"
          content="this blog is based on Black Women/Men natural hair, how to care for it, how to style it, how to pair it with your clothing. Stay tuned!"
        />
      </Helmet>
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
