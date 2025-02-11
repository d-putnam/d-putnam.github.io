import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Code.module.css';
import projectData from '../../projectData.js';

const Code = () => (
  <div className={styles.Code}>
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
  </div>
)

export default Code;