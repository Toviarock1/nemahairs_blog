import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import AboutMeCard from '../../components/Cards/AboutMeCard/AboutMeCard';
import AdvertisementCard from '../../components/Cards/AdvertisementCard/AdvertisementCard';
import ArchiveCard from '../../components/Cards/ArchiveCard/ArchiveCard';
import CategoriesCard from '../../components/Cards/CategoriesCard/CategoriesCard';
import FollowUsCard from '../../components/Cards/FollowUsCard/FollowUsCard';
import Newsletter from '../../components/Cards/Newsletter/Newsletter';
import PopularPostCard from '../../components/Cards/PopularPostCard/PopularPostCard';
import BlockContent from '@sanity/block-content-to-react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <>
            <section className={classes.Post}>
                <div>
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
                            </Col>
                            <Col>
                                <AboutMeCard />
                                <FollowUsCard />
                                <AdvertisementCard link={props.link} img={props.advertImg} alt={props.advertAlt} />
                                <CategoriesCard categories={props.categories}/>
                                <PopularPostCard />
                                <ArchiveCard />
                                <Newsletter change={props.change} submit={props.submit} value={props.value} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Post;
