import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner';
import { fetchAllSearchedPost } from '../../store/allPost';
import Posts from '../../views/Posts/Posts';

const Search = () => {
    let content = <CenteredSpinner />;
    //redux
    const posts = useSelector(state => state.posts.searchedPost);
    const loading = useSelector(state => state.posts.loading);
    const dispatch = useDispatch();
    //params
    const { slug } = useParams();

    useEffect(() => {
        dispatch(fetchAllSearchedPost(slug));
    }, [slug,dispatch])
    
    if(!loading) {
        content = (
            <Posts posts={posts} />
        )
    }

    return (
       content
    )
}

export default Search
