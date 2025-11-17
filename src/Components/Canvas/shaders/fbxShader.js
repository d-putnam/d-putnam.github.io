const fbxShader = 
`
  #ifdef GL_ES
    precision highp float;
  #endif

  uniform vec2 u_resolution; 
  uniform sampler2D bufferTexture; // input texture
  uniform sampler2D drawTexture;

  void main() {
    float u_12 = 0.211;
    float u_13 = 0.0988;
    float u_14 = 0.205;
    float u_15 = 1.0005;

    vec2 uv = (gl_FragCoord.xy / u_resolution) * u_15;
    vec4 sum = texture2D(bufferTexture, uv);
    vec4 src = texture2D(drawTexture, uv);
    float s12 = sin(u_12);
    float s13 = sin(u_13);
    float s14 = sin(u_14);
    // Mix channels
    sum.r = mix(sum.r, src.r, s12);
    sum.g = mix(sum.g, src.g, s13);
    sum.b = mix(sum.b, src.b, s14);
    gl_FragColor = sum;
  }
`

export default fbxShader