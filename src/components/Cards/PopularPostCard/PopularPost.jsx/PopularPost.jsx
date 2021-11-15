import React from 'react'
import { Link } from 'react-router-dom';
import classes from './PopularPost.module.css';
const PopularPost = (props) => {
    return (
        <div className={classes.PopularPost}>
            <div>
                <img src={props.img} alt={props.title}  />
            </div>
            <div>
                <Link to={`/post/${props.slug}`}>{props.title}</Link>
                <span>{props.date}</span>
            </div>
        </div>
    )
}

export default PopularPost;
