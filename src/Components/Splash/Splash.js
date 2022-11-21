import React from 'react';
import { Link } from "react-router-dom";
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import styles from './Splash.module.css';


const Splash = (props) => (

  <div className={styles.Splash} >
      <div className={styles.container}>
        <div className={styles.crt}>
          <div className={styles.logo} alt="logo">
            <div className={styles.logoInnerBorder}>
              <GlitchClip iterationCount="1" onHover={true}>
                <div className={styles.textGlitch} data-text="d_putnam">d_putnam</div>
              </GlitchClip>
            </div>
          </div>
        </div>
        <svg viewBox = "0 0 500 100" version = "1.1" className={styles.treeHoriz}>
          <path d = "M 250 0 L 250 100" strokeWidth = "6" fill = "none" className={styles.treeHorizFirst}/>
          <path d = "M 250 50 L 498 50 L 498 100" strokeWidth = "6" fill = "none" strokeLinejoin="round" className={styles.treeHorizSecond}/>
          <path d = "M 250 50 L 2 50 L 2 100" strokeWidth = "6" fill = "none" strokeLinejoin="round" className={styles.treeHorizSecond}/>
        </svg>
        <div className={styles.linkWrap}>
            <svg viewBox = "0 0 60 200" version = "1.1" className={styles.treeVert}>
              <path d = "M 20 0 L 20 197 L 60 197" strokeWidth = "3" fill = "none" strokeLinejoin="round" className={styles.treeVertFirst}/>
              <path d = "M 20 127 L 60 127" strokeWidth = "3" fill = "none" className={styles.treeVertSecond}/>
              <path d = "M 20 57 L 60 57" strokeWidth = "3" fill = "none" className={styles.treeVertThird}/>
            </svg>          
          <div className={styles.linkInnerWrap}>
            <Link to={'/code'}>
              <GlitchSquiggly className={styles.itemHover} baseFrequency={0.01} scaleNoise={2.8} onHover={true} duration={500}>
                <div className={styles.crt}>
                  <div className={styles.linkItem} title="code">
                    <div className={styles.linkItemInnerWrap}>
                      <span className={styles.linkTextBefore}>code</span>
                      <span className={styles.linkText}>code</span>
                      <span className={styles.linkTextAfter}>code</span>
                    </div>
                  </div>
                </div>
              </GlitchSquiggly>
            </Link>
            <Link to={'/video'}>
              <GlitchSquiggly className={styles.itemHover} baseFrequency={0.01} scaleNoise={2.8} onHover={true} duration={500}>
                <div className={styles.crt}>
                  <div className={styles.linkItem} title="video">
                    <div className={styles.linkItemInnerWrap}>
                      <span className={styles.linkTextBefore}>blog</span>
                      <span className={styles.linkText}>blog</span>
                      <span className={styles.linkTextAfter}>blog</span>
                    </div>
                  </div> 
                </div>
              </GlitchSquiggly>          
            </Link>          
            <Link to={'/about'}>
              <GlitchSquiggly className={styles.itemHover} baseFrequency={0.01} scaleNoise={2.8} onHover={true} duration={500}>
                <div className={styles.crt}>
                  <div className={styles.linkItem} title="about">
                    <div className={styles.linkItemInnerWrap}>
                      <span className={styles.linkTextBefore}>about</span>
                      <span className={styles.linkText}>about</span>
                      <span className={styles.linkTextAfter}>about</span>
                    </div>
                  </div>   
                </div>               
              </GlitchSquiggly>     
            </Link>
          </div>
        </div>
      </div>         
  </div>
  
)
  

export default Splash;
