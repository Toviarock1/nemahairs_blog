import React from 'react';
import classes from './AdvertisementCard.module.css';

const AdvertisementCard = (props) => {
    return (
        <div className={classes.Advertisement}>
            <a href={props.link}>
                <img src={props.img} alt={props.alt} />
            </a>
        </div>
    )
}

export default AdvertisementCard;
