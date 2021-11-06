import React from 'react'
import { Spinner } from 'react-bootstrap'; 
import classes from './CenteredSpinner.module.css';

const CenteredSpinner = () => {
    return (
        <div className={classes.Wrapper}>
            <div>
                <Spinner animation="grow" />
            </div>
        </div>
    )
}

export default CenteredSpinner
