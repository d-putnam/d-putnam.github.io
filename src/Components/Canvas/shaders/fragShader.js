const fragShader = 
`
  #ifdef GL_ES
    precision highp float;
  #endif

  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_0; // timescale
  uniform float u_1; // wave 2
  uniform float u_2; // wave 3
  uniform float u_3; // scanlines

  mat2 rotate(float angle){
    float s = sin(angle), c = cos(angle);
    return mat2(c, -s, s, c);
  }

  void main(){
    float w2 = 86.0; // wave 2
    float w4 = 86.0; // wave 4
    float w5 = 99.97; // wave 5
    float rota = 1.55; // scan_rota
    float zoom = 0.499; // zoom
    float brightness = 0.038; // brightness

    vec2 coord = (gl_FragCoord.xy / u_resolution.xy) * zoom - zoom;
    float t = u_time * u_0;
    float color = 
      sin(coord.x * u_1 + cos(t + coord.y * u_2 + sin(coord.x * w2 + t))) +
      cos(coord.x * w4 + sin(t + coord.y * w5 + cos(coord.x * 20.0 + t)));

    coord = rotate(rota) * coord;
    color *= cos(coord.y * u_3 * 70.0 + sin(u_time * (u_0 * 1.5) + coord.y)) * 6.6;

    gl_FragColor = vec4(vec3(color, color, color + brightness / 2.0) + brightness, 1.0 );
  }
`;

export default fragShader