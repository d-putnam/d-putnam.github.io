import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Carousel } from 'react-responsive-carousel';
import Player from '@vimeo/player';
import styles from './Project.module.css';
import './VideoCarousel.css';

const VideoSlide = ({ url, title }) => (
  <div className={styles.iframeContainerCarousel}>
    <iframe src={url}
            title={title}
            id={title}
            allow="fullscreen"
            frameBorder="0"
    />
  </div>
);

const onChange = (res) => {
  if (document.querySelector(`#video${res-1}`)) {
    const previousVideo = document.querySelector(`#video${res-1}`);
    let player = new Player(previousVideo);
    player.pause();
  }
  if (document.querySelector(`#video${res+1}`)) {
    const nextVideo = document.querySelector(`#video${res+1}`);
    let player = new Player(nextVideo);
    player.pause();
  }
};

const VideoCarousel = ({ vids }) => (
  <Carousel dynamicHeight="true" 
            showThumbs={false} 
            swipeable={true} 
            onChange={onChange}>
    {
      vids.map((vid, i) => (
        <VideoSlide url={vid} title={`video${i}`} key={i} />
      ))
    }
  </Carousel>
);

export default VideoCarousel;