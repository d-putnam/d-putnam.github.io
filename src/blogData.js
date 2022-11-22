import React from 'react';
import { Link } from 'react-router-dom';


const blogData = [
  {
    'name': 'about this site',
    'path': '/blog/site',
    'thumbPath': `${process.env.PUBLIC_URL}/img/thumbs/site.png`,
    'description' : () => {return (
      <span>
        admittedly overengineered
      </span>
    )},
    'content': () => {
      return (        
      <div>
        <p>
         My first experience with programming was building elaborate Myspace layouts in high school —
         learning how to hide most of the default sections and reposition the others. 
        </p>
        <p>
         I wanted to bring a similar energy to this portfolio and build a "minimal" site 16-year-old me could be proud of.
        </p>
        <p>
         The background animation is rendered real-time, and you can tweak (or disable) it in the settings menu to the bottom right.
         The changes will follow you throughout the session. If you find that fun, check out my <i><Link to="/code/uwuVS">uwu-VS project</Link></i>.
        </p>
        <p>
         For a cyberpunk / retro terminal feel, I added a radial gradient and made heavy use of a CRT display effect (inspired by <i><a href="https://aleclownes.com/2017/02/01/crt-display.html" target="blank">Alex Clownes's article)</a></i>.
        </p>     
        <p>
         Additional thanks to Serhii Sakal for his <i><a href="https://github.com/sakalx/react-glitch-effect" target="blank">react-glitch-effect library</a></i>, which provides the lovely squiggle animation on the home page links.
        </p>           
      </div>
    )}
  },



  {
    'name': 'a failed project...',
    'path': '/blog/motor',
    'thumbPath': `${process.env.PUBLIC_URL}/img/thumbs/motor.png`,
    'vidList': [
      'https://player.vimeo.com/video/773555857?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=1',
      'https://player.vimeo.com/video/773555902?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=1',
      'https://player.vimeo.com/video/773555940?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=1',
    ],    
    'vidRatio': 'vertical',
    'description' : () => {return (
      <span>
        motors, voltage, bleeps & bloops
      </span>
    )},
    'content': () => {return (        
      <div className="content">
        <p>
            Laurem laurem ipsum ipsum
        </p>
      </div>
    )}
  },



  {
    'name': 'video synthesis',
    'path': '/blog/video',
    'thumbPath': `${process.env.PUBLIC_URL}/img/thumbs/video.png`,
    'vidList': [
      'https://player.vimeo.com/video/183585614?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0',
      'https://player.vimeo.com/video/184250772?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0',
      'https://player.vimeo.com/video/198124962?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0',
      'https://player.vimeo.com/video/210262791?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0',
      'https://player.vimeo.com/video/197636138?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0'
    ],
    'description' : () => {return (
      <span>
        real-time video performance
      </span>
    )},
    'content': () => {return (   
      <div className="content">
        <p>
          Below is a collection of video works created using Max/MSP and OpenGL.
        </p>
        <p>
          Source footage is mangled through a feedback loop of shader effects and manipulated in real-time using a musical control surface.
        </p>
        <p>
          The audio environments are comprised of modular synthesizer, extended bass guitar, and audio effects in various feedback configurations.
        </p>
        <p>
          Photosensitivity warning - frequent strobing effects
        </p> 
      </div>
    )}
  }
];

export default blogData