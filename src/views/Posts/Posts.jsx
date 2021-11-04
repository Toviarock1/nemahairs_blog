import React from 'react'
import BlogCard from '../../components/Cards/BlogCard/BlogCard';
import classes from './Posts.module.css';

const Posts = (props) => {
    const posts = props.posts;
    return (
        <section className={classes.CardsWrapper}>
            {posts.map((post) => {
                return <BlogCard
                    title={post.title}
                    key={post.title}
                    img={post.mainImage.asset.url}
                    slug={post.slug.current}
                    tag={post.tag[0].title}
                    author={post.author.name}

                />
            })}
        </section>
    )
}

export default Posts;
