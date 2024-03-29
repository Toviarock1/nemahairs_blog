import React from 'react';
import { Col, Container, Row, Button, Image, Spinner } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import AboutMeCard from '../../components/Cards/AboutMeCard/AboutMeCard';
import AdvertisementCard from '../../components/Cards/AdvertisementCard/AdvertisementCard';
import CategoriesCard from '../../components/Cards/CategoriesCard/CategoriesCard';
import PopularPostCard from '../../components/Cards/PopularPostCard/PopularPostCard';
import FollowUsCard from '../../components/Cards/FollowUsCard/FollowUsCard';
import Newsletter from '../../components/Cards/Newsletter/Newsletter';
import BlockContent from '@sanity/block-content-to-react';
import Avater from './../../assets/images/avater.png';
import classes from './Post.module.css';

const Post = (props) => {
  console.log(props);
  return (
    <>
      {props.content ? (
        <section className={classes.Post}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{props.title}</title>
            <link rel="icon" href={props.img} />
            <link
              rel="canonical"
              href={`https://nemahairs.com/post/${props.slug}`}
            />
            <meta
              name="description"
              content={props.content[0].children[0].text}
            />
            {/* Facebook tags */}
            <meta property="og:type" content={'article'} />
            <meta property="og:title" content={props.title} />
            <meta
              property="og:description"
              content={props.content[0].children[0].text}
            />
            {/* End Facebook tags */}
          </Helmet>
          <article>
            <Container className={classes.Container}>
              <Row>
                <Col xs={12} lg={9}>
                  <div className={classes.TitleWrapper}>
                    <h2>{props.title}</h2>
                    <div>
                      <span>{props.publishedAt}</span>
                    </div>
                  </div>
                  <img src={props.img} alt={props.title} />
                  <div className={classes.Voice}>
                    <p>
                      Not in the mood to read this post. we got you why not
                      listen to it instead
                    </p>
                    <Button variant="dark" onClick={props.start}>
                      Listen
                    </Button>
                    <Button variant="dark" onClick={props.pause}>
                      Pause
                    </Button>
                    <Button variant="dark" onClick={props.resume}>
                      Resume
                    </Button>
                    <Button variant="dark" onClick={props.stop}>
                      Stop
                    </Button>
                  </div>
                  <div className={`speak ${classes.TextContent}`}>
                    <BlockContent
                      blocks={props.content}
                      projectId="7k0zkofm"
                      dataset="production"
                    />
                  </div>
                  {props.commentDetails ? (
                    <div className={classes.CommentWrapper}>
                      {props.commentDetails.map((comment, commentIndex) => {
                        return (
                          <div key={comment.id}>
                            <div className={classes.CommentContent}>
                              <div className="d-flex">
                                <Image
                                  src={Avater}
                                  roundedCircle
                                  className={classes.CommentAvater}
                                />
                                <p className={classes.CommentName}>
                                  {comment.fullName}
                                </p>
                              </div>
                              <p className={classes.CommentMessage}>
                                {comment.comment}
                              </p>
                              <Button
                                key={commentIndex}
                                className={`replyBtn${commentIndex}`}
                                variant="dark"
                                onClick={() => props.replyBtn(commentIndex)}
                              >
                                Reply
                              </Button>
                              {comment.reply !== '' && (
                                <div>
                                  {comment.reply.map((reply, index) => {
                                    return (
                                      <>
                                        <div className="d-flex" key={index}>
                                          <Image
                                            src={Avater}
                                            roundedCircle
                                            className={classes.CommentAvater}
                                          />
                                          <p className={classes.CommentName}>
                                            {reply.fullName}
                                          </p>
                                        </div>
                                        <p className={classes.CommentMessage}>
                                          {reply.comment}
                                        </p>
                                      </>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                            <form
                              className={`${classes.Comment}`}
                              style={{ display: 'none' }}
                              id={`commentReplyForm${commentIndex}`}
                            >
                              <input
                                type="text"
                                name="full_name"
                                value={props.repliedCommentFullName}
                                onChange={props.setRepliedCommentFullName}
                              />
                              <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="3"
                                value={props.repliedCommentMessage}
                                onChange={props.setRepliedCommentMessage}
                              ></textarea>
                              <Button
                                variant="dark"
                                className={classes.Btn}
                                onClick={() =>
                                  props.onSubmitCommentReply(comment.id)
                                }
                              >
                                submit
                              </Button>
                            </form>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                  <form className={`d-grid ${classes.Comment}`}>
                    <h3>write a comment</h3>
                    <input
                      type="text"
                      name="full_name"
                      value={props.userFullName}
                      onChange={props.setUserFullName}
                      placeholder="Full Name"
                    />
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      value={props.comment}
                      onChange={props.setComment}
                      placeholder="Comment"
                    ></textarea>
                    <div className={classes.Btn}>
                      <Button
                        variant="dark"
                        disabled={props.disableBtn}
                        onClick={props.onSubmitComment}
                      >
                        {props.disableBtn ? (
                          <Spinner animation="border" variant="secondary" />
                        ) : (
                          'Submit'
                        )}
                      </Button>
                    </div>
                    {/* <input type="button" value="submit" onClick={props.onSubmitComment} className={`btn btn-dark ${classes.Btn}`} /> */}
                  </form>
                </Col>
                <Col>
                  <AboutMeCard
                    aboutMeImg={props.aboutMeImg}
                    aboutMeName={props.aboutMeName}
                    aboutMeDescription={props.aboutMeDescription}
                  />
                  <FollowUsCard
                    facebookUrl={props.facebookUrl}
                    twitterUrl={props.twitterUrl}
                    instagramUrl={props.instagramUrl}
                    linkedinUrl={props.linkedinUrl}
                  />
                  <AdvertisementCard
                    link={props.link}
                    img={props.advertImg}
                    alt={props.advertAlt}
                  />
                  {/* <CategoriesCard categories={props.categories} /> */}
                  <PopularPostCard popularPost={props.popularPost} />
                  <Newsletter
                    change={props.change}
                    submit={props.submit}
                    value={props.value}
                  />
                </Col>
              </Row>
            </Container>
          </article>
        </section>
      ) : (
        'loading'
      )}
    </>
  );
};

export default Post;
