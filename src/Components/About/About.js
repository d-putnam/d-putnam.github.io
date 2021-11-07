import { Link } from "react-router-dom";
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import styles from './About.module.css';
import pic from './pic.jpg';

// My interests include synthesis, cybernetics, solarpunk, and object-oriented ontology.
// I exchange much of my time for currency, which I use to meet my needs
// I have a human body, but something else is missing
// I have an obscure degree from a very fancy institution

const About = (props) => {

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

  return(
    <div className={styles.About}>
      <GlitchClip iterationCount="1" disabled={props.fxDisabled}>
        <div className={styles.content}>
          <div className={styles.crt}>
            <div className={styles.flexCol}>
              <div className={styles.words}>
                <span>
                  I'm a programmer and media artist living in Providence, Rhode Island.
                </span>
                <span>
                  I have an obscure degree from a fancy school.
                </span>
                <span>
                  My interests include synthesis, lost futures, and object-oriented ontology.
                </span>
                <span>
                  I used to make music, but now I make websites.
                </span>
              </div>
              <Link to={'/contact'} title="contact me">
                <span className={styles.contactLink}>
                  <span style={{lineBreak: 'anywhere'}}>let's talk {`=>`}&nbsp;</span>
                  <span className={styles.highlight}>&nbsp;dan@dputnam.net&nbsp;</span>
                </span>
              </Link>
            </div>
            <div className={styles.picDiv} style={isSafari ? {"mixBlendMode": "color-dodge"} : {"midBlendMode": "normal"}}>
              <img src={pic} alt="d putnam"/>
            </div>
          </div>
        </div>
      </GlitchClip>
    </div>
  )
}
export default About;
