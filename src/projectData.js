const projectData = [
  {
    "name": "uwu-VS: video synthesizer for web",
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
    "name": "Polymtr: drum sequencer for web",
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
    "name": "Tessellation Studies: SVG animations",
    "path": "/code/tessellations",
    "thumbPath": `${process.env.PUBLIC_URL}/img/thumbs/tess_thumb.png`,
    "imgPath" : `${process.env.PUBLIC_URL}/img/tess.png`,
    "url": "https://dputnam.net/tessellations",
    "description" : () => {return (
      <span>
        JavaScript-generated animations
      </span>
    )},
    "content": () => {return (   
      <div className="content">
        <p>
          Tessellation Studies is a collection of SVG animations, created by rotating the forms of regular tessellations.
        </p> 
        <p>
          Slowly progressing through all possible permutations, these simple patterns give rise to recognizable higher-level structures.
        </p>
        <p>
          <a href="https://dputnam.net/tessellations/" target="blank" 
             className="projectLink">
            Check it out here</a>
          <span className="or">or</span>
          <a href="https://github.com/d-putnam/tessellations" target="blank" 
             className="projectLink">view the source code
          </a>
        </p>
      </div>
    )}
  },


  {
    "name": "gradient-mkr//SVG",
    "path": "/code/svg-gradients",
    "thumbPath": `${process.env.PUBLIC_URL}/img/thumbs/svg_thumb.png`,
    "imgPath" : `${process.env.PUBLIC_URL}/img/gradient-mkr.png`,
    "url": "https://dputnam.net/gradient-mkr",
    "description" : () => {return (
      <span>
        UI for animated gradients written in JavaScript (web app)
      </span>
    )},
    "content": () => {return (       
    <div className="content">
      <p>
        gradient-mkr is a JavaScript web app designed to simplify the process of making SVG gradients.
      </p> 
      <p>
        The user can manipulate the gradient via the UI, and the changes will be reflected in the page background.
      </p>
      <p>
        The "show code" button will reveal the inline HTML producing the current image. 
        Alternatively, the user can export the image to a static PNG (without animation).
      </p>
      <p>
        <a href="https://dputnam.net/gradient-mkr/" target="blank" 
           className="projectLink">
          Try it out here</a>
        <span className="or">or</span> 
        <a href="https://github.com/d-putnam/gradient-mkr" target="blank" 
           className="projectLink">view the source code
        </a>
      </p>
    </div>     
    )}
  },


/*
  {
    "name": "Fetcher: AI storyteller",
    "path": "/code/fetcher",
    "thumbPath": `${process.env.PUBLIC_URL}/img/thumbs/fetch_thm.png`,
    "imgPath" : `${process.env.PUBLIC_URL}/img/fetcher.png`,
    "url": "https://dputnam.net/fetcher",
    "description" : () => {return (
      <span>
        AI-powered storyteller<br/>written in JavaScript<br/>(web app)
      </span>
    )},
    "content": () => {return (   
      <div className="content">
        <p>
          <a href="https://dputnam.net/fetcher" target="blank" 
                className="project-link title">
            Fetcher
          </a>  
          is a JavaScript web app powered by the&nbsp;
          <a href="https://deepai.org/machine-learning-model/text-generator" 
             target="blank" 
             className="project-link">
            DeepAI text generation API
          </a>
        </p>
        <p>
          It requests user input, then produces a fever-dream story based on the seed text.
        </p>
        <p>
          The resulting story is printed one character at a time at random intervals, producing the effect of chatting with a bot.
        </p>
        <p>
          <a href="https://dputnam.net/fetcher/" target="blank" 
             className="project-link">
            Try it out here
          </a> 
          or&nbsp;
          <a href="https://github.com/d-putnam/fetcher" target="blank" 
             className="project-link">
            view the source code
          </a>
        </p>
      </div>
    )}
  },
*/


  {
    "name": "CVX-1 Chaotic Video Processor",
    "path": "/code/video-processor",
    "thumbPath": `${process.env.PUBLIC_URL}/img/thumbs/cvx_thumb.png`,
    "imgPath" : `${process.env.PUBLIC_URL}/img/CVX1.png`,
    "imgClass": "floatRight",
    "url": "none",
    "description" : () => {return (
      <span>
        Real-time video manipulator (Max/MSP app)
      </span>
    )},
    "content": () => {return (   
      <div className="content">
        <p>
          <b className="title">
            CVX-1 Chaotic Video Processor&nbsp;
          </b>
          is a macOS app writtten in Max/MSP, allowing real-time manipulation of recorded or live video input based on a feedback loop of OpenGL shaders.
        </p>
        <p>
          Three low frequency oscillators can be used to modulate RGB bias, BrCoSa, Blur, Luminance Distortion, and tesselation. 
        </p>
        <p>
          All parameters feature MIDI control and can be re-mapped to suit your device of choice, meaning this can be played as a video instrument using a faderbox, controlled by your hardware synthesizers, or receive real-time messages from another program such as Max/MSP or PureData.
        </p>
        <a href="https://www.dropbox.com/s/zbs5qqj7nl9029c/CVX-1%20Video%20Processor.zip?dl=0" 
           target="blank" 
           className="projectLink">download macOS app (via dropbox)</a>
      </div>
    )}
  },


/*
  {
    "name": "MT-10 Stereo Multi-Tap Delay",
    "path": "/code/mt10-delay",
    "thumbPath": `${process.env.PUBLIC_URL}/img/thumbs/mt10_thm.png`,
    "imgPath" : `${process.env.PUBLIC_URL}/img/MT10.png`,
    "imgClass": "floatRight",
    "url": "none",
    "description" : () => {return (
      <span>
        Experimental audio effect<br/>(Max/MSP app)
      </span>
    )},
    "content": () => {return (   
      <div>
        <p>
          <b className="title">
            MT-10 Stereo Multi-Tap Delay&nbsp;
          </b>
          is a non-linear delay/looping effect with independent control over the delay time and level for ten repetitions of the incoming signal, panned left and right. The interface encourages non-traditional delay techniques, and the effect can easily be "played" rather musically with minimal input. At the same time, precise control is easily attainable.
        </p>
        <p>
          All parameters allow for MIDI control and are re-mappable, allowing for integration with hardware and other programs.
        </p>
        <p>
          Warning: this will default to your internal microphone and speakers unless another source is chosen - change it or embrace the feedback
        </p>
        <a href="https://www.dropbox.com/s/wkgrl113nvaajn5/MT-10%20Multi-Tap.zip?dl=0" 
           target="blank" 
           className="project-link"> 
          download macOS app (via dropbox) 
        </a>
      </div>
    )}
  },
*/

/*
  {
    "name": "Audio-Visual Synthesis",
    "path": "/code/video",
    "thumbPath": `${process.env.PUBLIC_URL}/img/thumbs/video_thm.png`,
    "imgPath" : "none",
    "url": "none",
    "vids": [
      'https://player.vimeo.com/video/184250772?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0',
      'https://player.vimeo.com/video/183585614?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0',
      'https://player.vimeo.com/video/198124962?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0',
      'https://player.vimeo.com/video/210262791?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0',
      'https://player.vimeo.com/video/197636138?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0'
    ],
    "description" : () => {return (
      <span>
        Collection of audio/visual<br/>experiments<br/>(video)
      </span>
    )},
    "content": () => {return ( 
      <div className="content">
        <div>
          <p>
            Below is a collection of video works from 2016-2017, created by manipulating feedback loops of OpenGL shaders using the Max/MSP programming language.
          </p>
          <p>
            Shader parameters are mapped to MIDI control knobs, allowing the video to be improvised and recorded in real-time using a musical interface.
          </p>
          <p>
            The accompanying audio environments are varied configurations of modular synthesis, extended bass guitar, and studio equipment.
          </p>
          <p>
            *Photosensitivity warning - these videos contain frequent strobing effects*
          </p>
        </div>
      </div>
    )},
  },
*/

];

export default projectData