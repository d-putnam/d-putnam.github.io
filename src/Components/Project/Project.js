import React from 'react';
import VideoCarousel from './VideoCarousel';
import styles from './Project.module.css';

const Project = ({ project }) => (
  <div className={styles.Project}>
    <div className={styles.content}>
      <div className={styles.crt}>
      { project.imgPath &&          
        <img src={project.imgPath} 
              className={styles.projImg}
              alt={project.name} 
        />
      }
        <div className={styles.words}>
            <h2 className={styles.highlightWhite}>{project.name}</h2>
            {
              project.content()
            }
        </div>
        { project.iframe && 
          <div className={styles.iframeContainer} style={{paddingTop: project.iframeRatio+'%'}}>
            <iframe src={project.iframe} 
                    title={project.name} 
                    id={project.name} 
                    allow="fullscreen" 
                    frameBorder="0"
            />
          </div>
        }
        { project.vidList &&
          <VideoCarousel vids={project.vidList} />
        }
      </div>
    </div>
  </div>
);


export default Project;
