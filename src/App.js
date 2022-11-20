import React, { Component, lazy } from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import projectData from './projectData.js'
import Canvas from './Components/Canvas/Canvas.js';
import Settings from './Components/Settings/Settings.js';
import './App.css';

const Splash = lazy(() => import('./Components/Splash/Splash.js'));
const Nav = lazy(() => import('./Components/Nav/Nav.js'));
const MobileNav = lazy(() => import('./Components/Nav/MobileNav.js'));
const About = lazy(() => import('./Components/About/About.js'));
const Contact = lazy(() => import('./Components/About/Contact.js'));
const Video = lazy(() => import('./Components/Video/Video.js'));
const Code = lazy(() => import('./Components/Code/Code.js'));
const Project = lazy(() => import('./Components/Project/Project.js'));


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoDisabled: false,
      uniforms: [6.0, 114, 10.64, 81],
    }
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
          <Nav />
          <MobileNav />
            <Switch>
              <Route exact path="/">
                <Splash />
              </Route>
              <Route className='flex' path="/about">
                <About />
              </Route>
              <Route className='flex' path="/contact">
                <Contact />
              </Route>
              <Route className='flex' path="/video">
                <Video />
              </Route>
              <Route className='flex' exact path="/code">
                <Code />
              </Route>
              {
                projectData.map((project, i) => (
                  <Route key={project.name} path={project.path}>
                    <Project project={project} key={i} fxDisabled={this.state.fxDisabled}/>
                  </Route>
                ))
              }
            </Switch>
          <Settings uniforms={this.state.uniforms} toggleVideo={this.toggleVideo} sliderHandler={this.sliderHandler} fxDisabled={this.state.fxDisabled} videoDisabled={this.state.videoDisabled}/>
        </Router>
        <Canvas uniforms={this.state.uniforms} videoDisabled={this.state.videoDisabled}  />
      </div>
    );
  }
}

export default App;
