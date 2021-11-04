import React, {Component} from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import Canvas from './Components/Canvas/Canvas.js';
import Splash from './Components/Splash/Splash.js';
import Nav from './Components/Nav/Nav.js';
import About from './Components/About/About.js';
import Code from './Components/Code/Code.js';
import Video from './Components/Video/Video.js';
import Project from './Components/Project/Project.js';
import projectData from './projectData.js'
import './App.css';

import Contact from './Components/About/Contact.js';


class App extends Component {

  constructor(props) {
    super(props);
    console.log(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
    this.state = {
      fxDisabled: /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    }
  }

  toggleFX = (e) => {
    this.setState({
      fxDisabled: !this.state.fxDisabled
    })
  }
          
  render() {
    return (
      <div className="App">
        <Router>
          <GlitchSquiggly baseFrequency={0.32} scaleNoise={0.8} duration={400} disabled={this.state.fxDisabled}>
            <Nav fxDisabled={this.state.fxDisabled} />
            <Switch>
              <Route exact path="/">
                <Splash fxDisabled={this.state.fxDisabled} />
              </Route>
              <Route className='flex' path="/about">
                <About fxDisabled={this.state.fxDisabled} />
              </Route>
              <Route className='flex' path="/contact">
                <Contact fxDisabled={this.state.fxDisabled} />
              </Route>
              <Route className='flex' path="/video">
                <Video fxDisabled={this.state.fxDisabled} />
              </Route>
              <Route className='flex' exact path="/code">
                <Code fxDisabled={this.state.fxDisabled} />
              </Route>
              {
                projectData.map(project => (
                  <Route key={project.name} path={project.path}>
                    <Project project={project} />
                  </Route>
                ))
              }
            </Switch>
          </GlitchSquiggly>
        </Router>
        <Canvas toggleFX={this.toggleFX} fxDisabled={this.state.fxDisabled} />
      </div>
    );
  }
}

export default App;
