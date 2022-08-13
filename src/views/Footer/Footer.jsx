import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Subcribe from "../../components/Subcribe/Subcribe";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <>
      <Subcribe
        footerFacebookUrl={props.facebookUrl}
        footerTwitterUrl={props.twitterUrl}
        footerInstagramUrl={props.instagramUrl}
        footerLinkedinUrl={props.linkedinUrl}
        footerPinterestUrl={props.pinterestUrl}
      />
      <footer className={classes.Footer}>
        <Container>
          <Row>
            <Col xs={12} lg={3}>
              <div>
                <ul>
                  <li>
                    <h2 className={classes.Logo}>Nemahairs</h2>
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry lorem Ipsum is simply dummy text of
                    industry lorem ipsum is simply dummy typesetting text.
                  </li>
                </ul>
              </div>
            </Col>
            {/* <Col xs={12} lg={3}>
                            <div>
                                <ul>
                                    <li><h4>Categories</h4></li>
                                    <li><a href="/">Women Collection</a></li>
                                    <li><a href="/">Women Collection</a></li>
                                    <li><a href="/">Women Collection</a></li>
                                    <li><a href="/">Women Collection</a></li>
                                    <li><a href="/">Women Collection</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} lg={3}>
                            <div>
                                <ul>
                                    <li><h4>Customer</h4></li>
                                    <li><a href="/">Women Collection</a></li>
                                    <li><a href="/">Women Collection</a></li>
                                    <li><a href="/">Women Collection</a></li>
                                    <li><a href="/">Women Collection</a></li>
                                    <li><a href="/">Women Collection</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} lg={3}>
                            <div>
                                <ul>
                                    <li><h4>Company</h4></li>
                                    <li><a href="/">Women Collection</a></li>
                                    <li><a href="/">Women Collection</a></li>
                                    <li><a href="/">Women Collection</a></li>
                                    <li><a href="/">Women Collection</a></li>
                                    <li><a href="/">Women Collection</a></li>
                                </ul>
                            </div>
                        </Col> */}
          </Row>
          <div className={classes.Copyright}>
            <p>
              &copy; 2021 Nemahairs blog is Proudly Made by{" "}
              <a href="/">Simon Adama</a>
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
