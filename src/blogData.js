import React from 'react';

const blogData = [
  {
    "name": "about this site",
    "path": "/code/uwuVS",
    "thumbPath": `${process.env.PUBLIC_URL}/img/thumbs/uwu_thumb.png`,
    "imgPath": "none",
    "url": "https://dputnam.net/uwuVS",
    "iframe": "https://player.vimeo.com/video/445293885?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0",
    "iframeRatio": "47.9",
    "description" : () => {return (
      <span>
        In-browser video synthesizer written in JavaScript/WebGL (React app)
      </span>
    )},
    "content": () => {
      return (        
      <div>
        <p>
         uwu-VS is an in-browser video instrument inspired by analog video synthesis, built using Three.JS and React.
        </p>
        <p>
          Shader settings can be controlled via the provided user interface or external MIDI control. Slider presets can be saved and sequenced via MIDI.
        </p>
        <p>
          <a href="https://dputnam.net/uwuVS/" target="blank" className="projectLink">
            Try it out here</a>
          <span className="or">or</span>
          <a href="https://github.com/d-putnam/uwuVS"     
          target="blank" className="projectLink">view the source code</a>
        </p>
        <p>
          Below you can find a short demo in which uwu-VS is modulated by a quadrature MIDI LFO sent from Max/MSP.
        </p>
      </div>
    )}
  },



  {
    "name": "a failed project...",
    "path": "/code/polymtr",
    "thumbPath": `${process.env.PUBLIC_URL}/img/thumbs/poly_thumb.png`,
    "imgPath" : "none",
    "url": "https://dputnam.net/polymtr",
    "iframe": "https://player.vimeo.com/video/457362064?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0",
    "iframeRatio": "55.0",
    "description" : () => {return (
      <span>
        Polymetric drum sequencer written in JavaScript/Tone.JS (React app)
      </span>
    )},
    "content": () => {return (        
      <div className="content">
        <p>
            Polymtr is an algorithmic, polymetric drum sequencer. 
            Built in React using Tone.JS and NexusUI, all synthesis and processing occurs in real-time on the client machine.
        </p>
        <p>
          Patterns are generated based on the euclidean algorithm,
          which attempts to equally space X notes ("Density") across Y quantized steps ("length"). 
          Non-divisible pattern lengths will result in longer, more complicated phrases.
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
    "name": "Video synthesis",
    "path": "/code/dzlooper",
    "thumbPath": `${process.env.PUBLIC_URL}/img/thumbs/dzlooper_thumb.png`,
    "imgPath" : `${process.env.PUBLIC_URL}/img/dzlooper.png`,
    "description" : () => {return (
      <span>
        Create looping video from still images (macOS/Swift app)
      </span>
    )},
    "content": () => {return (   
      <div className="content">
        <p>
          DZ-Looper is a macOS app, written in Swift, for stitching together a set of still images into looping video content.
        </p> 
        <p>
          I began this project to overcome a limitation of Adobe Media Encoder in which still image duration is fixed. 
          Adobe Premiere and AfterEffects handle this task well, but they are heavy apps with long loading times unsuitable to this simple task.
        </p>
        <p>
          <a href="https://github.com/d-putnam/DZ-Looper/releases/tag/v.1.3.3" target="blank" 
             className="projectLink">
            Download it here</a>
          <span className="or">or</span>
          <a href="https://github.com/d-putnam/DZ-Looper" target="blank" 
             className="projectLink">view the Xcode project
          </a>
        </p>
      </div>
    )}
  }
];

export default blogData