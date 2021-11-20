import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaPinterestSquare } from 'react-icons/fa';
import classes from './Subcribe.module.css';

const Subcribe = () => {
    return (
        <section className={classes.Subcribe}>
            <div className={classes.Bg}>
                <Container>
                    <Row>
                        <Col className="d-flex" lg={6} xs={12}>
                            <div className={classes.PWrapper}>
                                <p>Last Chance To Win Our Discount!</p>
                            </div>
                            <div className={classes.FormWrapper}>
                                <Form.Control type="email" placeholder="name@example.com" className={classes.FormInput} />
                                <Button className={classes.FormBtn}>subscribe</Button>
                            </div>
                        </Col>
                        <Col className="d-flex mt-3" lg={6} xs={12}>
                            <div className={classes.PWrapper}>
                                <p>Follow us on social media</p>
                            </div>
                            <div className={classes.IconWrapper}>
                                <a href="/">
                                    <FaTwitterSquare className={classes.Icon} />
                                </a>
                                <a href="/" className="mx-2">
                                    <FaFacebookSquare className={classes.Icon} />
                                </a>
                                <a href="/">
                                    <FaInstagramSquare className={classes.Icon} />
                                </a>
                                <a href="/" className="mx-2">
                                    <FaLinkedin className={classes.Icon} />
                                </a>
                                <a href="/">
                                    <FaPinterestSquare className={classes.Icon} />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Subcribe;
