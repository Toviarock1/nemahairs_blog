import React from "react";
import { getPostedDate } from "./../../../shared/utility";
import PopularPost from "./PopularPost.jsx/PopularPost";

const PopularPostCard = (props) => {
  let content = <p>loading...</p>;

  if (props.popularPost) {
    content = props.popularPost.map((post, index) => {
      return (
        <PopularPost
          img={
            post.mainImage && post.mainImage.asset && post.mainImage.asset.url
          }
          title={post.title}
          date={getPostedDate(post.publishedAt)}
          slug={post.slug.current}
          key={index}
        />
      );
    });
  }

  return (
    <div className="CardWrapper">
      <h3>Popular Post</h3>
      {content}
    </div>
  );
};

export default PopularPostCard;
