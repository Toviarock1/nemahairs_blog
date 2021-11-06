import React from 'react'
import { useSelector } from 'react-redux';
import Posts from '../../views/Posts/Posts';
import Carousel from './../../views/Carousel/Carousel';

const Home = () => {
    const posts = useSelector(state => state.posts.allPost)
    console.log(posts)
    return (
        <>
            <Carousel />
            <Posts posts={posts} />
        </>
    )
}

export default Home;
