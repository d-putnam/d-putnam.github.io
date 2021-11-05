import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Player from '@vimeo/player';
import styles from './Video.module.css';
import './VideoCarousel.css';

function VideoSlide (props) {
  return (
    <div className={styles.iframeContainer}>
      <iframe src={props.url} 
              title={props.title} 
              id={props.title} 
              allow="fullscreen" 
              frameBorder="0" 
              />
    </div>
  )
};

const onChange = (res) => {
  if (document.querySelector(`#video${res-1}`)) {
    const previousVideo = document.querySelector(`#video${res-1}`)
    let player = new Player(previousVideo);
    player.pause()
  }
  if (document.querySelector(`#video${res+1}`)) {
    const nextVideo = document.querySelector(`#video${res+1}`)
    let player = new Player(nextVideo);
    player.pause()
  }
}

function VideoCarousel(props) {
  return (
      <Carousel dynamicHeight="true" 
                showThumbs={false} 
                swipeable={true} 
                onChange={onChange}>
        {
          props.vids.map((vid, i) => {
            return (
              <VideoSlide url={vid} title={`video${i}`} key={i} />
            )
          }
          )
        }
      </Carousel>
  );
};

export default VideoCarousel