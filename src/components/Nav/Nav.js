import {Link, useHistory, BrowserRouter as Router} from "react-router-dom";
import { useEffect } from 'react';
import './Nav.css';

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}       

function Nav(props) {

  // logo hover effects
  useEffect(() => {
    let hover = false;

    let logoHover = async (e) => {
      hover = true;
      let i = 0;
      while (hover === true) {
        document.querySelector('.logo').style.color = `rgba(${props.colors[i].join(',')}, 0.65)`;
        i++;
        if (i===5) {
          i = 0;
        }
        await sleep(125);
      }
    }

    let logoExit = (e) => {
      hover = false;
      e.target.style.color = '#252525';
    }

    let logoClick = async (e) => {
      document.querySelector('.logo').removeEventListener("mouseover", logoHover);
      const mouseleaveEvent = new Event('mouseleave');
      document.querySelector('.logo').dispatchEvent(mouseleaveEvent);
      await sleep(5);
      const mouseoverEvent = new Event('mouseover');
      document.querySelector('.logo').dispatchEvent(mouseoverEvent);
    }

    let logo = document.querySelector('.logo')
    logo.addEventListener("mouseover", logoHover);
    logo.addEventListener("mouseleave", logoExit);
    logo.addEventListener("click", logoClick);
    logo.addEventListener("click", props.linkHandlers.linkClick);

    let homeLink = document.querySelector('.home')
    homeLink.addEventListener("click", props.linkHandlers.linkClick);

    return () => {
      logo.removeEventListener("mouseover", logoHover);
      logo.removeEventListener("mouseleave", logoExit);
      logo.removeEventListener("click", logoClick);
      logo.removeEventListener("click", props.linkHandlers.linkClick);   
      homeLink.removeEventListener("click", props.linkHandlers.linkClick); 
    }

  }, [props.colors, props.linkHandlers]);

  
  // history for react-router
  let history = useHistory();

  return (
    <nav>
      <Router>
        <a href="javascript:void(0)" 
           style={{color:'#252525'}} 
           className="logo">
          dan|putnam
        </a>
        <div id="nav-links">
          <Link to={'/'}
            onClick={() => history.push('/')} 
            className="nav-item home">
            work
          </Link>
          <Link to={'/about'}
            onClick={() => history.push('/about')} 
            className="nav-item">
            about
          </Link>
        </div>
      </Router>
    </nav>
  );
}

export default Nav;
