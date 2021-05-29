//import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";

function Card(props) {

  let history = useHistory();

  let overlayColor = `rgba(${props.colors[3].join(',')}, 1.0)`
  let labelColor = `rgba(${props.colors[3].join(',')}, 0.15)`

  return (
    <Router>
      <div className="Card">
        <a href="javascript:void(0)" onClick={() => history.push(props.project.path)}> 
          <img src={props.project.thumbPath} style={{"width": "100%"}}/>
        <div className="overlay" style={{backgroundColor: overlayColor}}>
          <div className="overlay-text">
            {props.project.description()}
          </div>
        </div>
          <div className="label">
            <div className="label-text" style={{backgroundColor: labelColor}}>
              {props.project.name}
            </div>
          </div>
        </a>
      </div>
    </Router>
  );
}

export default Card;
