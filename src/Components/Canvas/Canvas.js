import React, { Component } from 'react';
import * as THREE from 'three';
import fragShader from './shaders/fragShader.js';
import brcosaShader from './shaders/brcosaShader.js';
import fbxShader from './shaders/fbxShader.js';
import styles from './Canvas.module.css';

class Canvas extends React.PureComponent {

  constructor(props) {
    super(props);
    let ratio = 16 / 9;
    let h = window.innerHeight > window.screen.height ? window.innerHeight : window.screen.height;
    let w = window.innerWidth > window.screen.width ? window.innerWidth : window.screen.width;
    if (w / h < ratio) {
      w = h * ratio;
    } else {
      h = w * (1 / ratio)
    }
    this.state = {
      width: w, 
      height: h,
    };
  }

  componentDidMount() {
    if (!this.props.webglSupported) return;
    this.sceneSetup();
    this.drawSceneSetup();
    this.brcosaSceneSetup();
    this.fbxSceneSetup();
    this.startAnimationLoop();
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    if (this.controls) this.controls.dispose();
  }

  componentDidUpdate(prevProps) {
    if (!this.props.webglSupported) return;
    if (this.props.uniforms !== prevProps.uniforms) {
      this.updateUniforms();
    }
    if (this.props.videoDisabled !== prevProps.videoDisabled) {
      window.requestAnimationFrame(this.startAnimationLoop)  
    }
  }

  handleWindowResize = () => {
    let ratio = 16 / 9;
    let h = window.innerHeight > window.screen.height ? window.innerHeight : window.screen.height;
    let w = window.innerWidth > window.screen.width ? window.innerWidth : window.screen.width;
    if (w / h < ratio) {
      w = h * ratio;
    } else {
      h = w * (1 / ratio)
    }
    this.setState({width: w, height: h})
    this.renderer.setSize(w, h);
    this.camera.updateProjectionMatrix();
  };

  sceneSetup = () => {
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera( 
      this.state.width / - 2, 
      this.state.width / 2, 
      this.state.height / 2, 
      this.state.height / - 2, 
      1, 1000 );
    this.camera.position.z = 1;
    this.clock = new THREE.Clock();
    this.now = this.clock.getElapsedTime();
    this.geometry = new THREE.PlaneBufferGeometry(this.state.width, this.state.height);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.state.width, this.state.height);
    this.mount.appendChild(this.renderer.domElement); // mount using React ref
  }

  drawSceneSetup = () => {
    this.drawScene = new THREE.Scene();
    this.drawTexture = new THREE.WebGLRenderTarget(this.state.width, this.state.height, 
      {minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter}
    );
    this.drawMaterial = new THREE.ShaderMaterial({
      uniforms: {
        u_resolution: {value: {x: this.state.width, y: this.state.height}},
        u_time: {value: this.now},
        u_0: {value: this.props.uniforms[0]},
        u_1: {value: this.props.uniforms[1]},
        u_2: {value: this.props.uniforms[2]},
        u_3: {value: this.props.uniforms[3]},
      },
      fragmentShader: fragShader
    });
    this.drawPlane = new THREE.Mesh(this.geometry, this.drawMaterial);
    this.drawScene.add(this.drawPlane);
  }

  brcosaSceneSetup = () => {
    this.brcosaScene = new THREE.Scene();
    this.brcosaTexture = new THREE.WebGLRenderTarget(this.state.width, this.state.height, 
      {minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter}
    );
    this.brcosaMaterial = new THREE.ShaderMaterial({
      uniforms: {
        drawTexture: {type: "t", value: this.drawTexture.texture},
        u_resolution: {value: {x: this.state.width, y: this.state.height}},
        u_time: {value: this.now}
      },
      fragmentShader: brcosaShader
    });
    this.brcosaPlane = new THREE.Mesh(this.geometry, this.brcosaMaterial);
    this.brcosaScene.add(this.brcosaPlane);
  }

  fbxSceneSetup = () => {
    this.fbxScene = new THREE.Scene();
    // Create 2 buffer textures
    this.textureA = new THREE.WebGLRenderTarget(this.state.width, this.state.height, 
      {minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter}
    );
    this.textureB = new THREE.WebGLRenderTarget(this.state.width, this.state.height, 
      {minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter}
    );
    // Pass textureA to shader
    this.fbxMaterial = new THREE.ShaderMaterial({
      uniforms: {
       bufferTexture: {type: "t", value: this.textureA.texture},
       u_resolution: {value: {x: this.state.width, y: this.state.height}},
       drawTexture: {type: "t", value: this.brcosaTexture.texture}
      },
      fragmentShader: fbxShader
    });
    this.fbxPlane = new THREE.Mesh(this.geometry, this.fbxMaterial);
    this.fbxScene.add(this.fbxPlane);
    //Draw finalTexture (textureB) to screen 
    this.finalMaterial =  new THREE.MeshBasicMaterial({map: this.textureB});
    this.outputPlane = new THREE.Mesh(this.geometry, this.finalMaterial);
    this.scene.add(this.outputPlane);
  }

  startAnimationLoop = () => {
    if (this.props.videoDisabled) return;
    this.now = this.clock.getElapsedTime();
    this.drawMaterial.uniforms.u_time.value = this.now;
    // Draw our DRAW scene
    this.renderer.setRenderTarget(this.drawTexture);
    this.renderer.render(this.drawScene, this.camera);
    this.renderer.setRenderTarget(null);
    //brcosa
    this.renderer.setRenderTarget(this.brcosaTexture);
    this.renderer.render(this.brcosaScene, this.camera);
    this.renderer.setRenderTarget(null);
    // Draw to textureB
    this.renderer.setRenderTarget(this.textureB);
    this.renderer.render(this.fbxScene, this.camera);
    this.renderer.setRenderTarget(null);
    // Swap textureA and B
    let t = this.textureA;
    this.textureA = this.textureB;
    this.textureB = t;
    this.outputPlane.material.map = this.textureB.texture;
    this.fbxMaterial.uniforms.bufferTexture.value = this.textureA.texture;
    // Final render
    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  updateUniforms = () => {
    for (let i=0; i<4; i++) {
      let target = 'u_' + i;
      let value = this.props.uniforms[i];
      this.drawMaterial.uniforms[target] = {value: value};
    }
  }

  render() {
    if (!this.props.webglSupported) {
      console.log('WebGL not supported! Please enable hardware acceleration in your browser settings or try a different device.');
      return (
        <div className="Canvas-wrap">
          <div className={styles.CanvasFallback}>
            <h2>WebGL Not Supported</h2>
            <p>Your browser or device does not support hardware-accelerated graphics.<br />
            Please enable hardware acceleration in your browser settings or try a different device.</p>
          </div>
        </div>
      );
    }
    return (
      <div className="Canvas-wrap">
        <div className={styles.Canvas} ref={ref => (this.mount = ref)} />
        <div className={styles.gradient} />
      </div>
    );
  }
  
}

export default Canvas;
