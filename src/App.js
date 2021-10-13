import React, {Component} from 'react';
import Canvas from './Components/Canvas/Canvas.js';
import Splash from './Components/Splash/Splash.js';
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
        <Splash />
        <Canvas />
      </div>
    );
  }
}

export default App;
