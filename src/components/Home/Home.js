import './Home.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Card from './Card.js'
import projectData from '../../common/projectData.js'

function Home(props) {

  document.title = 'd.putnam'

  // apply link hover effects
  useEffect(() => {
    let link = document.querySelector('.inline-link')
    link.addEventListener("click", props.linkHandlers.linkClick);

    return () => {
      link.removeEventListener("click", props.linkHandlers.linkClick);
    }
  }, [props.colors, props.linkHandlers]);

  return (
    <div className="Home">
      <div className="home-text">
        <p>
          Welcome to my programming and design sandbox!
        </p>
        <p> 
          This site generates a&nbsp;
          <Link to={'/'} 
            className="inline-link home">
            random color pallette
          </Link>
          on each visit ツ
        </p>
        <p>
          Check out a few of my projects below:
        </p>
      </div>
      <div className="card-wrap">
        {projectData.map(project => (
          <Card project={project} colors={props.colors}/>
        ))}
      </div>
    </div>
  );
}

export default Home;
