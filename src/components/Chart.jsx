import React, { Component } from "react";
import {
  Col,
  Grid,
  Row
} from "react-bootstrap";
import Ionicon from "react-ionicons";
import {
  Chart,
  Axis,
  Series,
  Tooltip,
  Cursor,
  Line,
  primaryAxisShow,
  secondaryAxisShow,
  Bar,
  Pie
} from "react-charts";
import "./Chart.css";

export default class Shop extends Component {
  render() {
    const data = [
      {
        label: "Series 1",
        data: [{ x: 40, y: 0 }, { x: 50, y: 10 }, { x: 100, y: 20 }],
        color: "#6ed221"
      },
      {
        label: "Series 2",
        data: [{ x: 40, y: 0 }, { x: 50, y: 30 }, { x: 80, y: 40 }]
      }
    ];

    return (
      <Grid>
        <Row className="show-gridChart">
          <Col xs={12} md={4} className="firstChartFrame firstFrame">
            <Col xs={10} md={10}>
              <h4>Statistics</h4>
            </Col>
            <Col xs={2} md={2}>
              <Ionicon
                className="moreIcon"
                icon="ios-more"
                onClick={() => console.log()}
                fontSize="40px"
                color="#a5a5a5"
              />
            </Col>
            <Col xs={6} md={6} className="chartBorder">
              <span>
                <h2 className="h2Chart">54 &#37;</h2>
              </span>
              <div className="divH5">
                <h5 className="h5Chart">2,341 new customers</h5>
              </div>
            </Col>
            <Col xs={6} md={6} className="chartBorder">
              <div className="upIn">
                <span class="dot1" />
                Upcoming
                <br />
                <span class="dot2" />
                Incoming
              </div>
            </Col>
            <div className="firstChart">
              <Chart data={data}>
                <Axis
                  primary
                  type="time"
                  position="bottom"
                  show={primaryAxisShow}
                />
                <Axis type="linear" position="left" show={secondaryAxisShow} />
                <Series type={Line} />
                <Cursor primary />
                <Cursor />
                <Tooltip />
              </Chart>
            </div>
          </Col>

          <Col xs={12} md={4} className=" secondChartFrame firstFrame">
            <Col xs={10} md={10}>
              <h4>Statistics</h4>
            </Col>
            <Col xs={2} md={2}>
              <Ionicon
                className="moreIcon"
                icon="ios-more"
                onClick={() => console.log()}
                fontSize="40px"
                color="#a5a5a5"
              />
            </Col>
            <Col xs={12} md={12} className="links chartBorder">
              <span className="borderChart">
                <span>
                  <a className="link1" href="#">
                    Yearly
                  </a>
                </span>
                <span>
                  <a className="link2" href="#">
                    Monthly
                  </a>
                </span>
                <span>
                  <a className="link3" href="#">
                    Daily
                  </a>
                </span>
              </span>
            </Col>
            <Col xs={12} md={12} className="sales">
              <span>
                <h2 className="h2Chart">1,829</h2>
              </span>
              <div className="divH5">
                <h5 className="h5Chart">Sales</h5>
              </div>
            </Col>
            <div className="secondChart">
              <Chart data={data}>
                <Axis primary type="ordinal" />
                <Axis type="linear" min={0} max={0} stacked />
                <Series type={Bar} />
                <Cursor primary />
                <Cursor />
                <Tooltip />
              </Chart>
            </div>
          </Col>

          <Col xs={12} md={4} className=" thirdChartFrame firstFrame">
            <Col xs={10} md={10}>
              <h4>Statistics</h4>
            </Col>
            <Col xs={2} md={2}>
              <Ionicon
                className="moreIcon"
                icon="ios-more"
                onClick={() => console.log()}
                fontSize="40px"
                color="#a5a5a5"
              />
            </Col>
            <Col xs={12} md={12} className="links chartBorder">
              <span className="borderChart">
                <span>
                  <a className="link1" href="#">
                    Yearly
                  </a>
                </span>
                <span>
                  <a className="link2" href="#">
                    Monthly
                  </a>
                </span>
                <span>
                  <a className="link3" href="#">
                    Daily
                  </a>
                </span>
              </span>
            </Col>
            <Col xs={4} md={4}>
              <div className="upIn">
                <span class="dot3" />
                &#60; 18 y.o.
                <br />
                <h4 className="h4Chart">48 &#37;</h4>
              </div>
            </Col>
            <Col xs={4} md={4}>
              <div className="upIn">
                <span class="dot4" />
                &#60; 18-22 y.o.
                <br />
                <h4 className="h4Chart">24 &#37;</h4>
              </div>
            </Col>
            <Col xs={4} md={4}>
              <div className="upIn">
                <span class="dot5" />
                &#60; 23-30 y.o.
                <br />
                <h4 className="h4Chart">16 &#37;</h4>
              </div>
            </Col>

            <div className="thirdChart">
              <Chart data={data}>
                <Axis type="pie" />
                <Series type={Pie} showPoints={false} />
                <Tooltip />
              </Chart>
            </div>

            <Col xs={4} md={4} className="bottomPie">
              <span>
                <h2 className="h2Chart">54 &#37;</h2>
              </span>
              <div className="divH5">
                <h5 className="h5Chart">Revenue</h5>
              </div>
            </Col>
            <Col xs={4} md={4} className="bottomPie botPie">
              <span>
                <h2 className="h2Chart">253</h2>
              </span>
              <div className="divH5">
                <h5 className="h5Chart">Sales</h5>
              </div>
            </Col>
            <Col xs={4} md={4} className="bottomPie">
              <span>
                <h2 className="h2Chart">18</h2>
              </span>
              <div className="divH5">
                <h5 className="h5Chart">Contracts</h5>
              </div>
            </Col>
          </Col>
        </Row>
      </Grid>
    );
  }
}
