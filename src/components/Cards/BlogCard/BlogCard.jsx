import React from 'react'
import { Link } from 'react-router-dom';
import classes from './BlogCard.module.css';

const BlogCard = (props) => {
    return (
        <>
            <div className={classes.CardSGridSpace}>
                <Link to={`/post/${props.slug}`} >
                    <div className={classes.Card} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, var(--bg-filter-opacity)),rgba(0, 0, 0, var(--bg-filter-opacity))),url(${props.img})` }}>
                        <div className={classes.Content}>
                            <div className={classes.Tags}>
                                <a className={classes.Tag} href="https://codetheweb.blog/2017/10/06/html-syntax/">{props.date}</a>
                            </div>
                            <div className={classes.ContentWrapper}>
                                <a href="/" className={classes.Author}>{`By ${props.author}`}</a>
                                <h2>
                                    {props.title}
                                </h2>
                            </div>

                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default BlogCard
