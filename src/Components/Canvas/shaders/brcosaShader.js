const brcosaShader = 
`
  #ifdef GL_ES
    precision highp float;
  #endif

  uniform vec2 u_resolution; 
  uniform sampler2D drawTexture;

  // Hue shift function
  vec3 hueShift(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
  }

  void main() {
    float u_9 = 1.0; // contrast
    float u_10 = 1.0; // saturation
    float u_11 = 6.26; // hue

    vec2 uv = (gl_FragCoord.xy / u_resolution) * 0.998;
    vec3 texColor = texture2D(drawTexture, uv).rgb;

    const vec3 LumCoeff = vec3(0.2125, 0.7154, 0.0721);
    vec3 AvgLumin = vec3(0.5, 0.5, 0.5);
    float lumin = dot(texColor, LumCoeff);
    vec3 intensity = vec3(lumin);

    // Saturation and contrast
    vec3 satColor = mix(intensity, texColor, u_10);
    vec3 conColor = mix(AvgLumin, satColor, u_9);

    // Hue shift
    vec3 hueColor = hueShift(conColor, u_11);

    gl_FragColor = vec4(hueColor, 1.0);
  }
`

export default brcosaShader