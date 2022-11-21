import React from 'react';
import { Link } from "react-router-dom";
import styles from './About.module.css';
import pic from './pic.jpg';

// I like building systems that mimic nature, contemplating the desires of inanimate objects, and figuring out what that all means.


const About = (props) => {

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

  return(
    <div className={styles.About}>
      <div className={styles.content}>
        <div className={styles.crt}>
          <div className={styles.flexCol}>
            <div className={styles.words}>
              <span>
                I'm a programmer and media artist with an enthusiasm for building and augmenting tools.
              </span>
              <span>
                I studied Computer Music & Multimedia at Brown University, where I gained an interest in circuit bending, arduino programming, and analog-digital feedback systems.
              </span>
              <span>
                Now I mostly make websites and digital tools, inspired by the openness and flexibility of musical instruments.
              </span>
              <span>
                Talk to me about useful things, Rhode Island seafood, or postmodern philosophy {`=>`}&nbsp;
                <Link to={'/contact'} title="contact me">
                  <span className={styles.contactLink}>
                    <span className={styles.highlight}>&nbsp;dan@dputnam.net&nbsp;</span>
                  </span>
                </Link>
                &nbsp;
                <a href={'http://dputnam.net/cv.pdf'} target="_blank" rel="noopener noreferrer" title="CV">
                  <span className={styles.contactLink}>
                    <span className={styles.highlight}>&nbsp;CV&nbsp;</span>
                  </span>
                </a>
              </span>
            </div>
          </div>
          <div className={styles.picDiv} style={isSafari ? {"mixBlendMode": "color-dodge"} : {"midBlendMode": "normal"}}>
            <img src={pic} alt="d putnam"/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About;
