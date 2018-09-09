import React, { Component } from "react";
import { Col, Grid, Row, FormGroup, FormControl } from "react-bootstrap";
import Ionicon from "react-ionicons";
import Calendar from "react-calendar";
import "./Filter.css";

export default class Shop extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });
  render() {
    return (
      <Grid>
        <Row className="show-gridFilter">
          <Col xs={4} md={3} className="firstFilterFrame">
            <div className="calendar">
              <Calendar onChange={this.onChange} value={this.state.date} />
            </div>
          </Col>
          <Col xs={4} md={3} className="secondFilterFrame">
            <Col xs={6} md={6} className="secFil">
              <h4>Filters</h4>
            </Col>
            <Col xs={6} md={6} className="secFil2">
              <h5 className="h5Filter">Clear all</h5>
              <span className="trashIcon">
                <Ionicon
                  icon="ios-trash-outline"
                  onClick={() => console.log()}
                  fontSize="20px"
                  color="#555"
                />
              </span>
            </Col>
            <Col xs={12} md={12} className="secFil3">
              <h4>Brand:</h4>
            </Col>
            <Col xs={4} md={4} className="">
              <span>
                <a className="link1" href="#">
                  Sony
                </a>
              </span>
            </Col>
            <Col xs={4} md={4} className="">
              <span>
                <a className="link1" href="#">
                  Apple
                </a>
              </span>
            </Col>
            <Col xs={4} md={4} className="">
              <span>
                <a className="link1" href="#">
                  Bose
                </a>
              </span>
            </Col>
            <Col xs={4} md={4} className="">
              <span>
                <a className="link1" href="#">
                  Dell
                </a>
              </span>
            </Col>
            <Col xs={4} md={4} className="">
              <span>
                <a className="link1" href="#">
                  LG
                </a>
              </span>
            </Col>
            <Col xs={4} md={4} className="">
              <span>
                <a className="link1" href="#">
                  Samsung
                </a>
              </span>
            </Col>
            <Col xs={4} md={4} className="">
              <span>
                <a className="link1" href="#">
                  Huawei
                </a>
              </span>
            </Col>
            <Col xs={4} md={4} className="">
              <span>
                <a className="link1" href="#">
                  HP
                </a>
              </span>
            </Col>
            <Col xs={12} md={12} className="secFil4">
              <h4>Price range:</h4>
            </Col>
            <Col xs={6} md={6} className="">
              <form>
                <FormGroup controlId="formBasicText">
                  <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="From"
                    onChange={this.handleChange}
                  />
                  <FormControl.Feedback />
                </FormGroup>
              </form>
            </Col>
            <Col xs={6} md={6} className="">
              <form>
                <FormGroup controlId="formBasicText">
                  <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="To"
                    onChange={this.handleChange}
                  />
                  <FormControl.Feedback />
                </FormGroup>
              </form>
            </Col>
            <Col xs={12} md={12} className="dropAll">
              <div className="dropFil">
                <div className="dropName">Another option</div>
                <div className="dropDrop">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} className="dropAll">
              <div className="dropFil">
                <div className="dropName">Pricing option</div>
                <div className="dropDrop">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} className="filterBtn">
              <span>
                <a className="btn btn-filter" href="#">
                  Apply filters{" "}
                  <span>
                    <Ionicon
                      className="checkIconFilter"
                      icon="ios-checkmark"
                      onClick={() => console.log()}
                      fontSize="30px"
                      color="#fff"
                    />
                  </span>
                </a>
              </span>
            </Col>
          </Col>
          <Col xs={4} md={3} className="thirdFilterFrame">
            <Col xs={12} md={12}>
              <h4>Categories</h4>
            </Col>
            <Col xs={12} md={12} className="dropAll">
              <div className="dropFil">
                <div className="dropName">Computers</div>
                <div className="dropDrop">
                  <a href="#">PC</a>
                  <a href="#">MAC</a>
                  <a href="#">Laptops</a>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} className="dropAll">
              <div className="dropFil">
                <div className="dropName">Monitors</div>
                <div className="dropDrop">
                  <a href="#">Full HD</a>
                  <a href="#">HDR</a>
                  <a href="#">4K</a>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} className="dropAll">
              <div className="dropFil">
                <div className="dropName">Projectors</div>
                <div className="dropDrop">
                  <a href="#">Internal</a>
                  <a href="#">External</a>
                  <a href="#">Led</a>
                  <a href="#">Small</a>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} className="dropAll">
              <div className="dropFil">
                <div className="dropName">Lights</div>
                <div className="dropDrop">
                  <a href="#">Led</a>
                  <a href="#">Smart Led</a>
                  <a href="#">Adapters</a>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} className="dropAll">
              <div className="dropFil">
                <div className="dropName">Controllers</div>
                <div className="dropDrop">
                  <a href="#">PS4</a>
                  <a href="#">XBox</a>
                  <a href="#">Nintendo</a>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} className="dropAll">
              <div className="dropFil">
                <div className="dropName">Consols</div>
                <div className="dropDrop">
                  <a href="#">PS4</a>
                  <a href="#">XBox</a>
                  <a href="#">Nintendo</a>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} className="dropAll">
              <div className="dropFil">
                <div className="dropName">Extras</div>
                <div className="dropDrop">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </Col>
          </Col>
        </Row>
      </Grid>
    );
  }
}
