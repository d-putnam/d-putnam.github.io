import React from 'react';
import { Link } from 'react-router-dom';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import styles from './Splash.module.css';

const RGBLink = ({ label }) => (
  <Link to={`/${label}`}>
    <GlitchSquiggly className={styles.itemHover} baseFrequency={0.01} scaleNoise={2.8} onHover={true} duration={500}>
      <div className={styles.crt}>
        <div className={styles.linkItem} title={label}>
          <div className={styles.linkItemInnerWrap}>
            <span className={styles.linkTextBefore}>{label}</span>
            <span className={styles.linkText}>{label}</span>
            <span className={styles.linkTextAfter}>{label}</span>
          </div>
        </div>
      </div>
    </GlitchSquiggly>
  </Link>
);

const Splash = () => (
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
          <RGBLink label="code" />
          <RGBLink label="blog" />
          <RGBLink label="about" />      
        </div>
      </div>
    </div>         
  </div>
);
  
export default React.memo(Splash);
