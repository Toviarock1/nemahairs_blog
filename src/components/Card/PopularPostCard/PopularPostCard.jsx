import React from 'react'
import PopularPost from './PopularPost.jsx/PopularPost';


const PopularPostCard = () => {
    return (
        <div className="CardWrapper">
            <h3>Popular Post</h3>
            <PopularPost />
            <PopularPost />
            <PopularPost />
        </div>
    )
}

export default PopularPostCard;
