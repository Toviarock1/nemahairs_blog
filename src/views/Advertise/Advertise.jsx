import React from "react";
import { Col, Container, Row, Button, Form, InputGroup } from "react-bootstrap";
import {
  GiAcousticMegaphone,
  AiOutlineLineChart,
  MdOutlineMonetizationOn,
} from "react-icons/all";
import image from "./../../assets/svgs/Mobile Marketing-rafiki.svg";
import classes from "./Advertise.module.css";

const Advertise = ({ validated, handleSubmit, disabledBtn }) => {
  return (
    <section className={classes.Advertise}>
      <div className={classes.Bg}>
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <div className={classes.SectionOne}>
                <p>Advertise</p>
                <h2>
                  Increase visibility and sales on Nemahairs with advertising
                </h2>
                <p>
                  Did you know that sponsored ads can help you boost your
                  visibility, reach more shoppers and increase your sales?
                  Sponsored ads campaigns are easy to set up, and we’ll give you
                  $50 in free clicks* to help you get started. Terms and
                  conditions apply.
                </p>
                <Button href="#form">Start Advertising</Button>
              </div>
            </Col>
            <Col xs={12} lg={6}>
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
              <Col className={classes.SectionTwo__Col} xs={12} lg={4}>
                <GiAcousticMegaphone className={classes.Icons} />
                <h4>Get discovered</h4>
                <p>
                  Advertising provides a visibility boost to your brand and
                  products. Ads appear in highly visible placements, within
                  shopping results or on product detail pages.
                </p>
              </Col>
              <Col className={classes.SectionTwo__Col} xs={12} lg={4}>
                <AiOutlineLineChart className={classes.Icons} />
                <h4>Increase sales</h4>
                <p>
                  Many shoppers come to Nemahairs ready to buy. Advertising can
                  help you reach customers who are looking for products like
                  yours.
                </p>
              </Col>
              <Col className={classes.SectionTwo__Col} xs={12} lg={4}>
                <div>
                  <MdOutlineMonetizationOn className={classes.Icons} />
                </div>
                <h4>Low cost</h4>
                <p>
                  Pay only for the clicks your ads receive. Campaign reports
                  track ad spend and performance, so you can learn what’s
                  working and fine-tune your campaigns.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className={classes.SectionThree} id="form">
        <Container>
          <h3>Advertise now</h3>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control required type="text" name="firstname" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control required type="text" name="lastname" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Company name</Form.Label>
                <Form.Control required type="text" name="companyname" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Company email</Form.Label>
                <Form.Control required type="email" name="companyemail" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Phone number</Form.Label>
                <Form.Control required type="number" name="phonenumber" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Country</Form.Label>
                <Form.Control required type="text" name="country" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control required type="textarea" name="message" />
            </Form.Group>
            <Button type="submit" disabled={disabledBtn}>
              Submit form
            </Button>
          </Form>
        </Container>
      </div>
    </section>
  );
};

export default Advertise;
