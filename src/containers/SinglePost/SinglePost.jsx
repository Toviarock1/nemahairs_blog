import React, { useEffect, useState } from "react";
import axios from "./../../axios-instance";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CenteredError from "../../components/CenteredError/CenteredError";
import CenteredSpinner from "../../components/CenteredSpinner/CenteredSpinner";
import { fetchAllComments } from "../../store/comments";
import {
  fetchAdvert,
  fetchAllCategories,
  fetchAuthor,
  fetchPopularPost,
  fetchPost,
} from "../../store/singlePost";
import Post from "../../views/Post/Post";
import { getPostedDate } from "../../shared/utility";

const SinglePost = () => {
  const body = document.querySelector("body");
  const script = document.createElement("script");
  script.setAttribute(
    "src",
    "https://code.responsivevoice.org/responsivevoice.js?key=giWDAPkG"
  );
  body.appendChild(script);
  //variables
  let content = <CenteredSpinner />;
  let allComments = [];
  let allReplies = [];
  //state
  //data to post to the backend
  const [fullName, setFullName] = useState("");
  const [comment, setComment] = useState("");
  const [repliedCommentMessage, setRepliedCommentMessage] = useState("");
  const [repliedCommentFullName, setRepliedCommentFullName] = useState("");
  //disable send comment btn
  const [sendComment, setSendComment] = useState(false);
  //redux
  const post = useSelector((state) => state.post.post);
  const loading = useSelector((state) => state.post.loading);
  const advert = useSelector((state) => state.post.advert);
  const error = useSelector((state) => state.post.error);
  const allCategories = useSelector((state) => state.post.categories);
  const commentDetails = useSelector((state) => state.comments.comments);
  const author = useSelector((state) => state.post.author);
  const popularPost = useSelector((state) => state.post.popularPost);
  const socialMediaLinks = useSelector((state) => state.socialMediaLinks.links);
  const dispatch = useDispatch();
  //params
  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchAdvert());
    dispatch(fetchPost(slug));
    dispatch(fetchAllCategories());
    dispatch(fetchAllComments(slug));
    dispatch(fetchAuthor());
    dispatch(fetchPopularPost());
    console.log(socialMediaLinks);
  }, [slug, dispatch]);

  // console.log(socialMediaLinks.links[0]);

  //read post aloud
  const textToVoiceHandler = () => {
    window.responsiveVoice.speak(
      document.querySelector(".speak").textContent,
      "US English Male"
    );
  };
  const stopTextToVoiceHandler = () => {
    window.responsiveVoice.cancel();
  };
  const pauseTextToVoiceHandler = () => {
    window.responsiveVoice.pause();
  };
  const resumeTextToVoiceHandler = () => {
    window.responsiveVoice.resume();
  };

  const submitCommentHandler = () => {
    setSendComment(true);
    console.log("start");
    axios
      .post(`/${slug}.json`, {
        fullName: fullName,
        comment: comment,
        reply: "",
      })
      .then((res) => {
        dispatch(fetchAllComments(slug));
        setComment("");
        setFullName("");
        setSendComment(false);
      })
      .catch((err) => {
        setSendComment(false);
        console.log(err);
      });
  };

  const submitCommentReplyHandler = (id) => {
    console.log("start");
    axios
      .post(`/${slug}/${id}/reply.json`, {
        fullName: repliedCommentFullName,
        comment: repliedCommentMessage,
        id: id,
      })
      .then((res) => {
        dispatch(fetchAllComments(slug));
        // console.log("worked")
      })
      .catch((err) => console.log(err));
  };

  const showReplyBtnHandler = (id) => {
    if (
      document.querySelector(`#commentReplyForm${id}`).style.display === "grid"
    ) {
      document.querySelector(`#commentReplyForm${id}`).style.display = "none";
      document.querySelector(`.replyBtn${id}`).textContent = "Reply";
    } else {
      document.querySelector(`#commentReplyForm${id}`).style.display = "grid";
      document.querySelector(`.replyBtn${id}`).textContent = "Close";
    }
  };

  if (commentDetails) {
    //loop through comments
    for (let key in commentDetails) {
      //loop through comments replies
      for (let relpies in commentDetails[key].reply) {
        allReplies.push({ ...commentDetails[key].reply[relpies] });
      }
      //push a new object with the comment Full name, message,id and reply
      //it checks if the reply has the same id with the main comment and attaches that to reply
      allComments.push({
        ...commentDetails[key],
        id: key,
        reply: allReplies.filter((reply) => reply.id === key),
      });
    }
  }

  console.log(allComments);

  if (!loading) {
    if (!error) {
      content = (
        <Post
          loading={loading}
          title={post.title}
          img={
            post.mainImage && post.mainImage.asset && post.mainImage.asset.url
          }
          content={post.body}
          advertImg={
            advert.image && advert.image.asset && advert.image.asset.url
          }
          advertAlt={advert.title}
          link={advert.link}
          publishedAt={getPostedDate(post.publishedAt)}
          stop={stopTextToVoiceHandler}
          start={textToVoiceHandler}
          pause={pauseTextToVoiceHandler}
          resume={resumeTextToVoiceHandler}
          categories={allCategories}
          userFullName={fullName}
          setUserFullName={(e) => setFullName(e.target.value)}
          comment={comment}
          setComment={(e) => setComment(e.target.value)}
          onSubmitComment={submitCommentHandler}
          commentDetails={allComments}
          replyBtn={showReplyBtnHandler}
          onSubmitCommentReply={submitCommentReplyHandler}
          repliedCommentFullName={repliedCommentFullName}
          setRepliedCommentFullName={(e) =>
            setRepliedCommentFullName(e.target.value)
          }
          repliedCommentMessage={repliedCommentMessage}
          setRepliedCommentMessage={(e) =>
            setRepliedCommentMessage(e.target.value)
          }
          aboutMeImg={
            author.image && author.image.asset && author.image.asset.url
          }
          aboutMeName={author.name}
          aboutMeDescription={author.about_me_post_card}
          facebookUrl={
            socialMediaLinks.links ? socialMediaLinks.links.facebook_link : "#"
          }
          twitterUrl={
            socialMediaLinks.links ? socialMediaLinks.links.twitter_link : "#"
          }
          instagramUrl={
            socialMediaLinks.links ? socialMediaLinks.links.instagram_link : "#"
          }
          linkedinUrl={
            socialMediaLinks.links ? socialMediaLinks.links.linkedin_link : "#"
          }
          disableBtn={sendComment}
          popularPost={popularPost}
        />
      );
    } else {
      content = <CenteredError />;
    }
  }

  return content;
};

export default SinglePost;
