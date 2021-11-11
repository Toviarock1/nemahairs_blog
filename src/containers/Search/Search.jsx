import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner';
import CenteredError from './../../components/CenteredError/CenteredError';
import { fetchAllSearchedPost } from '../../store/allPost';
import Posts from '../../views/Posts/Posts';

const Search = () => {
    let content = <CenteredSpinner />;
    //redux
    const posts = useSelector(state => state.posts.searchedPost);
    const loading = useSelector(state => state.posts.loading);
    const error = useSelector(state => state.posts.searchedPostError)
    const dispatch = useDispatch();
    //params
    const { slug } = useParams();

    useEffect(() => {
        dispatch(fetchAllSearchedPost(slug));
    }, [slug, dispatch])

    if (!loading) {
        if (!error) {
            content = (
                <Posts posts={posts} />
            )
        } else {
            content = <CenteredError />
        }

    }

    return (
        content
    )
}

export default Search
