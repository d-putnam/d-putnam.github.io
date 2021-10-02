const fbxShader = `
  #ifdef GL_ES
    precision highp float;
  #endif

  uniform vec2 u_resolution; //The width and height of our screen
  uniform sampler2D bufferTexture; //Our input texture
  uniform sampler2D drawTexture;

  void main() {
    float u_12 = 0.211;
    float u_13 = 0.0988;
    float u_14 = 0.104;
    float u_15 = 1.0;


    vec2 st = gl_FragCoord.xy / (u_resolution);
    vec2 uv = st;
    uv *= u_15;

    vec4 sum = texture2D(bufferTexture, uv);
    vec4 src = texture2D(drawTexture, uv);
    sum.r = mix(sum.r, src.r,  sin(u_12));
    sum.g = mix(sum.g, src.g,  sin(u_13));
    sum.b = mix(sum.b, src.b,  sin(u_14));
    gl_FragColor = sum;
  }
`

export { fbxShader }