import React, {Component} from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Canvas from './Components/Canvas/Canvas.js';
import Splash from './Components/Splash/Splash.js';
import Nav from './Components/Nav/Nav.js';
import About from './Components/About/About.js';
import Code from './Components/Code/Code.js';
import Video from './Components/Video/Video.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
  //         
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Splash />
            </Route>
            <Route path="/about">
              <Nav />
              <About />
            </Route>
            <Route path="/video">
              <Nav />
              <Video />
            </Route>
            <Route path="/code">
              <Nav />
              <Code />
            </Route>
          </Switch>
        </Router>

        <Canvas />
      </div>
    );
  }
}

export default App;
