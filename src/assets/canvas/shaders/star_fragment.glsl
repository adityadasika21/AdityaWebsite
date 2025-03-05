
uniform float uTime;
varying vec3 vPosition;

void main() {
    // Distance from center to control glow intensity
    float distanceFactor = length(vPosition) * 0.5;
    
    // Time-based pulsing glow effect
    float glowIntensity = exp(-distanceFactor * 2.0) + sin(uTime * 2.0) * 0.2;

    // Ensure glow stays within a visible range
    glowIntensity = clamp(glowIntensity, 0.0, 1.0);

    // Set final color (pure white glow)
    gl_FragColor = vec4(vec3(1.0) * glowIntensity, glowIntensity);
}

