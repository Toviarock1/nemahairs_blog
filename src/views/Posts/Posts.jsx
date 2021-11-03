import React, { useEffect, useState } from 'react'
import client from './../../client';
import BlogCard from '../../components/Cards/BlogCard/BlogCard';
import classes from './Posts.module.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        client.fetch(
            `*[_type == "post"] {
                title,
                slug,
                body,
                "tag": *[_type=='category']{ title },
                author -> {
                    name
                },
                mainImage {
                    asset -> {
                        _id,
                        url
                    },
                    alt
                }
            }`
        ).then(data => {
            setPosts(data)
        }).catch()
    }, []);
    console.log(posts)
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
