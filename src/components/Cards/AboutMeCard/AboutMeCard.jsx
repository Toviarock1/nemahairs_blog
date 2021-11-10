import React from 'react'
import BlockContent from '@sanity/block-content-to-react';
import image from './../../../assets/images/Announcement-creatives-3_Article-header.png';

const AboutMeCard = (props) => {
    return (
        <div className="CardWrapper">
            <div>
                <h3>About Me</h3>
            </div>
            <div>
                <img src={props.aboutMeImg} alt="faith ojone adama" />
            </div>
            <p className="Author">{props.aboutMeName}</p>
            <div className="Description">
                <BlockContent blocks={props.aboutMeDescription} projectId="7k0zkofm" dataset="production" />
            </div>
        </div>
    )
}

export default AboutMeCard;
