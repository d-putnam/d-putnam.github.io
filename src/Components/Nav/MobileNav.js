import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './MobileNav.module.css';

const MobileNav = () => {
  const [showNav, setNav] = useState(false);
  let location = useLocation();

  const closeNav = () => {
    setNav(false)
  }

  // Always render the panel, toggle open class for transitions
  const navClass = showNav ? `${styles.MobileNav} ${styles.MobileNavOpen}` : styles.MobileNav;

  return (
    <div className={navClass}
         style={{width: showNav ? '100vw' : 'fit-content'}}>
      {location.pathname !== '/' && (
        <>
          <svg className={styles.mobileToggle} viewBox="0 0 512 512" height="2em" width="2em" onClick={() => setNav(!showNav)}>
            <path d='M 32 96 v 64 h 448 V 96 H 32 Z m 0 128 v 64 h 448 v -64 H 32 Z m 0 128 v 64 h 448 v -64 H 32 Z' />
          </svg>
          <div className={styles.panelContent}>
            {showNav && (
              <>
                <Link to={'/code'} onClick={closeNav}>
                  <div className={styles.linkItem}>code</div>
                </Link>
                <Link to={'/blog'} onClick={closeNav}>
                  <div className={styles.linkItem}>blog</div>
                </Link>
                <Link to={'/about'} onClick={closeNav}>
                  <div className={styles.linkItem}>about</div>
                </Link>
                <Link to={'/'} onClick={closeNav}>
                  <div className={styles.linkItem}>home</div>
                </Link>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
export default React.memo(MobileNav);
