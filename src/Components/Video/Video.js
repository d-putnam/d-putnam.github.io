import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import VideoCarousel from './VideoCarousel'
import styles from './Video.module.css';

const Video = (props) => {

  const vids = [
    'https://player.vimeo.com/video/184250772?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0',
    'https://player.vimeo.com/video/183585614?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0',
    'https://player.vimeo.com/video/198124962?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0',
    'https://player.vimeo.com/video/210262791?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0',
    'https://player.vimeo.com/video/197636138?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0'
  ]

  return (
    <div className={styles.Video}>
      <GlitchClip iterationCount="1" disabled={props.fxDisabled}>
        <div className={styles.content}>
          <div className={styles.crt}>
            <div className={styles.flexCol}>
              <div className={styles.words}>
                <span>
                  Below is a collection of video works created using Max/MSP and OpenGL.
                </span>
                <span>
                  Source footage is mangled through a feedback loop of effects, mapped to a control surface, and manipulated in real-time.
                </span>
                <span>
                  The accompanying audio is comprised of modular synthesizer, extended bass guitar, and more feedback.
                </span>
                <span>
                  *Photosensitivity warning* frequent strobing effects
                </span>
                <VideoCarousel vids={vids} />
              </div>
            </div>
          </div>
        </div>
      </GlitchClip>
    </div>
  );
  
}


export default Video;
