import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import styles from './Project.module.css';


const Project = (props) => {
  
  return (
    <div className={styles.Project}>
        <GlitchClip iterationCount="1" disabled={props.fxDisabled}>
          <div className={styles.content}>
            <div className={styles.crt}>
            {
              props.project.imgPath !== 'none' &&
              <div>
                {
                  <img src={props.project.imgPath} 
                       className={styles.projImg}
                       alt={props.project.name} 
                  />
                }
              </div>
            }
              <div className={styles.words}>
                  <h2 className={styles.highlightWhite}>{props.project.name}</h2>
                  {
                    props.project.content()
                  }
              </div>
              {
                props.project.iframe && 
                <div className={styles.iframeContainer} style={{paddingTop: props.project.iframeRatio+'%'}}>
                  <iframe src={props.project.iframe} 
                          title={props.project.name} 
                          id={props.project.name} 
                          allow="fullscreen" 
                          frameBorder="0"
                  />
                </div>
              }
            </div>
          </div>
        </GlitchClip>
    </div>
  );
  
}

export default Project;
