import React from "react";
import { useSelector } from "react-redux";
import CenteredError from "../../components/CenteredError/CenteredError";
import CenteredSpinner from "../../components/CenteredSpinner/CenteredSpinner";
import Posts from "../../views/Posts/Posts";

const AllPost = () => {
  const posts = useSelector((state) => state.posts.allPost);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.allPostError);
  let content = <CenteredSpinner />;

  if (!loading) {
    if (!error) {
      if (posts) {
        content = <Posts posts={posts} />;
      }
    } else {
      content = <CenteredError />;
    }
  }

  console.log(posts);
  return content;
};

export default AllPost;
