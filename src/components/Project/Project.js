import ReactPlayer from "react-player"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './Project.css'

function Project(props) {

  document.title = props.project.name

  return (
    <div className="Project-Detail">
      {
        props.project.imgPath !== 'none' &&
        <div>
          {
            props.project.url !== 'none' && 
            <a href={props.project.url} target="blank">
              <img src={props.project.imgPath} 
                   className={`project-img ${props.project.imgClass}`}
                   alt={`${props.project.name} preview`} />
            </a>
          }
          {
            props.project.url === 'none' && 
            <img src={props.project.imgPath} 
                 className={`project-img ${props.project.imgClass}`}
                 alt={`${props.project.name} preview`} />
          }
        </div>
      }
      {
        props.project.content()
      }
      {
        props.project.iframe && 
        <div className='player-wrapper' style={{paddingTop: props.project.iframeRatio}}>
          <ReactPlayer
            className='react-player'
            width='100%'
            height='100%'        
            url={`${props.project.iframe}`}
          />
        </div>
      }
      {
        props.project.name === "Audio-Visual Synthesis" && 
        <Carousel dynamicHeight="true">
          {
            props.project.vids.map(vid => (
              <div className='carousel-item-wrapper'>
                <ReactPlayer     
                  className='react-player'
                  width='100%'
                  height='100%'   
                  url={`${vid}`}
                />
              </div>
            ))
          }
        </Carousel>
      }
      {
        window.scrollTo(0, 0)
      }
    </div>
  );
}

export default Project;
