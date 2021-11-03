import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
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
            {!props.loading ? <section className={classes.Post}>
                <div>
                    <Container className={classes.Container}>
                        <Row>
                            <Col xs={9}>
                                <div className={classes.TitleWrapper}>
                                    <h2>{props.title}</h2>
                                    <div>
                                        <span>January 26, 2021</span>
                                    </div>
                                </div>
                                <img src={props.img} alt={props.title} />
                                <div>
                                    <BlockContent blocks={props.content} projectId="7k0zkofm"  dataset="production" />
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="name">name</label>
                                        <input type="text" id="name" />
                                        <label htmlFor="name">name</label>
                                        <input type="text" id="name" />
                                        <label htmlFor="name">name</label>
                                        <input type="text" id="name" />
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <AboutMeCard />
                                <FollowUsCard />
                                <AdvertisementCard />
                                <CategoriesCard />
                                <PopularPostCard />
                                <ArchiveCard />
                                <Newsletter />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section> : 'loading'}
        </>
    )
}

export default Post;
