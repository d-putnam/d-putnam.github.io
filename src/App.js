import React, {Component} from 'react';
import Canvas from './Components/Canvas/Canvas.js';
import Splash from './Components/Splash/Splash.js';
import Nav from './Components/Nav/Nav.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Splash />
        <Canvas />
      </div>
    );
  }
}

export default App;
