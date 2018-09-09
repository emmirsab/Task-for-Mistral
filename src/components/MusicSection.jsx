import React, { Component } from "react";
import { Col, Grid, Image, Row } from "react-bootstrap";
import Ionicon from "react-ionicons";
import "./MusicSection.css";
import MusicPlayer from "react-responsive-music-player";

export default class Shop extends Component {
  render() {
    const playlist = [
      {
        url: "/assets/Stardust.mp3",
        cover: "",
        title: "Music",
        artist: ["Stardust"]
      }
    ];
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={3} className="firstMusicFrame">
            <div className="firstPlayer">
              <MusicPlayer
                playlist={playlist}
                progressColor="#3e96de"
                btnColor="#4a4a4a"
              />
            </div>
          </Col>
          <Col xs={6} md={9} className="secondMusicFrame">
            <Col xs={2} md={2}>
              <Image className="playerImage" src="/assets/stardust.png" />
            </Col>
            <Col xs={10} md={10}>
              <div className="secondPlayer">
                <MusicPlayer
                  playlist={playlist}
                  progressColor="#3e96de"
                  btnColor="#4a4a4a"
                />
              </div>
            </Col>
          </Col>
        </Row>
      </Grid>
    );
  }
}
