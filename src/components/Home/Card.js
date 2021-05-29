//import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";

function Card(props) {

  let history = useHistory();

  let overlayColor = `rgba(${props.colors[3].join(',')}, 1.0)`
  let labelColor = `rgba(${props.colors[3].join(',')}, 0.15)`

  /*
  let linkColor = `rgba(${props.colors[3].join(',')}, 0.65)`

  useEffect(() => {
    let hoverColor = `rgba(${props.colors[3].join(',')}, 1)`
    linkColor = `rgba(${props.colors[3].join(',')}, 0.65)`

    let linkHover = (e) => {
      e.target.style.color = hoverColor;
    };
    let linkExit = (e) => {
      e.target.style.color = linkColor;
    };
    let linkClick = (e) => {
      props.changeColors('data from the child');
      e.preventDefault();
    };

    document.querySelectorAll('.inline-link').forEach(link => {
      link.addEventListener("mouseover", linkHover);
      link.addEventListener("mouseleave", linkExit);
      link.addEventListener("click", linkClick);
    }) 
  }, [props.colors]);
  */
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
