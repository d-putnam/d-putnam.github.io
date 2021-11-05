import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import styles from './Nav.module.css';


const IconBox = (props) => 
     (       
      <GlitchSquiggly className={styles.itemWrap} scaleNoise={2.0} baseFrequency={0.01} onHover={!props.fxDisabled} duration={500} disabled={props.fxDisabled}>
        <div className={(props.title === 'home') ? styles.logo : styles.linkItem} title={props.title}>
          <svg className={styles.navIconSVG} viewBox="0 0 1024 1024" height="1em" width="1em">
            {
              props.d.map((path, i) => {
                return <path d={path} key={i} />
              })
            }          
          </svg>     
          <svg className={styles.navIconSVGBefore} viewBox="0 0 1024 1024" height="1em" width="1em">
            {
              props.d.map((path, i) => {
                return <path d={path} key={i} />
              })
            }
          </svg>  
          <svg className={styles.navIconSVGAfter} viewBox="0 0 1024 1024" height="1em" width="1em">
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
