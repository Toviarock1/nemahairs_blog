import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Post from '../../views/Post/Post'
import client from './../../client'
const SinglePost = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const { slug } = useParams();

    useEffect(() => {
        client.fetch(
            `*[slug.current == "${slug}"] {
                title,
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
            setPost(data[0])
            setLoading(false)
        })
    }, [slug]);
    console.log(post)

    return (
        <>
            <Post
                loading={loading}
                title={post.title}
                img={ post.mainImage && post.mainImage.asset && post.mainImage.asset.url }
                content={post.body}
            />
        </>
    )
}

export default SinglePost
