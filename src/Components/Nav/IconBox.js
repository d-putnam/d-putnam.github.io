import React, { Component } from 'react';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import styles from './Nav.module.css';


class IconBox extends Component {

  render() {
    return (       
      <GlitchSquiggly className={styles.itemWrap} scaleNoise={2.0} baseFrequency={0.01} onHover={true} duration={500}>
        <div className={(this.props.title === 'home') ? styles.logo : styles.linkItem} title={this.props.title}>
          <svg className={styles.navIconSVGBefore} viewBox="0 0 1024 1024" height="1em" width="1em">
            {
              this.props.d.map(path => {
                return <path d={path} key={path} />
              })
            }
          </svg>  
          <svg className={styles.navIconSVG} viewBox="0 0 1024 1024" height="1em" width="1em">
            {
              this.props.d.map(path => {
                return <path d={path} key={path} />
              })
            }          
          </svg>     
          <svg className={styles.navIconSVGAfter} viewBox="0 0 1024 1024" height="1em" width="1em">
            {
              this.props.d.map(path => {
                return <path d={path} key={path} />
              })
            }    
          </svg>           
        </div>
      </GlitchSquiggly>
    );
  }
}

export default IconBox;
