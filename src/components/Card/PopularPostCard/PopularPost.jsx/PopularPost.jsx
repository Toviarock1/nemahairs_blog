import React from 'react'
import image from './../../../../assets/images/elements-bg.jpg';
import classes from './PopularPost.module.css';
const PopularPost = () => {
    return (
        <div className={classes.PopularPost}>
            <div>
                <img src={image} alt=""  />
            </div>
            <div>
                <a href="/">My inspiration for interior design is more…</a>
                <span>March 8, 2019</span>
            </div>
        </div>
    )
}

export default PopularPost;
