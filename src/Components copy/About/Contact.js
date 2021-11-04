import { Link } from "react-router-dom";
import { useForm, ValidationError } from '@formspree/react';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import styles from './Contact.module.css';


const Contact = (props) => {

  const [state, handleSubmit] = useForm("meqvbqql");

  if (state.succeeded) {
    return (
      <div className={styles.confirmation}>
          <GlitchClip iterationCount="1" disabled={props.fxDisabled}>
            <div className={styles.content}>
              <div className={styles.crt}>
                <div className={styles.words}>
                  <div>Thanks for reaching out!</div>
                  <div>I'll get back to you soon.</div>
                  <Link to={'/about'} title="back">
                    <svg className={styles.smile} viewBox="0 0 20 20" height="3em" width="3em">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"></path>
                    </svg>     
                    <svg className={styles.smileBefore} viewBox="0 0 17 17" height="3em" width="3em">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"></path>
                    </svg>  
                    <svg className={styles.smileAfter} viewBox="0 0 22 22" height="3em" width="3em">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"></path>
                    </svg>   
                  </Link>
                </div>
              </div>
            </div>
          </GlitchClip>
      </div>
    );
  }
  
  return (
    <div className={styles.Contact}>
        <GlitchClip iterationCount="1" disabled={props.fxDisabled}>
          <div className={styles.content}>
            <div className={styles.crt}>
              <Link to={'/about'} title="back">
                <svg className={styles.windowClose} stroke="currentColor" fill="currentColor" 
                        strokeWidth="2" viewBox="0 0 1024 1024" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"/>
                </svg>
              </Link>
              <div className={styles.words}>

                <form onSubmit={handleSubmit}>
                  <h2 className={styles.highlightWhite}>&nbsp;CONTACT ME&nbsp;</h2>
                  <div className={styles.email}>
                    <div className={styles.emailWrap}>
                      <label htmlFor="email" className={styles.highlight}>&nbsp;your email:&nbsp;</label>
                    </div>
                    <div className={styles.inputWrap}>
                      <input id="email" type="email" name="email" />
                    </div>
                    <ValidationError prefix="Email" field="email"errors={state.errors}/>
                  </div>

                  <label htmlFor="message" className={styles.highlight}>&nbsp;your message:&nbsp;</label>
                  <textarea id="message" name="message"/>
                  <ValidationError prefix="Message" field="message"errors={state.errors}/>
                  <br/>
                  <button className={styles.highlight} type="submit" disabled={state.submitting}>send mail</button>
                </form>
              </div>
            </div>
          </div>
        </GlitchClip>
    </div>
  );
  
}

export default Contact;
