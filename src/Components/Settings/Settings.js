import React, { Component } from 'react';
import ToggleButton from 'react-toggle-button'
import styles from './Settings.module.css';

class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showControls: false,
    }
  }

  toggleControls = () => {
    this.setState({showControls: !this.state.showControls})
  }

  render() {
    return (
        <div className={this.state.showControls ? styles.controlsOpen : styles.controls} 
             style={{width: this.state.showControls ? '100%' : 'auto'}}>
          {
            this.state.showControls &&
            <div className={styles.controlWrapWrap}>
              <div className={styles.controlWrap}>
                <div className="flex">
                  <label htmlFor="video">animation:&nbsp;</label>
                  <ToggleButton name="video"
                    className={styles.toggle}
                    value={ !this.props.videoDisabled }
                    thumbStyle={{ borderRadius: 2 }}
                    trackStyle={{ borderRadius: 2 }}
                    onToggle={this.props.toggleVideo}
                    colors={{
                      active: {
                        base: 'rgba(54, 137, 72, .95)',
                        hover: 'rgba(54, 137, 72, .95)'
                        //base: 'rgb(199 149 0)',
                        //hover: 'rgb(199 149 0)',
                      },
                      activeThumb: {
                        base: 'rgb(219, 219, 239)',
                      },
                      inactiveThumb: {
                        base: 'rgb(219, 219, 239)',
                      },
                    }}
                  />
                </div>
                <input className={styles.slider}
                  type="range" 
                  min = {83}
                  max = {300}
                  step = {0}
                  data-target = '1'
                  value = {this.props.uniforms[1]} 
                  onChange = {this.props.sliderHandler} 
                  disabled={this.props.videoDisabled}
                />     
                <input className={styles.slider}
                  type="range" 
                  min = {0}
                  max = {240}
                  step = {0}
                  data-target = '2'
                  value = {this.props.uniforms[2]} 
                  onChange = {this.props.sliderHandler} 
                  disabled={this.props.videoDisabled}
                />
                <input className={styles.slider}
                  type="range" 
                  min = {60}
                  max = {100}
                  step = {0}
                  data-target = '3'
                  value = {this.props.uniforms[3]} 
                  onChange = {this.props.sliderHandler} 
                  disabled={this.props.videoDisabled}
                />
                <input className={styles.slider}
                  type="range" 
                  min = {0.2}
                  max = {1.35}
                  step = {0.05}
                  data-target = '0'
                  value = {this.props.uniforms[0]} 
                  onChange = {this.props.sliderHandler} 
                  disabled={this.props.videoDisabled}
                />
              </div>
            </div>
          }
          <div className={styles.labelWrap} onClick={this.toggleControls}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              {
                this.state.showControls &&
                <path d="M512.5 390.6c-29.9 0-57.9 11.6-79.1 32.8-21.1 21.2-32.8 49.2-32.8 79.1 0 29.9 11.7 57.9 32.8 79.1 21.2 21.1 49.2 32.8 79.1 32.8 29.9 0 57.9-11.7 79.1-32.8 21.1-21.2 32.8-49.2 32.8-79.1 0-29.9-11.7-57.9-32.8-79.1a110.96 110.96 0 0 0-79.1-32.8zm412.3 235.5l-65.4-55.9c3.1-19 4.7-38.4 4.7-57.7s-1.6-38.8-4.7-57.7l65.4-55.9a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a442.5 442.5 0 0 0-79.6-137.7l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.2 28.9c-30-24.6-63.4-44-99.6-57.5l-15.7-84.9a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52-9.4-106.8-9.4-158.8 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.3a353.44 353.44 0 0 0-98.9 57.3l-81.8-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a445.93 445.93 0 0 0-79.6 137.7l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.2 56.5c-3.1 18.8-4.6 38-4.6 57 0 19.2 1.5 38.4 4.6 57l-66 56.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.3 44.8 96.8 79.6 137.7l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.8-29.1c29.8 24.5 63 43.9 98.9 57.3l15.8 85.3a32.05 32.05 0 0 0 25.8 25.7l2.7.5a448.27 448.27 0 0 0 158.8 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c4.3-12.4.6-26.3-9.5-35zm-412.3 52.2c-97.1 0-175.8-78.7-175.8-175.8s78.7-175.8 175.8-175.8 175.8 78.7 175.8 175.8-78.7 175.8-175.8 175.8z"></path>              }
              {
                !this.state.showControls &&
                <path d="M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"></path>
              } 
            </svg>          
          </div>
        </div>
    );
  }
  
}

export default Settings;
