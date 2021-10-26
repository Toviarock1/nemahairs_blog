import React from 'react'
import classes from './BlogCard.module.css';

const BlogCard = () => {
    return (
        <>
            <div className={classes.CardSGridSpace}>
                <div className={classes.Card}>
                    <div>
                        <div className={classes.Tags}>
                            <a className={classes.Tag} href="https://codetheweb.blog/2017/10/06/html-syntax/">HTML</a>
                        </div>
                        <div className={classes.ContentWrapper}>
                            <a href="/" className={classes.Author}>By Faith Adama</a>
                            <h2><a href="/">
                                The syntax of a language is how it works. How to actually write it. Learn HTML syntax
                            </a>
                            </h2>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard
