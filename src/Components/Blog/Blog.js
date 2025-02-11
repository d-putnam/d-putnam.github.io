import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';
import blogData from '../../blogData.js';

const Blog = () => (
  <div className={styles.Blog}>
    <div className={styles.cardWrap}>
      {blogData.map((project, i) => (
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
);

export default Blog;
