import React from 'react'
import image from './../../../assets/images/Announcement-creatives-3_Article-header.png';

const AboutMeCard = () => {
    return (
        <div className="CardWrapper">
            <div>
                <h3>About Me</h3>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
            <p className="Author">Faith Adama</p>
            <p className="Description">Welcome to everyday my lifestyle I'm melody rose printing & typesetting industry.</p>
        </div>
    )
}

export default AboutMeCard;
