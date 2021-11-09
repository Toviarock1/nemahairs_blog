import React from 'react'
import { useSelector } from 'react-redux';
import CenteredError from '../../components/CenteredError/CenteredError';
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner';
import Posts from '../../views/Posts/Posts';
import Carousel from './../../views/Carousel/Carousel';

const Home = () => {
    const posts = useSelector(state => state.posts.allPost);
    const loading = useSelector(state => state.posts.loading);
    let content = <CenteredSpinner />;

    if (!loading) {
        if(posts) {
            content = (
                <>
                    <Carousel />
                    <Posts posts={posts} />
                </>
            );
        }else{
            content= <CenteredError />
        }
        
    }

    console.log(posts)
    return (
        content
    )
}

export default Home;
