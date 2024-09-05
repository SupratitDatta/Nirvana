varying vec3 vertexNormal;

void main() {
    vec3 normal = normalize(vertexNormal);
    float intensity = pow(0.6 - dot(normal, vec3(0.0, 0.0, 1.0)), 4.0);

    vec3 atmosphereColor = vec3(0.3, 0.6, 1.0);
    gl_FragColor = vec4(atmosphereColor * intensity, 1.0);
}