const projectData = [
  {
    "name": "uwu-VS: video synthesizer for web",
    "path": "/projects/uwuVS",
    "thumbPath": `${process.env.PUBLIC_URL}/img/thumbs/shaders_thm.png`,
    "imgPath": "none",
    "url": "https://dputnam.net/uwuVS",
    "iframe": "https://www.youtube-nocookie.com/embed/0sJmY6wvhkA?controls=0",
    "iframeRatio": "67%",
    "description" : () => {return (
      <span>
        In-browser video synthesizer<br/>written in JavaScript/WebGL<br/>(web app)
      </span>
    )},
    "content": () => {
      return (        
      <div className="content">
        <p>
          <a href="https://dputnam.net/uwuVS" target="blank" 
             className="project-link title">
            uwu-VS (2020)
          </a> 
          is an in-browser video instrument inspired by analog video synthesis techniques.
        </p>
        <p>
          The animations are written in the OpenGL Shading Language and can be controlled via the provided user interface or external MIDI control. Ten user-defined presets allow for further performance flexibility. For full documentation and MIDI implementation, please see the in-app info page.
        </p>
        <p>
          <a href="https://dputnam.net/uwuVS/" target="blank" 
             className="project-link">
            Try it out here
          </a>
          or&nbsp;
          <a href="https://github.com/d-putnam/uwuVS"     
          target="blank" 
             className="project-link">
            view the source code
          </a>
        </p>
        <p>
          Below you can find a short demonstration in which uwu-VS is modulated by a quadrature MIDI LFO sent from Max/MSP. Future versions of uwu-VS will add built-in modulation sources and server-side video rendering for file export.
        </p>
      </div>
    )}
  },



  {
    "name": "Polymtr: drum sequencer for web",
    "path": "/projects/polymtr",
    "thumbPath": `${process.env.PUBLIC_URL}/img/thumbs/poly_thm.png`,
    "imgPath" : "none",
    "url": "https://dputnam.net/polymtr",
    "iframe": "https://www.youtube-nocookie.com/embed/psf-HtJASn0?controls=0",
    "iframeRatio": "78%",
    "description" : () => {return (
      <span>
        Polymetric drum sequencer<br/>written in JavaScript/Tone.JS<br/>(web app)
      </span>
    )},
    "content": () => {return (        
      <div className="content">
        <p>
          <a href="https://dputnam.net/polymtr" target="blank" 
             className="project-link title">
            Polymtr (2020)
          </a>
          is an algorithmic, polymetric drum sequencer that runs in your web browser. Built using&nbsp;
          <a href="https://tonejs.github.io/" target="blank" 
             className="project-link">
            Tone.JS
          </a>and&nbsp;
          <a href="https://nexus-js.github.io/ui/" target="blank" 
             className="project-link">
            NexusUI,
          </a>
          all audio synthesis and processing occurs in real-time on the client machine.
        </p>
        <p>
          Each voice is assigned an array of random values. Based on the pattern density settings for each channel, this is translated to a pattern of notes and accents. Raising the threshold to 100% will allow a steady stream of 16th notes.  Each pattern has a variable length, allowing for longer, evolving phrases through polymetric phasing.
        </p>
        <p>
            For best performance, Google Chrome is suggested.<br/>
            <a href="https://dputnam.net/polymtr/" target="blank" 
               className="project-link">
              Try it out here
            </a> 
            or&nbsp;
            <a href="https://github.com/d-putnam/polymtr" target="blank" 
               className="project-link">
              view the source code
            </a>
        </p>
        <p>
          Below you can find a short demonstration in which Polymtr is controlled by a combination of MIDI and mouse input. Future versions will include modulation sources, user presets, flexible MIDI input/output options, and audio recording/export.
        </p>
      </div>
    )}
  },



  {
    "name": "SVG gradient-mkr",
    "path": "/projects/svg-gradients",
    "thumbPath": `${process.env.PUBLIC_URL}/img/thumbs/gradient-mkr_thm.png`,
    "imgPath" : `${process.env.PUBLIC_URL}/img/gradient-mkr.png`,
    "url": "https://dputnam.net/gradient-mkr",
    "description" : () => {return (
      <span>
        UI for animated gradients<br/>written in JavaScript<br/>(web app)
      </span>
    )},
    "content": () => {return (       
    <div className="content">
      <p>
        <a href="https://dputnam.net/gradient-mkr" target="blank" 
              className="project-link title">
          SVG gradient-mkr
        </a> 
        is a JavaScript web app designed to simplify the process of making SVG gradients.
      </p> 
      <p>
        The user can manipulate the gradient via the UI, and the changes will be reflected
          in the page background.
      </p>
      <p>
        The "show code" button will reveal the inline HTML producing the current image. Alternatively, the user can export the image to a static PNG (without animation).
      </p>
      <p>
        <a href="https://dputnam.net/gradient-mkr/" target="blank" 
           className="project-link">
          Try it out here
        </a>
        or&nbsp; 
        <a href="https://github.com/d-putnam/gradient-mkr" target="blank" 
           className="project-link">
          view the source code
        </a>
      </p>
    </div>     
    )}
  },



  {
    "name": "Tessellation Studies: SVG animation",
    "path": "/projects/tessellations",
    "thumbPath": `${process.env.PUBLIC_URL}/img/thumbs/tess.png`,
    "imgPath" : `${process.env.PUBLIC_URL}/img/tess.png`,
    "url": "https://dputnam.net/tessellations",
    "description" : () => {return (
      <span>
        JavaScript-generated<br/>animations
      </span>
    )},
    "content": () => {return (   
      <div className="content">
        <p>
          <a href="https://dputnam.net/tessellations" target="blank" 
                className="project-link title">
            Tessellation Studies
          </a> 
          is a collection of SVG animations, created by rotating the forms of regular tessellations.
        </p> 
        <p>
          Slowly progressing through all possible permutations, these simple patterns give rise to recognizable higher-level structures.
        </p>
        <p>
          Future iterations will include an option for exporting to disk, as well as control over the various image parameters.
        </p>
        <p>
          <a href="https://dputnam.net/tessellations/" target="blank" 
             className="project-link">
            Check it out here
          </a>
          or&nbsp;
          <a href="https://github.com/d-putnam/tessellations" target="blank" 
             className="project-link">
            view the source code
          </a>
        </p>
      </div>
    )}
  },



  {
    "name": "Fetcher: AI storyteller",
    "path": "/projects/fetcher",
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



  {
    "name": "CVX-1 Chaotic Video Processor",
    "path": "/projects/video-processor",
    "thumbPath": `${process.env.PUBLIC_URL}/img/thumbs/cvx1_thm.png`,
    "imgPath" : `${process.env.PUBLIC_URL}/img/CVX1.png`,
    "imgClass": "floatRight",
    "url": "none",
    "description" : () => {return (
      <span>
        Real-time video manipulator<br/>written in Max/MSP<br/>(desktop app)
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
          It features control over the following parameters:
            <ul>
              <li>RGB bias filter</li>
              <li>X/Y tesselation and rotation angle</li>
              <li>Saturation, Contrast, & Blur</li> 
              <li>Luminance-based distortion</li>
              <li>Feedback path</li>
            </ul>
        </p>
        <p>
          The modulation section contains three low frequency oscillators which can be used to automate each of the above parameters.
        </p>
        <p>
          All parameters feature MIDI control and can be re-mapped to suit your device of choice, meaning this can be played as a video instrument using a faderbox, controlled by your hardware synthesizers, or receive real-time messages from another program such as Max/MSP or PureData.
        </p>
        <p>
          Full documentation to come! In the meantime, send me an email if you have any questions.
        </p>
        <a href="https://www.dropbox.com/s/zbs5qqj7nl9029c/CVX-1%20Video%20Processor.zip?dl=0" 
           target="blank" 
           className="project-link"> 
          download macOS app (via dropbox) 
        </a>
      </div>
    )}
  },



  {
    "name": "MT-10 Stereo Multi-Tap Delay",
    "path": "/projects/mt10-delay",
    "thumbPath": `${process.env.PUBLIC_URL}/img/thumbs/mt10_thm.png`,
    "imgPath" : `${process.env.PUBLIC_URL}/img/MT10.png`,
    "imgClass": "floatRight",
    "url": "none",
    "description" : () => {return (
      <span>
        Experimental audio effect<br/>written in Max/MSP<br/>(desktop app)
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



  {
    "name": "Audio-Visual Synthesis",
    "path": "/projects/video",
    "thumbPath": `${process.env.PUBLIC_URL}/img/thumbs/video_thm.png`,
    "imgPath" : "none",
    "url": "none",
    "vids": [
      'https://www.youtube-nocookie.com/embed/elTZz46OsL0?controls=0',
      'https://www.youtube-nocookie.com/embed/-cmYPYEYChg?controls=0',
      'https://www.youtube-nocookie.com/embed/1_VCiRUoIs0?controls=0',
      'https://www.youtube-nocookie.com/embed/2QBEvuBk6Pc?controls=0',
      'https://www.youtube-nocookie.com/embed/noktrK0pjbk?controls=0'
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
];

export default projectData