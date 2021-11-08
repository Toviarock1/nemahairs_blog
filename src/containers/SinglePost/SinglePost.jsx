import axios from 'axios'
import React, { useEffect, useState } from 'react'
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
    //state
    //data to post to the backend
    const [fullName, setFullName] = useState('');
    const [comment, setComment] = useState('');
    //date gotton from the backend
    const [commentDetails, setCommentDetails] = useState('');
    let allComments = [];
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

    // axios.get(`https://nemahairs-comments-default-rtdb.firebaseio.com/${slug}.json`)
    // .then(res => {
    //     setCommentDetails(res.data);
    // }).catch(err => console.log(err))

    useEffect(() => {
        axios.get(`https://nemahairs-comments-default-rtdb.firebaseio.com/${slug}.json`)
    .then(res => {
        setCommentDetails(res.data);
    }).catch(err => console.log(err))

    }, [])

    console.log(commentDetails)

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

    const submitCommentHandler = () => {
        console.log('start')
        axios.post(`https://nemahairs-comments-default-rtdb.firebaseio.com/${slug}.json`, {"fullName": fullName,"comment":comment})
        .then(res => console.log(res)).catch(err => console.log(err))
    };

    if(commentDetails) {
        for(let key in commentDetails) {
            allComments.push(commentDetails[key])
        }
    }

    console.log(allComments)

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
                    userFullName={fullName}
                    setUserFullName={e => setFullName(e.target.value)}
                    comment={comment}
                    setComment={e => setComment(e.target.value)}
                    onSubmitComment={submitCommentHandler}
                    commentDetails={allComments}
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
