import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, shaderMaterial } from '@react-three/drei';
import earth from "../Assets/SpherePic/Earth.jpg";
import '../css/sphere.css';

// Vertex and Fragment Shaders for Earth
const vertexShader = `
    varying vec2 vertexUV;
    varying vec3 vertexNormal;

    void main() {
        vertexUV = uv;
        vertexNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragmentShader = `
    uniform sampler2D globeTexture;
    varying vec2 vertexUV;
    varying vec3 vertexNormal;

    void main() {
        float intensity = 1.05 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));
        vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);
        vec3 textureColor = texture2D(globeTexture, vertexUV).xyz;
        gl_FragColor = vec4(atmosphere + textureColor, 1.0);
    }
`;

// Vertex and Fragment Shaders for Atmosphere
const atmosphereVertexShader = `
    varying vec3 vertexNormal;

    void main() {
        vertexNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const atmosphereFragmentShader = `
    varying vec3 vertexNormal;

    void main() {
        vec3 normal = normalize(vertexNormal);
        float intensity = pow(0.6 - dot(normal, vec3(0.0, 0.0, 1.0)), 4.0);
        vec3 atmosphereColor = vec3(0.3, 0.6, 1.0);
        gl_FragColor = vec4(atmosphereColor * intensity, 1.0);
    }
`;

// Twinkling Star Shader Material
const starVertexShader = `
    varying vec3 vPosition;

    void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = 1.0;
    }
`;

const starFragmentShader = `
    uniform float time;
    varying vec3 vPosition;

    void main() {
        float dist = length(vPosition);
        float duration = 0.5; // Duration for the twinkle effect in seconds
        float frequency = 1.0 / duration;
        float intensity = abs(sin(time * frequency + dist * 10.0)) * 0.5 + 0.5;
        gl_FragColor = vec4(vec3(1.0, 1.0, 1.0) * intensity, 1.0);
    }
`;

// Custom Shader Material
const GlobeMaterial = shaderMaterial(
    { globeTexture: new THREE.TextureLoader().load(earth) },
    vertexShader,
    fragmentShader
);

const AtmosphereMaterial = shaderMaterial(
    {},
    atmosphereVertexShader,
    atmosphereFragmentShader,
    (material) => {
        material.side = THREE.BackSide;
        material.blending = THREE.AdditiveBlending;
    }
);

extend({ GlobeMaterial, AtmosphereMaterial });

const StarMaterial = shaderMaterial(
    { time: 0 },
    starVertexShader,
    starFragmentShader
);

extend({ StarMaterial });

const Earth = () => {
    const earthRef = useRef();
    const atmosphereRef = useRef();
    const groupRef = useRef();
    const clock = new THREE.Clock();
    const starMaterialRef = useRef();

    // Animation loop
    useFrame(() => {
        if (earthRef.current) earthRef.current.rotation.y += 0.002;

        if (starMaterialRef.current) {
            starMaterialRef.current.uniforms.time.value = clock.getElapsedTime();
        }
    });

    // Create star field
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new StarMaterial();
    starMaterialRef.current = starMaterial;

    const starVertices = [];
    for (let i = 0; i < 4000; i++) {
        const x = (Math.random() - 0.5) * 1000;
        const y = (Math.random() - 0.5) * 1000;
        const z = (Math.random() - 0.5) * 1000;
        starVertices.push(x, y, z);
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

    return (
        <group ref={groupRef}>
            <mesh ref={earthRef}>
                <sphereGeometry args={[5, 50, 50]} />
                <globeMaterial attach="material" />
            </mesh>
            <mesh ref={atmosphereRef} scale={[1.2, 1.2, 1.2]}>
                <sphereGeometry args={[5, 50, 50]} />
                <atmosphereMaterial attach="material" />
            </mesh>
            <points geometry={starGeometry} material={starMaterial} />
        </group>
    );
};

const Sphere = () => {
    return (
        <div className="sphere-container">
            <Canvas camera={{ position: [0, 0, 15] }} style={{ height: '100vh', width: '100vw' }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                <Earth />
                <OrbitControls
                    enableZoom={false}
                    enableRotate={true}
                    enablePan={false}
                />
            </Canvas>
        </div>
    );
};

export default Sphere;