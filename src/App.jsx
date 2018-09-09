import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import VideoSection from "./components/VideoSection";
import MusicSection from "./components/MusicSection";
import Shop from "./components/Shop";
import Filter from "./components/Filter";
import Dashboard from "./components/Dashboard";
import Chart from "./components/Chart";
import LastSection from "./components/LastSection";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={VideoSection} />
          <Route exact path="/" component={MusicSection} />
          <Route exact path="/" component={Shop} />
          <Route exact path="/" component={Filter} />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/" component={Chart} />
          <Route exact path="/" component={LastSection} />
        </div>
      </Router>
    );
  }
}

export default App;
