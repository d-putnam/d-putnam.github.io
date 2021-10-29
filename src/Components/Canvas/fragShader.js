const fragShader = 
`
  #ifdef GL_ES
    precision highp float;
  #endif

  varying vec2 vertPos;
  uniform float u_time;
  uniform vec2 u_resolution;

  uniform float u_0; // wave 1
  uniform float u_1; // wave 3
  uniform float u_2; // wave 4
  uniform float u_3; // scanlines

  mat2 rotate(float angle){
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
  }

  void main(){
    //float u_0 = 1.0; // wave 1
    float u_4 = 10.64; // wave 2
    //float u_1 = 127.28; // wave 3
    //float u_2 = 42.53; // wave 4
    float u_5 = 99.97; // wave 5
    //float u_3 = 63.4; // scanlines
    float u_6 = 1.55; // scan_rota
    float u_7 = 0.499; // zoom
    float u_8 = 0.038; // brightness

    vec2 coord = (gl_FragCoord.xy / u_resolution.xy) * u_7 - u_7;
    float color = 0.0;

    color += sin(coord.x * u_0 + cos((u_time * 0.2) + coord.y * u_4 + sin(coord.x * u_1 + (u_time * 0.2))));
    color += cos(coord.x * u_2 + sin((u_time * 0.2) + coord.y * u_5 + cos(coord.x * 20.0 + (u_time * 0.2))));

    coord = rotate( u_6 ) * coord;
    color *= cos(coord.y * u_3 * 70.0 + sin((u_time * 0.5) + coord.y)) * 6.6;

    gl_FragColor = vec4(vec3(color, color, color + u_8 / 2.0) * 1.0 + u_8, 1.0 );
  }
`;

export default fragShader