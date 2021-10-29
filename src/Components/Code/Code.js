import React, { Component } from 'react';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import styles from './Code.module.css';


class Code extends Component {

  render() {
    return (
      <div className={styles.Code}>
        <GlitchClip iterationCount="1">
          <GlitchSquiggly  baseFrequency={0.32} scaleNoise={0.8} duration={400}>
            <div className={styles.content}>
              code page content
            </div>
          </GlitchSquiggly>  
        </GlitchClip>
      </div>
    );
  }
}

export default Code;
