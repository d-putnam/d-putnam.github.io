import React, { useEffect, useState } from 'react';

function Gradient(props) {

  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  let color1 = `rgba( ${props.colors[0].join(',')}, 0.2)`;
  let color2 = `rgba(${props.colors[1].join(',')}, 0.2)`;
  let color3 = `rgba(${props.colors[2].join(',')}, 0.2)`;

  return (
    <div id="background">
      <svg viewBox={ `0 0 ${windowWidth} ${windowHeight}`} >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(100 .5 .5)"
            xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink">
            <animateTransform attributeName="gradientTransform" 
                  id="spin"
                  attributeType="XML"
                  type="rotate"
                  from="100 .5 .5"
                  to="460 .5 .5"
                  dur="35s"
                  repeatCount="indefinite" />
            <stop id="stop1" 
                  offset="0" 
                  stopColor={ color1 }/>
            <stop id="stop2" 
                  offset=".3" 
                  stopColor={ color2 }>
              <animate attributeName="offset" 
                  id="breath" 
                  dur="40s" 
                  values="0.40; 0.50; 0.40" 
                  repeatCount="indefinite"></animate>
            </stop>
            <stop id="stop3" 
                  offset="1" 
                  stopColor={ color3 }/>     
          </linearGradient> 
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)"/>
      </svg>
    </div>
  );
}

export default Gradient;
