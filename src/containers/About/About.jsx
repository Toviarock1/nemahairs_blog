import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner';
import { fetchAbout } from '../../store/about';
import { fetchAuthor } from '../../store/singlePost';
import AboutBlog from '../../views/AboutBlog/AboutBlog';

const About = () => {
    let content = <CenteredSpinner />;
    const loading = useSelector(state => state.about.loading);
    const about = useSelector(state => state.about.about);
    const author = useSelector(state => state.post.author);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAbout());
        dispatch(fetchAuthor());
    }, [dispatch])

    if(!loading) {
        content = <AboutBlog content={about.body} author={author.bio} img={author.image && author.image.asset && author.image.asset.url} />
    }
    return (
       content
    )
}

export default About
