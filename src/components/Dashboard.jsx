import React, { Component } from "react";
import { Col, Grid, Image, Row } from "react-bootstrap";
import Ionicon from "react-ionicons";
import "./Dashboard.css";

export default class Shop extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-gridDash">
          <Col xs={3} md={3} className="frame1">
            <Col xs={3} md={3}>
              <div className="iconPicFrame">
                <Image
                  className="icon-pic"
                  src="assets/greenIcon.png"
                  alt="icon"
                  circle
                />
              </div>
            </Col>
            <Col xs={9} md={9} className="cardH">
              <span>
                <h3>98,420</h3>
              </span>
              <div className="divH5">
                <h5 className="h5Dash">Projected Revenue</h5>
              </div>
            </Col>
          </Col>
          <Col xs={3} md={3} className="frame2">
            <Col xs={3} md={3}>
              <div className="iconPicFrame">
                <Image
                  className="icon-pic"
                  src="assets/blueIcon.png"
                  alt="icon"
                  circle
                />
              </div>
            </Col>
            <Col xs={9} md={9} className="cardH">
              <span>
                <h3>325</h3>
              </span>
              <div className="divH5">
                <h5 className="h5Dash">New users</h5>
              </div>
            </Col>
          </Col>
          <Col xs={3} md={3} className="frame3">
            <Col xs={3} md={3}>
              <div className="iconPicFrame">
                <Image
                  className="icon-pic"
                  src="assets/purpleIcon.png"
                  alt="icon"
                  circle
                />
              </div>
            </Col>
            <Col xs={9} md={9} className="cardH">
              <span>
                <h3>3,567</h3>
              </span>
              <div className="divH5">
                <h5 className="h5Dash">Products sold</h5>
              </div>
            </Col>
          </Col>
          <Col xs={3} md={3} className="frame4">
            <Col xs={3} md={3}>
              <div className="iconPicFrame">
                <Image
                  className="icon-pic"
                  src="assets/orangeIcon.png"
                  alt="icon"
                  circle
                />
              </div>
            </Col>
            <Col xs={9} md={9} className="cardH">
              <span>
                <h3>32</h3>
              </span>
              <div className="divH5">
                <h5 className="h5Dash">Happy clients</h5>
              </div>
            </Col>
          </Col>
        </Row>
        <Row className="show-gridDash2">
          <Col xs={3} md={3} className="frame5">
            <Col xs={3} md={3}>
              <div className="iconPicFrame">
                <Image
                  className="icon-pic"
                  src="assets/greenDarkIcon.png"
                  alt="icon"
                  circle
                />
              </div>
            </Col>
            <Col xs={9} md={9} className="cardH">
              <span>
                <h3>&#36; 98,420</h3>
              </span>
              <div className="divH5">
                <h5>Projected Revenue</h5>
              </div>
            </Col>
          </Col>
          <Col xs={3} md={3} className="frame6">
            <Col xs={3} md={3}>
              <div className="iconPicFrame">
                <Image
                  className="icon-pic"
                  src="assets/blueDarkIcon.png"
                  alt="icon"
                  circle
                />
              </div>
            </Col>
            <Col xs={9} md={9} className="cardH">
              <span>
                <h3>325</h3>
              </span>
              <div className="divH5">
                <h5>New users</h5>
              </div>
            </Col>
          </Col>
          <Col xs={3} md={3} className="frame7">
            <Col xs={3} md={3}>
              <div className="iconPicFrame">
                <Image
                  className="icon-pic"
                  src="assets/purpleDarkIcon.png"
                  alt="icon"
                  circle
                />
              </div>
            </Col>
            <Col xs={9} md={9} className="cardH">
              <span>
                <h3>3,567</h3>
              </span>
              <div className="divH5">
                <h5>Products sold</h5>
              </div>
            </Col>
          </Col>
          <Col xs={3} md={3} className="frame8">
            <Col xs={3} md={3}>
              <div className="iconPicFrame">
                <Image
                  className="icon-pic"
                  src="assets/orangeDarkIcon.png"
                  alt="icon"
                  circle
                />
              </div>
            </Col>
            <Col xs={9} md={9} className="cardH">
              <span>
                <h3>32</h3>
              </span>
              <div className="divH5">
                <h5>Happy clients</h5>
              </div>
            </Col>
          </Col>
        </Row>
      </Grid>
    );
  }
}
