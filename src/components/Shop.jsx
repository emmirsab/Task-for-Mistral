import React, { Component } from "react";
import {
  Col,
  Grid,
  Image,
  Row,
  FormGroup,
  FormControl,
  Carousel
} from "react-bootstrap";
import Ionicon from "react-ionicons";
import "./Shop.css";

export default class Shop extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={4} className="firstFrame">
            <Col xs={11} md={11}>
              <h4>Best new products</h4>
            </Col>
            <Col xs={1} md={1}>
              <Ionicon
                className="moreIcon"
                icon="ios-more"
                onClick={() => console.log()}
                fontSize="40px"
                color="#a5a5a5"
              />
            </Col>
            <Col xs={12} md={12} className="carouselTop">
              <Carousel>
                <Carousel.Item>
                  <img
                    width={500}
                    height={500}
                    alt="fitbit"
                    src="/assets/fitbitSurge.jpg"
                  />
                  <Carousel.Caption>
                    <h3 className="h3carousel">Fitbit Surge</h3>
                    <h4 className="h4carousel">&#36; 159.99</h4>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width={500}
                    height={500}
                    alt="firbit"
                    src="/assets/fitbitBlue.jpg"
                  />
                  <Carousel.Caption>
                    <h3 className="h3carousel">Fitbit Surge Blue</h3>
                    <h4 className="h4carousel">&#36; 159.99</h4>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width={500}
                    height={500}
                    alt="fitbit"
                    src="/assets/fitbitSurge.jpg"
                  />
                  <Carousel.Caption>
                    <h3 className="h3carousel">Fitbit Surge</h3>
                    <h4 className="h4carousel">&#36; 159.99</h4>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width={500}
                    height={500}
                    alt="firbit"
                    src="/assets/fitbitBlue.jpg"
                  />
                  <Carousel.Caption>
                    <h3 className="h3carousel">Fitbit Surge Blue</h3>
                    <h4 className="h4carousel">&#36; 159.99</h4>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Col>
          <Col xs={6} md={8} className="secondFrame">
            <Col xs={11} md={11}>
              <h5 className="h5shop">
                Home / Store / Sound /{" "}
                <span className="headphones">Headphones</span>
              </h5>
            </Col>
            <Col xs={1} md={1}>
              <Ionicon
                className="moreIcon"
                icon="ios-more"
                onClick={() => console.log()}
                fontSize="40px"
                color="#a5a5a5"
              />
            </Col>

            <Col xs={6} md={6} className="carouselTop">
              <Carousel>
                <Carousel.Item>
                  <img
                    width={500}
                    height={500}
                    alt="bose headphones"
                    src="/assets/bose.jpg"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width={500}
                    height={500}
                    alt="bose headphones"
                    src="/assets/bose.jpg"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>

            <Col xs={6} md={6} className="shopRight">
              <Col md="12">
                <h3 className="h3rightShop">QuietComfort 24 </h3>
              </Col>
              <Col md="6">
                <span className="stars">
                  <Ionicon
                    icon="ios-star"
                    onClick={() => console.log()}
                    color="#ed8332"
                  />
                  <Ionicon
                    icon="ios-star"
                    onClick={() => console.log()}
                    color="#ed8332"
                  />
                  <Ionicon
                    icon="ios-star"
                    onClick={() => console.log()}
                    color="#ed8332"
                  />
                  <Ionicon
                    icon="ios-star"
                    onClick={() => console.log()}
                    color="#ed8332"
                  />
                  <Ionicon
                    icon="ios-star"
                    onClick={() => console.log()}
                    color="#c7c7c7"
                  />
                </span>
              </Col>
              <Col xs={6} md="6" className="votes">
                <h5 className="h5votes">4.1 (674 votes)</h5>
              </Col>
              <Col xs={12} md="12">
                <h4 className="h4rigtShop">
                  We've designed our industry-leading headphones with
                  higher-quality materials and finishes. They're lightweight.
                </h4>
              </Col>
              <Col xs={6} md="6" className="priceLeft">
                <h5 className="h5price">Price:</h5>
                <h2 className="h2price">&#36; 249</h2>
              </Col>
              <Col xs={6} md="6" className="priceRight">
                <h5 className="h5ship">Shipping:</h5>
                <h2 className="h2ship">Free</h2>
              </Col>

              <Col xs={6} md="6" className="addBag">
                <a href="#" className="btn-shop1">
                  <span className="shopIcon1">
                    <Ionicon
                      icon="ios-basket"
                      onClick={() => console.log()}
                      fontSize="20px"
                      color="#555"
                    />
                  </span>
                  Add to bag
                </a>
              </Col>
              <Col xs={6} md="6" className="buyNow">
                <a href="#" className="btn-shop2">
                  <span className="shopIcon2">
                    <Ionicon
                      icon="ios-card"
                      onClick={() => console.log()}
                      fontSize="20px"
                      color="#fff"
                    />
                  </span>
                  Buy now
                </a>
              </Col>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={8} className="thirdFrame">
            <Col xs={6} md={6} className="watchText">
              <Col xs={12} md={12}>
                <h2>The smartest clock that was ever made!</h2>
              </Col>
              <Col xs={12} md={12}>
                <p>
                  Apple Watch Edition is available in two beautifully engineered
                  ceramic finishes. And it has all the powerful features of
                  Apple Watch Series 3
                </p>
              </Col>
              <Col xs={12} md={12}>
                <span>
                  <a className="btn btn-features" href="#">
                    Subscribe{" "}
                    <span>
                      <Ionicon
                        className="arrowIcon1"
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
            <Col md={6}>
              <Image
                className="watchImg"
                alt="apple watch"
                src="/assets/appleWatch.jpg"
                responsive
              />
            </Col>
          </Col>

          <Col xs={6} md={4} className="fourthFrame">
            <Col md={12} className="news">
              <h3 className="h3subscribe">Subscribe to newsletter</h3>
              <h5 claasName="h5subscribe">
                Get in touch with fresh news from our company and share it{" "}
              </h5>
            </Col>
            <Col xs={12} md={12}>
              <form>
                <FormGroup controlId="formBasicText" className="imput">
                  <FormControl
                    className="email"
                    type="text"
                    placeholder="Enter your e-mail here"
                    onChange={this.handleChange}
                  />

                  <FormControl.Feedback />
                </FormGroup>
              </form>
            </Col>
            <Col xs={12} md={12} className="newsBtn">
              <span>
                <a className="btn btn-news" href="#">
                  Subscribe{" "}
                  <span>
                    <Ionicon
                      className="checkIcon"
                      icon="ios-checkmark"
                      onClick={() => console.log()}
                      fontSize="35px"
                      color="#fff"
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
