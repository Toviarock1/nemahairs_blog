import React from 'react'
import { Button } from 'react-bootstrap';
import image from './../../../assets/images/Announcement-creatives-3_Article-header.png';
import classes from './AdvertisementCard.module.css';

const AdvertisementCard = () => {
    return (
        <div className={classes.Advertisement}>
            <a href="/">
                <img src={image} />
            </a>
        </div>
    )
}

export default AdvertisementCard;
