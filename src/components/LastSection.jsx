import React, { Component } from "react";
import { Col, Grid, Image, Row } from "react-bootstrap";
import Ionicon from "react-ionicons";
import "./LastSection.css";

export default class Shop extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-gridLast">
          <Col xs={6} md={8} className="firstLast">
            <Col xs={12} md={12}>
              <span className="btn-last1">
                <a className="btn btn-lastBtn1" href="#">
                  Technology{" "}
                </a>
              </span>
              <span className="btn-last1">
                <a className="btn btn-lastBtn2" href="#">
                  Startups{" "}
                </a>
              </span>
            </Col>

            <Col xs={10} md={10} className="lastText">
              <h2 className="lastH2">Best startups of 2016</h2>
              <br />
              <p className="pLast">
                Business Insider spoke to founders and venture capitalists and
                took a look at funding data to identify some of the startups
                that had the biggest starts in 2016. Some names on the list are
                officially launching out of stealth, while others are still in
                their early months of forming a company.
              </p>
            </Col>

            <Col xs={2} md={2} />

            <Col xs={12} md={12} className="lastBtn2">
              <span className="btn-feat">
                <a className="btn btn-full2" href="#">
                  Read the article{" "}
                  <span>
                    <Ionicon
                      className="arrowIcon"
                      icon="ios-arrow-forward"
                      onClick={() => console.log()}
                      fontSize="20px"
                      color="#fff"
                    />
                  </span>
                </a>
              </span>
            </Col>
          </Col>

          <Col xs={6} md={4} className="secondLast">
            <Col xs={12} md={12} className="picLast">
              <Image
                className="profilePicLast"
                src="assets/gregWillson.jpeg"
                alt="profile picture"
                circle
              />

              <span className="profileNameLast">
                Greg Willson
                <br />
                <span className="profilePosts">17 posts</span>
              </span>
            </Col>
            <Col xs={12} md={12}>
              <h3>Senior Designer isn't a dead end.</h3>
              <br />
              <p className="pLast">
                Position of a Senior Designer isn't the end of your development.
                You can choose various career paths and this point.
              </p>
            </Col>
            <Col xs={12} md={12} className="lastBtn">
              <span className="btn-feat">
                <a className="btn btn-full" href="#">
                  Read the article{" "}
                  <span>
                    <Ionicon
                      className="arrowIcon"
                      icon="ios-arrow-forward"
                      onClick={() => console.log()}
                      fontSize="20px"
                      color="#a5a5a5"
                    />
                  </span>
                </a>
              </span>
            </Col>
          </Col>
        </Row>
      </Grid>
    );
  }
}
