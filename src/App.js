import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Canvas from './Components/Canvas/Canvas.js';
import Splash from './Components/Splash/Splash.js';
import Nav from './Components/Nav/Nav.js';
import MobileNav from './Components/Nav/MobileNav.js';
import About from './Components/About/About.js';
import Contact from './Components/About/Contact.js';
import Blog from './Components/Blog/Blog.js';
import Code from './Components/Code/Code.js';
import Project from './Components/Project/Project.js';
import Settings from './Components/Settings/Settings.js';
import projectData from './projectData.js'
import blogData from './blogData.js'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoDisabled: false,
      uniforms: [0.25, 250, 200, 81],
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
              <Route className='flex' exact path="/blog">
                <Blog />
              </Route>
              {
                blogData.map((project, i) => (
                  <Route key={project.name} path={project.path}>
                    <Project project={project} key={i} fxDisabled={this.state.fxDisabled}/>
                  </Route>
                ))
              }
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
