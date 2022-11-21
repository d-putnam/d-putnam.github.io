import React from 'react';

const blogData = [
  {
    "name": "about this site",
    "path": "/blog/site",
    "thumbPath": `${process.env.PUBLIC_URL}/img/thumbs/site.png`,
    "imgPath": "none",
    "url": "https://dputnam.net/uwuVS",
    "description" : () => {return (
      <span>
        admittedly overengineered
      </span>
    )},
    "content": () => {
      return (        
      <div>
        <p>
         My first programming memory is writing elaborate Myspace layouts in high school. 
         I loved to spend time tweaking the HTML & CSS to reflect my own strange aesthetic.
         I don't use much social media these days, but I do miss the 
        </p>
      </div>
    )}
  },



  {
    "name": 'a failed project...',
    "path": "/blog/motor",
    "thumbPath": `${process.env.PUBLIC_URL}/img/thumbs/motor.png`,
    "imgPath" : "none",
    "url": "https://dputnam.net/polymtr",
    "iframe": "https://player.vimeo.com/video/457362064?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0",
    "iframeRatio": "55.0",
    "description" : () => {return (
      <span>
        motors, voltage, bleeps & bloops
      </span>
    )},
    "content": () => {return (        
      <div className="content">
        <p>
            Laurem laurem ipsum ipsum
        </p>
        <p>
            <a href="https://dputnam.net/polymtr/" target="blank" 
               className="projectLink">
              Try it out here</a> 
            <span className="or">or</span>
            <a href="https://github.com/d-putnam/polymtr" target="blank" 
               className="projectLink">view the source code
            </a>
        </p>
      </div>
    )}
  },



  {
    "name": "video synthesis",
    "path": "/blog/video",
    "thumbPath": `${process.env.PUBLIC_URL}/img/thumbs/video.png`,
    "vidList": [
      'https://player.vimeo.com/video/184250772?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0',
      'https://player.vimeo.com/video/183585614?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0',
      'https://player.vimeo.com/video/198124962?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0',
      'https://player.vimeo.com/video/210262791?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0',
      'https://player.vimeo.com/video/197636138?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0'
    ],
    "description" : () => {return (
      <span>
        real-time video programming
      </span>
    )},
    "content": () => {return (   
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