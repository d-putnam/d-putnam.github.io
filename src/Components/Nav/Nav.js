import React, { Component } from 'react';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import { FaCode } from 'react-icons/fa';
import { MdVideoStable, MdInfoOutline } from 'react-icons/md';
import styles from './Nav.module.css';


class Nav extends Component {


  render() {
    return (
      <GlitchClip className={styles.container} iterationCount="1" duration={8000}>
        
          <GlitchSquiggly className={styles.logoInnerBorder} baseFrequency={0.32} scaleNoise={0.8} duration={400}>
            <GlitchSquiggly baseFrequency={0.01} onHover={true} duration={500}>
              <span className={`${styles.logo}`} title="d_putnam">dp</span>
            </GlitchSquiggly>
          </GlitchSquiggly>


          <GlitchSquiggly className={styles.linkItem} baseFrequency={0.32} scaleNoise={0.8} duration={400}>
            <GlitchSquiggly baseFrequency={0.01} onHover={true} duration={500}>
              <FaCode />
            </GlitchSquiggly>
          </GlitchSquiggly>
          <GlitchSquiggly className={styles.linkItem} baseFrequency={0.32} scaleNoise={0.8} duration={400}>
            <GlitchSquiggly baseFrequency={0.01} onHover={true} duration={500}>
              <MdVideoStable />
            </GlitchSquiggly>     
          </GlitchSquiggly>                   
          <GlitchSquiggly className={styles.linkItem} baseFrequency={0.32} scaleNoise={0.8} duration={400}>
            <GlitchSquiggly baseFrequency={0.01} onHover={true} duration={500}>
              <MdInfoOutline />
            </GlitchSquiggly>       
          </GlitchSquiggly>                 
      </GlitchClip>
      
    );
  }
}

export default Nav;
