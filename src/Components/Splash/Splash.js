import React, { Component } from 'react';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import styles from './Splash.module.css';


class Splash extends Component {


  render() {
    return (
      <GlitchClip iterationCount="1" duration={9000}>
        <div className={styles.container}>
          <div className={styles.logo} alt="logo">
            <GlitchSquiggly className={styles.logoInnerBorder} baseFrequency={0.32} scaleNoise={0.8} duration={400}>
              <span className={styles.textGlitch} title="d_putnam">d_putnam</span>
            </GlitchSquiggly>
          </div>
          {
            window.screen.width > 414 &&
            <svg viewBox = "0 0 500 100" version = "1.1" className={styles.treeHoriz} alt="logo">
              <path d = "M 250 0 L 250 100" stroke = "white" strokeWidth = "5" fill = "none" className={styles.treeHorizFirst}/>
              <path d = "M 250 50 L 498 50 L 498 100" stroke = "white" strokeWidth = "5" fill = "none" className={styles.treeHorizSecond}/>
              <path d = "M 250 50 L 2 50 L 2 100" stroke = "white" strokeWidth = "5" fill = "none" className={styles.treeHorizSecond}/>
            </svg>
          }
          <div className={styles.linkWrap}>
            {        
              window.screen.width <= 414 &&
              <svg viewBox = "0 0 60 200" version = "1.1" className={styles.treeVert} alt="logo">
                <path d = "M 20 0 L 20 197 L 60 197" stroke = "white" strokeWidth = "2" fill = "none" className={styles.treeVertFirst}/>
                <path d = "M 20 127 L 60 127" stroke = "white" strokeWidth = "2" fill = "none" className={styles.treeVertSecond}/>
                <path d = "M 20 57 L 60 57" stroke = "white" strokeWidth = "2" fill = "none" className={styles.treeVertThird}/>
              </svg>          
            }
            <div className={styles.linkInnerWrap}>
              <GlitchSquiggly className={styles.linkItem} baseFrequency={0.32} scaleNoise={0.8} duration={400}>
                <GlitchSquiggly baseFrequency={0.01} onHover={true} duration={500}>
                  code
                </GlitchSquiggly>
              </GlitchSquiggly>
              <GlitchSquiggly className={styles.linkItem} baseFrequency={0.32} scaleNoise={0.8} duration={400}>
                <GlitchSquiggly baseFrequency={0.01} onHover={true} duration={500}>
                  video
                </GlitchSquiggly>     
              </GlitchSquiggly>                   
              <GlitchSquiggly className={styles.linkItem} baseFrequency={0.32} scaleNoise={0.8} duration={400}>
                <GlitchSquiggly baseFrequency={0.01} onHover={true} duration={500}>
                  about
                </GlitchSquiggly>       
              </GlitchSquiggly>                 
            </div>
          </div>
        </div>
      </GlitchClip>
      
    );
  }
}

export default Splash;
