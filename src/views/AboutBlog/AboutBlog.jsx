import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { Container } from 'react-bootstrap';
import classes from './AboutBlog.module.css';

const AboutBlog = (props) => {
    return (
        <section className={classes.AboutBlog}>
            <Container>
                <BlockContent blocks={props.content} projectId="7k0zkofm" dataset="production" />
            </Container>
            <div>
                <h2>The Face Behind Nemahairs</h2>
                <div>
                    <img src={props.img} alt="faith ojone adama" />
                </div>
                <BlockContent blocks={props.author} projectId="7k0zkofm" dataset="production" />
            </div>
        </section>
    )
}

export default AboutBlog;
