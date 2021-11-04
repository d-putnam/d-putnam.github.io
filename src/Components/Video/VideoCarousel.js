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
              allow="autoplay; fullscreen; picture-in-picture" 
              frameborder="0" 
              allowfullscreen
              mozallowfullscreen
              webkitallowfullscreen />
    </div>
  )
};

const onChange = (res) => {
  if (document.querySelector(`#video${res-1}`)) {
    const previousVideo = document.querySelector(`#video${res-1}`)
    let player = new Player(previousVideo);
    player.pause().then(function() {
      console.log(`paused #video${res-1}`)
    })
  }
  if (document.querySelector(`#video${res+1}`)) {
    const nextVideo = document.querySelector(`#video${res+1}`)
    let player = new Player(nextVideo);
    player.pause().then(function() {
      console.log(`paused #video${res+1}`)
    })
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
              <VideoSlide url={vid} title={`video${i}`} />
            )
          }
          )
        }
      </Carousel>
  );
};

export default VideoCarousel