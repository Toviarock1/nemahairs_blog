import React from 'react'
import { Col, Container, Row, Button, Image } from 'react-bootstrap';
import AboutMeCard from '../../components/Cards/AboutMeCard/AboutMeCard';
import AdvertisementCard from '../../components/Cards/AdvertisementCard/AdvertisementCard';
import CategoriesCard from '../../components/Cards/CategoriesCard/CategoriesCard';
import FollowUsCard from '../../components/Cards/FollowUsCard/FollowUsCard';
import Newsletter from '../../components/Cards/Newsletter/Newsletter';
import PopularPostCard from '../../components/Cards/PopularPostCard/PopularPostCard';
import BlockContent from '@sanity/block-content-to-react';
import Avater from './../../assets/images/avater.png';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <>
            <section className={classes.Post}>
                <article>
                    <Container className={classes.Container}>
                        <Row>
                            <Col xs={9}>
                                <div className={classes.TitleWrapper}>
                                    <h2>{props.title}</h2>
                                    <div>
                                        <span>{props.publishedAt}</span>
                                    </div>
                                </div>
                                <img src={props.img} alt={props.title} />
                                <div className={classes.Voice}>
                                    <p>Not in the mood to read this post. we got you why not listen to it instead</p>
                                    <Button variant="dark" onClick={props.start}>Listen</Button>
                                    <Button variant="dark" onClick={props.pause}>Pause</Button>
                                    <Button variant="dark" onClick={props.resume}>Resume</Button>
                                    <Button variant="dark" onClick={props.stop}>Stop</Button>
                                </div>
                                <div className={`speak ${classes.TextContent}`}>
                                    <BlockContent blocks={props.content} projectId="7k0zkofm" dataset="production" />
                                </div>
                                {props.commentDetails ? <div className={classes.CommentWrapper}>
                                    {props.commentDetails.map((comment, commentIndex) => {
                                        return <div key={comment.id}>
                                            <div className={classes.CommentContent}>
                                                <div className="d-flex">
                                                    <Image src={Avater} roundedCircle className={classes.CommentAvater} />
                                                    <p className={classes.CommentName}>{comment.fullName}</p>
                                                </div>
                                                <p className={classes.CommentMessage}>{comment.comment}</p>
                                                <Button key={commentIndex} className={`replyBtn${commentIndex}`} variant="dark" onClick={() => props.replyBtn(commentIndex)}>Reply</Button>
                                                {comment.reply !== '' &&
                                                    <div>
                                                        {
                                                            comment.reply.map((reply, index) => {
                                                                return (
                                                                    <>
                                                                        <div className="d-flex" key={index}>
                                                                            <Image src={Avater} roundedCircle className={classes.CommentAvater} />
                                                                            <p className={classes.CommentName}>{reply.fullName}</p>
                                                                        </div>
                                                                        <p className={classes.CommentMessage}>{reply.comment}</p>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                }
                                            </div>
                                            <form className={`${classes.Comment}`} style={{ display: 'none' }} id={`commentReplyForm${commentIndex}`}>
                                                <input type="text" name="full_name" value={props.repliedCommentFullName} onChange={props.setRepliedCommentFullName} />
                                                <textarea name="" id="" cols="30" rows="10" value={props.repliedCommentMessage} onChange={props.setRepliedCommentMessage}></textarea>
                                                <Button variant="dark" className={classes.Btn} onClick={event => props.onSubmitCommentReply(event, comment.id)}>submit</Button>
                                            </form>
                                        </div>
                                    })}
                                </div> : null}
                                <form className={`d-grid ${classes.Comment}`}>
                                    <h3>write a comment</h3>
                                    <input type="text" name="full_name" value={props.userFullName} onChange={props.setUserFullName} placeholder="Full Name" />
                                    <textarea name="" id="" cols="30" rows="5" value={props.comment} onChange={props.setComment} placeholder="Comment"></textarea>
                                    <input type="button" value="submit" onClick={props.onSubmitComment} className={`btn btn-dark ${classes.Btn}`} />
                                </form>
                            </Col>
                            <Col>
                                <AboutMeCard
                                    aboutMeImg={props.aboutMeImg}
                                    aboutMeName={props.aboutMeName}
                                    aboutMeDescription={props.aboutMeDescription}
                                />
                                <FollowUsCard />
                                <AdvertisementCard link={props.link} img={props.advertImg} alt={props.advertAlt} />
                                <CategoriesCard categories={props.categories} />
                                <PopularPostCard />
                                <Newsletter change={props.change} submit={props.submit} value={props.value} />
                            </Col>
                        </Row>
                    </Container>
                </article>
            </section>
        </>
    )
}

export default Post;
