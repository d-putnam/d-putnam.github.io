import React, {Component} from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import Canvas from './Components/Canvas/Canvas.js';
import Splash from './Components/Splash/Splash.js';
import Nav from './Components/Nav/Nav.js';
import About from './Components/About/About.js';
import Contact from './Components/About/Contact.js';
import Video from './Components/Video/Video.js';
import Code from './Components/Code/Code.js';
import Project from './Components/Project/Project.js';
import Settings from './Components/Settings/Settings.js';
import projectData from './projectData.js'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoDisabled: false,
      fxDisabled: /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
      uniforms: [6.0, 114, 86, 81],
    }
  }

  toggleFX = (e) => {
    this.setState({
      fxDisabled: !this.state.fxDisabled
    })
  }
  toggleVideo = (e) => {
    this.setState({
      videoDisabled: !this.state.videoDisabled
    })
  }
  sliderHandler = (e) => {
    let target = Number(e.target.dataset.target);
    let uniforms = this.state.uniforms.map(u => u);
    uniforms[target] = Number(e.target.value);
    this.setState({uniforms: uniforms})
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Nav fxDisabled={this.state.fxDisabled} />
          <GlitchSquiggly baseFrequency={0.32} scaleNoise={0.8} duration={400} disabled={this.state.fxDisabled}>
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
                projectData.map((project, i) => (
                  <Route key={project.name} path={project.path}>
                    <Project project={project} key={i} fxDisabled={this.state.fxDisabled}/>
                  </Route>
                ))
              }
            </Switch>
          </GlitchSquiggly>
          <Settings uniforms={this.state.uniforms} toggleFX={this.toggleFX} toggleVideo={this.toggleVideo} sliderHandler={this.sliderHandler} fxDisabled={this.state.fxDisabled} videoDisabled={this.state.videoDisabled}/>
        </Router>
        <Canvas uniforms={this.state.uniforms} videoDisabled={this.state.videoDisabled}  />
      </div>
    );
  }
}

export default App;
