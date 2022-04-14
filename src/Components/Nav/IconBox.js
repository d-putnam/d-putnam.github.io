import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import styles from './Nav.module.css';


const IconBox = (props) => 
     (       
      <GlitchSquiggly className={styles.itemWrap} scaleNoise={2.0} baseFrequency={0.01} onHover={!props.active} duration={500} disabled={props.active}>
        <div className={`${(props.title === 'home') ? styles.logo : styles.linkItem} ${(props.active) ? styles.active : ""}`} title={props.title}>
          <svg className={styles.navIconSVG} viewBox="0 0 1024 1024" height="1em" width="1em">
            {
              props.d.map((path, i) => {
                return <path d={path} key={i} />
              })
            }          
          </svg>     
          <svg className={`${styles.navIconSVGBefore} ${props.active ? styles.navIconSVGBeforeActive : ""}`} viewBox="0 0 1024 1024" height="1em" width="1em">
            {
              props.d.map((path, i) => {
                return <path d={path} key={i} />
              })
            }
          </svg>  
          <svg className={`${styles.navIconSVGAfter} ${props.active ? styles.navIconSVGAfterActive : ""}`} viewBox="0 0 1024 1024" height="1em" width="1em">
            {
              props.d.map((path, i) => {
                return <path d={path} key={i} />
              })
            }    
          </svg>           
        </div>
      </GlitchSquiggly>
    );
  


export default IconBox;
