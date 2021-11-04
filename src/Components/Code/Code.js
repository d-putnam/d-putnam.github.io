import { Link } from "react-router-dom";
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import styles from './Code.module.css';
import projectData from '../../projectData.js'

const Code = (props) => (

  <div className={styles.Code}>
    <GlitchClip iterationCount="1" disabled={props.fxDisabled}>
      <div className={styles.cardWrap}>
        {projectData.map((project, i) => (
          <div className={styles.card} key={i}>
            <Link to={project.path}>
              <div className={styles.crt}>
                <img className={styles.thumbnail} alt={project.name} src={project.thumbPath} />
                <div className={styles.detailWrap}>
                  <div className={styles.title}>
                    <div>{project.name}</div>
                  </div>
                  <div className={styles.description}>
                    {project.description()}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </GlitchClip>
  </div>
    
)

export default Code;
