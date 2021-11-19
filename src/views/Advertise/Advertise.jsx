import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import { GiAcousticMegaphone, AiOutlineLineChart, MdOutlineMonetizationOn } from 'react-icons/all'
import image from './../../assets/svgs/Mobile Marketing-rafiki.svg';
import classes from './Advertise.module.css';

const Advertise = () => {
    return (
        <section className={classes.Advertise}>
            <div className={classes.Bg}>
                <Container>
                    <Row>
                        <Col>
                            <div className={classes.SectionOne}>
                                <p>Advertise</p>
                                <h2>Increase visibility and sales on Nemahairs with advertising</h2>
                                <p>Did you know that sponsored ads can help you boost your visibility, reach more shoppers and increase your sales? Sponsored ads campaigns are easy to set up, and we’ll give you $50 in free clicks* to help you get started. Terms and conditions apply.</p>
                                <Button>Start Advertising</Button>
                            </div>
                        </Col>
                        <Col>
                            <img src={image} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={classes.SectionTwo}>
                <Container>
                    <h3>Achieve your business goals</h3>
                    <div>
                        <Row>
                            <Col className={classes.SectionTwo__Col}>
                                <GiAcousticMegaphone className={classes.Icons} />
                                <h4>Get discovered</h4>
                                <p>
                                    Advertising provides a visibility boost to your brand and products. Ads appear in highly visible placements, within shopping results or on product detail pages.
                                </p>
                            </Col>
                            <Col className={classes.SectionTwo__Col}>
                                <AiOutlineLineChart className={classes.Icons} />
                                <h4>Increase sales</h4>
                                <p>
                                    Many shoppers come to Amazon ready to buy. Advertising can help you reach customers who are looking for products like yours.
                                </p>
                            </Col>
                            <Col className={classes.SectionTwo__Col}>
                                <div>
                                    <MdOutlineMonetizationOn className={classes.Icons} />
                                </div>
                                <h4>Low cost</h4>
                                <p>
                                    Pay only for the clicks your ads receive. Campaign reports track ad spend and performance, so you can learn what’s working and fine-tune your campaigns.
                                </p>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </div>

        </section>
    )
}

export default Advertise
