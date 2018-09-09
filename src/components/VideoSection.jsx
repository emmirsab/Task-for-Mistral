import React, { Component } from "react";
import { Col, Grid, Image, Row } from "react-bootstrap";
import Ionicon from "react-ionicons";
import { BigPlayButton, ControlBar, Player } from "video-react";
import "./VideoSection.css";

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={9} className="frame">
            <Player
              className="playerBig"
              playsInline
              poster="/assets/lotr.jpg"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            >
              <ControlBar autoHide={false} className="my-class" />
              <BigPlayButton position="center" />
            </Player>
            <Col xs={12} md={12}>
              <h3 className="h3video">
                The Lord of the Rings: The Fellowship of the Ring (official
                trailer)
              </h3>
              <div className="parag">
                <p>
                  The Lord of the Rings is an epic high-fantasy novel written by
                  English author J.R.R. Tolkien. The story began as a sequel to
                  Tolkien's 1937 fantasy novel The Hobbit, but eventually
                  developed into a much larger work.
                </p>
              </div>
            </Col>
            <Col xs={12} md={12}>
              <div className="symbols">
                <span className="symbol1">
                  <Ionicon
                    icon="md-play"
                    onClick={() => console.log()}
                    color="#f4f4f4"
                  />
                  <span className="symNumb">12,434,934</span>
                </span>
                <span className="symbol2">
                  <Ionicon
                    icon="md-heart"
                    onClick={() => console.log()}
                    color="#f4f4f4"
                  />
                  <span className="symNumb">6,563</span>
                </span>
                <span className="symbol3">
                  <Ionicon
                    icon="md-chatbubbles"
                    onClick={() => console.log()}
                    color="#f4f4f4"
                  />
                  <span className="symNumb">831</span>
                </span>
              </div>
            </Col>
            <br />
            <Col xs={12} md={12} className="profile-section">
              <Col xs={2} md={2} className="">
                <Image
                  className="profile-pic"
                  src="assets/saraJameson.jpeg"
                  alt="profile picture"
                  circle
                  responsive
                />
              </Col>
              <Col xs={2} md={2} className="nameProf">
                <span className="profileName">
                  Sara Jameson
                  <br />
                  <span className="profileFollowers">12,353 followers</span>
                </span>
              </Col>
              <Col xs={6} md={6} className="followbutton">
                <span>
                  <a className="btnFol btn-follow" href="#">
                    Subscribe{" "}
                    <span>
                      <Ionicon
                        className="addIcon"
                        icon="md-add"
                        onClick={() => console.log()}
                        fontSize="20px"
                        color="#fff"
                      />
                    </span>
                  </a>
                </span>
              </Col>

              <Col xs={2} md={2} className="profile-section2">
                <span className="upl">
                  <div>
                    <span className="upl2">Uploaded:</span>
                    <br />
                    <span className="dat">8 March, 2007</span>
                  </div>
                </span>
              </Col>
            </Col>
          </Col>

          <Col xs={12} md={3} className="frameSmall">
            <Col xs={12} md={12} className="fs1">
              <h4>Related videos</h4>
            </Col>
            <Col xs={12} md={12} className="fs2">
              <div className="smallPlayerSection">
                <Player
                  className="playerSmall"
                  playsInline
                  poster="/assets/lotr.jpg"
                  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                  fluid={false}
                  width={263}
                  height={127}
                >
                  <ControlBar autoHide={false} className="my-class" />
                  <BigPlayButton position="center" />
                </Player>
              </div>
            </Col>

            <Col xs={12} md={12} className="fsh6">
              <h6>The Lord of the Rings - Best Scene of the movie (HD)</h6>
            </Col>

            <Col xs={12} md={12} className="fsIcon1">
              <span className="symbol1">
                <Ionicon
                  icon="md-play"
                  onClick={() => console.log()}
                  color="#f4f4f4"
                />
                <span className="symNumb4">8,204,301</span>
              </span>
            </Col>

            <Col xs={12} md={12} className="fs3">
              <div className="smallPlayerSection">
                <Player
                  className="playerSmall"
                  playsInline
                  poster="/assets/lotr.jpg"
                  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                  fluid={false}
                  width={263}
                  height={127}
                >
                  <ControlBar autoHide={false} className="my-class" />
                  <BigPlayButton position="center" />
                </Player>
              </div>
            </Col>

            <Col xs={12} md={12} className="fsh6">
              <h6>LOTR: The Two Towers - The Battle of the Hornburg</h6>
            </Col>

            <Col xs={12} md={12} className="fsIcon1">
              <span className="symbol1">
                <Ionicon
                  icon="md-play"
                  onClick={() => console.log()}
                  color="#f4f4f4"
                />
                <span className="symNumb4">2,857,112</span>
              </span>
            </Col>

            <Col xs={12} md={12} className="fs4">
              <div className="smallPlayerSection">
                <Player
                  className="playerSmall"
                  playsInline
                  poster="/assets/lotr.jpg"
                  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                  fluid={false}
                  width={263}
                  height={127}
                >
                  <ControlBar autoHide={false} className="my-class" />
                  <BigPlayButton position="center" />
                </Player>
              </div>
            </Col>

            <Col xs={12} md={12} className="fsh6">
              <h6>Lord of The Rings - Battle of Helms Deep Opening</h6>
            </Col>

            <Col xs={12} md={12} className="fsIcon1">
              <span className="symbol1">
                <Ionicon
                  icon="md-play"
                  onClick={() => console.log()}
                  color="#f4f4f4"
                />
                <span className="symNumb4">3,642,730</span>
              </span>
            </Col>
          </Col>
        </Row>
      </Grid>
    );
  }
}
