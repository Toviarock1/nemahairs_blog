import React from 'react';
import { useSelector } from 'react-redux';
import CenteredError from '../../components/CenteredError/CenteredError';
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner';
import Posts from '../../views/Posts/Posts';
import Carousel from './../../views/Carousel/Carousel';

const Home = () => {
  const posts = useSelector((state) => state.posts.sevenPost);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.sevenPostError);
  let content = <CenteredSpinner />;

  if (!loading) {
    if (!error) {
      if (posts) {
        content = (
          <>
            {/* <Carousel /> */}
            <Posts posts={posts} />
          </>
        );
      }
    } else {
      content = <CenteredError />;
    }
  }

  console.log(posts);
  return content;
};

export default Home;
