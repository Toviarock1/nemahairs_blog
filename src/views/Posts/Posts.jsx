import React from 'react'
import BlogCard from '../../components/BlogCard/BlogCard';
import classes from './Posts.module.css';

const Posts = () => {
    return (
        <section className={classes.CardsWrapper}>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </section>
    )
}

export default Posts;
