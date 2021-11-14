import React from 'react'
import BlogCard from '../../components/Cards/BlogCard/BlogCard';
import { getPostedDate } from '../../shared/utility';
import classes from './Posts.module.css';

const Posts = (props) => {
    const posts = props.posts;
    return (
        <section className={classes.CardsWrapper}>
            {posts.map((post) => {
                return <BlogCard
                    title={post.title}
                    key={post.title}
                    img={post.mainImage && post.mainImage.asset && post.mainImage.asset.url}
                    slug={post.slug.current}
                    date={getPostedDate(post.publishedAt)}
                    author={post.author.name}

                />
            })}
        </section>
    )
}

export default Posts;
