import React, { useEffect, useState } from 'react'
import { Spinner, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchAdvert, fetchPost } from '../../store/singlePost'
import Post from '../../views/Post/Post'


const SinglePost = () => {
    const post = useSelector(state => state.post.post);
    const loading = useSelector(state => state.post.loading);
    const { slug } = useParams();
    const advert = useSelector(state => state.post.advert);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAdvert());
        dispatch(fetchPost(slug));
    }, [slug, dispatch]);
    const textToVoiceHandler = () => {
        window.responsiveVoice.speak(post.body[0].children[0].text, "US English Female");
    }
    const stopTextToVoiceHandler = () => {
        window.responsiveVoice.cancel();
    }
    const pauseTextToVoiceHandler = () => {
        window.responsiveVoice.pause();
    }
    const resumeTextToVoiceHandler = () => {
        window.responsiveVoice.resume();
    }

    return (
        <>
            {!loading ?
                <>
                    <Post
                        loading={loading}
                        title={post.title}
                        img={post.mainImage && post.mainImage.asset && post.mainImage.asset.url}
                        content={post.body}
                        advertImg={advert.image && advert.image.asset && advert.image.asset.url}
                        advertAlt={advert.title}
                        link={advert.link}
                        publishedAt={post.publishedAt.split(/[a-z]/i)[0]}
                        stop={stopTextToVoiceHandler}
                        start={textToVoiceHandler}
                        pause={pauseTextToVoiceHandler}
                        resume={resumeTextToVoiceHandler}

                    />
                </>
                : <Spinner animation="grow" />}
        </>
    )
}

export default SinglePost
