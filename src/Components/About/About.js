import React, { Component } from 'react';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import styles from './About.module.css';


class About extends Component {

  render() {
    return (
      <div className={styles.About}>
        <GlitchClip iterationCount="1">
          <GlitchSquiggly  baseFrequency={0.32} scaleNoise={0.8} duration={400}>
            <div className={styles.content}>
              <br />
              I'm a programmer and media artist based in Providence, Rhode Island
              <br /><br />
              I exchange much of my time for currency, which I use to meet my needs
              <br /><br />
              My interests include synthesis, cybernetics, solarpunk, and object-oriented ontology
              <br /><br />
              I used to make music, but now I make websites
              <br /><br />
              let's talk / / / dan@dputnam.net
              <br /><br />
            </div>
          </GlitchSquiggly>  
        </GlitchClip>
      </div>
    );
  }
}

export default About;
