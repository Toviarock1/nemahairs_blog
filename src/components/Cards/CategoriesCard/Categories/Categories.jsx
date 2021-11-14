import React from 'react'
import classes from './Categories.module.css';

const Categories = (props) => {
    return (
        <div className={classes.Categories}>
        <a href="/">
           {props.category}
        </a>
        <div>{props.categoryLength}</div>
        </div>
    )
}

export default Categories;
