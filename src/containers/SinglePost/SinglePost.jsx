import React, { useEffect, useState } from 'react'
import axios from './../../axios-instance'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import CenteredError from '../../components/CenteredError/CenteredError'
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner'
import { fetchAllComments } from '../../store/comments'
import { fetchAdvert, fetchAllCategories, fetchPost } from '../../store/singlePost'
import Post from '../../views/Post/Post'


const SinglePost = () => {
    //variables
    let content = <CenteredSpinner />;
    let getDate;
    let month = [];
    let splitgetDate;
    let newDate;
    let allComments = [];
    let allReplies = []
    //state
    //data to post to the backend
    const [fullName, setFullName] = useState('');
    const [comment, setComment] = useState('');
    const [repliedCommentMessage, setRepliedCommentMessage] = useState('');
    const [repliedCommentFullName, setRepliedCommentFullName] = useState('');
    // const [toggleReplyForm, setToggleReplyForm] = useState(false);
    //redux
    const post = useSelector(state => state.post.post);
    const loading = useSelector(state => state.post.loading);
    const advert = useSelector(state => state.post.advert);
    const error = useSelector(state => state.post.error);
    const allCategories = useSelector(state => state.post.categories);
    const commentDetails = useSelector(state => state.comments.comments)
    const dispatch = useDispatch();
    //params
    const { slug } = useParams();

    useEffect(() => {
        dispatch(fetchAdvert());
        dispatch(fetchPost(slug));
        dispatch(fetchAllCategories());
        dispatch(fetchAllComments(slug));

    }, [slug, dispatch]);

    // console.log(commentDetails)

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
        axios.post(`/${slug}.json`, { "fullName": fullName, "comment": comment, reply: '' })
            .then(res => {
                dispatch(fetchAllComments(slug));
            }).catch(err => console.log(err))

    };

    const submitCommentReplyHandler = (event, id) => {
        console.log('start')
        axios.post(`/${slug}/${id}/reply.json`, { "fullName": repliedCommentFullName, "comment": repliedCommentMessage, "id": id })
            .then(res => {
                dispatch(fetchAllComments(slug));
                // console.log("worked")
            }).catch(err => console.log(err))

    };

    const showReplyBtnHandler = (id) => {
        if (document.querySelector(`#commentReplyForm${id}`).style.display === "grid") {
            document.querySelector(`#commentReplyForm${id}`).style.display = "none";
            document.querySelector(`.replyBtn${id}`).textContent = "Reply";
        } else {
            document.querySelector(`#commentReplyForm${id}`).style.display = "grid";
            document.querySelector(`.replyBtn${id}`).textContent = "Close";
        }
    }

    if (commentDetails) {
        //loop through comments
        for (let key in commentDetails) {
            //loop through comments replies 
            for (let relpies in commentDetails[key].reply) {
                allReplies.push({ ...commentDetails[key].reply[relpies] })
            }
            //push a new object with the comment Full name, message,id and reply
            //it checks if the reply has the same id with the main comment and attaches that to reply
            allComments.push({ ...commentDetails[key], id: key, reply: allReplies.filter(reply => reply.id === key) })
        }
    }

    console.log(allComments)

    if (!loading) {
        if (!error) {

            if (post.publishedAt) {
                //get date into array with two parts and take only the first which contains the date
                getDate = post.publishedAt.split(/[a-z]/i)[0];
                //slpit the date into 3 arrays that has the month, day, year
                splitgetDate = getDate.split(/\W/);
                //check the month to replace the month number with the month name
                month[0] = "January";
                month[1] = "January";
                month[2] = "February";
                month[3] = "March";
                month[4] = "April";
                month[5] = "May";
                month[6] = "June";
                month[7] = "July";
                month[8] = "August";
                month[9] = "September";
                month[10] = "October";
                month[11] = "November";
                month[12] = "December";
                //arrange the date like this 03 november 2021 and pass it to publishedAt props
                newDate = `${splitgetDate[2]} ${month[splitgetDate[1]]} ${splitgetDate[0]}`;

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
                    publishedAt={newDate}
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
                    replyBtn={showReplyBtnHandler}
                    onSubmitCommentReply={submitCommentReplyHandler}
                    repliedCommentFullName={repliedCommentFullName}
                    setRepliedCommentFullName={e => setRepliedCommentFullName(e.target.value)}
                    repliedCommentMessage={repliedCommentMessage}
                    setRepliedCommentMessage={e => setRepliedCommentMessage(e.target.value)}

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
