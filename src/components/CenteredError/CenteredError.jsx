import React from 'react';
import classes from './CenteredError.module.css';

const CenteredError = () => {
    return (
        <div className={classes.Wrapper}>
            <div>
                <p>Something Went Wrong</p>
            </div>
        </div>
    )
}

export default CenteredError
