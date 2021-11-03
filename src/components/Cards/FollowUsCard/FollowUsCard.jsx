import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import classes from './FollowUsCard.module.css';

const FollowUsCard = () => {
    return (
        <div className="CardWrapper">
        <div>
            <h3>Follow us</h3>
        </div>
        <div>
            <a href="/" className={classes.IconWrapper}>
                <FaFacebook />
            </a>
            <a href="/" className={classes.IconWrapper}>
                <FaTwitter />
            </a>
            <a href="/" className={classes.IconWrapper}>
                <FaInstagram />
            </a>
            <a href="/" className={classes.IconWrapper}>
                <FaLinkedin />
            </a>
        </div>
    </div>
    )
}

export default FollowUsCard;
