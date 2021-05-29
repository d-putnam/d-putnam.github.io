import './App.css';
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import genColors from './common/colors.js';
import projectData from './common/projectData.js'
import Gradient from './components/Gradient.js';
import Nav from './components/Nav/Nav.js';
import About from './components/About/About.js';
import Home from './components/Home/Home.js';
import Project from './components/Project/Project.js';


class App extends Component {
  constructor(props) {
    super(props);
    let colors = genColors();
    this.state = {
      colors: colors,
    }
  }

  // shared link hover effects
  linkHandlers = {
    linkClick: (e) => {
      this.setState({colors: genColors()})
      e.preventDefault();
    },
  }

  render() {
    return (
      <div className="App">
        <Gradient colors={this.state.colors} />
        <div id="content">
          <Router>
            <Nav colors={this.state.colors} linkHandlers={this.linkHandlers} />
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <Home colors={this.state.colors} linkHandlers={this.linkHandlers} />
              </Route>
                {projectData.map(project => (
                  <Route path={project.path}>
                    <Project project={project} />
                  </Route>
                ))}
            </Switch>
          </Router>
        </div>
        <footer/>
      </div>
    );
  }

}

export default App;
