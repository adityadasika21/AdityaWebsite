
uniform float iTime;
uniform vec3 iResolution;
uniform vec2 iMouse;

#define iterations 15
#define formuparam 0.53
#define volsteps 10
#define stepsize 0.1
#define zoom   1.500
#define tile   0.850
#define speed  0.003
#define brightness 0.018
#define darkmatter 1.500
#define distfading 0.480
#define saturation 0.8

void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    
    // Normalize coordinates
    vec2 uv = fragCoord.xy / iResolution.xy - 0.5;
    uv.y *= iResolution.y / iResolution.x;

    vec3 dir = vec3(uv * zoom, 1.0);
    float time = iTime * speed + 0.25;

    // Mouse interaction (optional)
    float a1 = 0.5 + (iMouse.x / iResolution.x) * 2.0;
    float a2 = 0.8 + (iMouse.y / iResolution.y) * 2.0;
    mat2 rot1 = mat2(cos(a1), sin(a1), -sin(a1), cos(a1));
    mat2 rot2 = mat2(cos(a2), sin(a2), -sin(a2), cos(a2));
    dir.xz *= rot1;
    dir.xy *= rot2;

    vec3 from = vec3(1.0, 0.5, 0.5);
    from += vec3(-time * 2.0, time, -2.0);
    from.xz *= rot1;
    from.xy *= rot2;

    // Volumetric rendering
    float s = 0.1, fade = 1.0;
    vec3 v = vec3(0.0);
    for (int r = 0; r < volsteps; r++) {
        vec3 p = from + s * dir * 0.5;
        p = abs(vec3(tile) - mod(p, vec3(tile * 2.0))); // Tiling fold
        float pa, a = pa = 0.0;
        for (int i = 0; i < iterations; i++) { 
            p = abs(p) / dot(p, p) - formuparam; // The magic formula
            a += abs(length(p) - pa);
            pa = length(p);
        }
        float dm = max(0.0, darkmatter - a * a * 0.001); // Dark matter effect
        a *= a * a;
        if (r > 6) fade *= 1.0 - dm;
        v += fade;
        v += vec3(s, s * s, s * s * s * s) * a * brightness * fade;
        fade *= distfading;
        s += stepsize;
    }
    v = mix(vec3(length(v)), v, saturation);
    
    // Output color
    gl_FragColor = vec4(v * 0.01, 4.0);
}

