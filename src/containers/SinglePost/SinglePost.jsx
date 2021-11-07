import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import CenteredError from '../../components/CenteredError/CenteredError'
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner'
import { fetchAdvert, fetchAllCategories, fetchPost } from '../../store/singlePost'
import Post from '../../views/Post/Post'


const SinglePost = () => {
    //variables
    let content = <CenteredSpinner />;
    let newTime;
    //redux
    const post = useSelector(state => state.post.post);
    const loading = useSelector(state => state.post.loading);
    const advert = useSelector(state => state.post.advert);
    const error = useSelector(state => state.post.error);
    const allCategories = useSelector(state => state.post.categories);
    const dispatch = useDispatch();
    //params
    const { slug } = useParams();

    useEffect(() => {
        dispatch(fetchAdvert());
        dispatch(fetchPost(slug));
        dispatch(fetchAllCategories());
    }, [slug, dispatch]);

    //read post aloud
    const textToVoiceHandler = () => {
        window.responsiveVoice.speak(document.querySelector('.speak').textContent, "US English Male");
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


    if (!loading) {
        if (!error) {

            if (post.publishedAt) {
                newTime = post.publishedAt.split(/[a-z]/i)[0];
            }
            content = (
                <Post
                    loading={loading}
                    title={post.title}
                    img={post.mainImage && post.mainImage.asset && post.mainImage.asset.url}
                    content={post.body}
                    advertImg={advert.image && advert.image.asset && advert.image.asset.url}
                    advertAlt={advert.title}
                    link={advert.link}
                    publishedAt={newTime}
                    stop={stopTextToVoiceHandler}
                    start={textToVoiceHandler}
                    pause={pauseTextToVoiceHandler}
                    resume={resumeTextToVoiceHandler}
                    categories={allCategories}
                />
            );
        } else {
            content = <CenteredError />;
        }
    }

    return (
        content
    )
}

export default SinglePost
