const fragShader = 
`
  #ifdef GL_ES
    precision highp float;
  #endif

  varying vec2 vertPos;
  uniform float u_time;
  uniform vec2 u_resolution;

  uniform float u_0; // timescale
  uniform float u_1; // wave 2
  uniform float u_2; // wave 3
  uniform float u_3; // scanlines

  mat2 rotate(float angle){
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
  }

  void main(){
    //float u_0 = 0.2; // timescale
    //float u_1 = 86.0; // wave 2
    //float u_2 = 10.64; // wave 3
    //float u_3 = 63.4; // scanlines

    float w2 = 86.0; // wave 2
    float w4 = 86.0; // wave 4
    float w5 = 99.97; // wave 5
    float rota = 1.55; // scan_rota
    float zoom = 0.499; // zoom
    float brightness = 0.038; // brightness

    vec2 coord = (gl_FragCoord.xy / u_resolution.xy) * zoom - zoom;
    float color = 0.0;

    color += sin(coord.x * u_1 + cos((u_time * u_0) + coord.y * u_2 + sin(coord.x * w2 + (u_time * u_0))));
    color += cos(coord.x * w4 + sin((u_time * u_0) + coord.y * w5 + cos(coord.x * 20.0 + (u_time * u_0))));

    coord = rotate( rota ) * coord;
    color *= cos(coord.y * u_3 * 70.0 + sin((u_time * (u_0 * 1.5)) + coord.y)) * 6.6;

    gl_FragColor = vec4(vec3(color, color, color + brightness / 2.0) * 1.0 + brightness, 1.0 );
  }
`;

export default fragShader