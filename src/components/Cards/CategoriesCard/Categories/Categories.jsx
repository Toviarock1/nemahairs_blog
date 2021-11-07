import React from 'react'
import classes from './Categories.module.css';

const Categories = (props) => {
    return (
        <div className={classes.Categories}>
        <a href="/">
           {props.category}
        </a>
        <span>{props.categoryLength}</span>
        </div>
    )
}

export default Categories;
