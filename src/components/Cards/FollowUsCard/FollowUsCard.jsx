import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import classes from "./FollowUsCard.module.css";

const FollowUsCard = (props) => {
  return (
    <div className="CardWrapper">
      <div>
        <h3>Follow us</h3>
      </div>
      <div>
        <a href={props.facebookUrl} className={classes.IconWrapper}>
          <FaFacebook />
        </a>
        <a href={props.twitterUrl} className={classes.IconWrapper}>
          <FaTwitter />
        </a>
        <a href={props.instagramUrl} className={classes.IconWrapper}>
          <FaInstagram />
        </a>
        <a href={props.linkedinUrl} className={classes.IconWrapper}>
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default FollowUsCard;
