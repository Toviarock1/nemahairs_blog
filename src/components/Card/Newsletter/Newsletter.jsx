import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap'
import classes from './Newsletter.module.css';

const Newsletter = () => {
    return (
        <div className="CardWrapper">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter and stay updated to our best offers and deals!</p>
            <InputGroup className={classes.FormWrapper}>
                <FormControl
                    placeholder="Enter Your Email"
                    aria-label="email"
                    aria-describedby="email_bar"
                    className={classes.Input}
                />
                <Button className={classes.Btn} variant="outline-secondary" id="button-addon2">
                    subcribe
                </Button>
            </InputGroup>
        </div>
    )
}

export default Newsletter;
