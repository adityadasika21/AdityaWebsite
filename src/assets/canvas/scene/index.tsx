
import { useRef } from "react";
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";

import vertexPars from '../shaders/vertex_pars.glsl'
import vertexMain from '../shaders/vertex_main.glsl'
import fragmentPars from '../shaders/fragment_pars.glsl'
import fragmentMain from '../shaders/fragment_main.glsl';
import { useMediaQuery } from 'usehooks-ts';

export default function Blob () {


    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    
    const mesh = useRef<THREE.Mesh | null>(null);

    const material = new THREE.MeshStandardMaterial()
    material.onBeforeCompile  = (shader) => {
        material.userData.shader = shader
        shader.uniforms.uTime = { value: 0 }
  
        const parsVertexString = /* glsl */ `#include <displacementmap_pars_vertex>`
        shader.vertexShader = shader.vertexShader.replace(
            parsVertexString,
            `${parsVertexString}\n${vertexPars}\n`
        )
  
        const mainVertexString = `#include <displacementmap_vertex>\n`;
        shader.vertexShader = shader.vertexShader.replace(
            mainVertexString,
            `${mainVertexString}\n${vertexMain}\n`
        );
  
        const mainFragmentString = /* glsl */ `#include <normal_fragment_maps>`
        const parsFragmentString = /* glsl */ `#include <bumpmap_pars_fragment>`
        shader.fragmentShader = shader.fragmentShader.replace(
            parsFragmentString,
            `${parsFragmentString}\n${fragmentPars}\n`
        )
        shader.fragmentShader = shader.fragmentShader.replace(
            mainFragmentString,
            `${mainFragmentString}\n${fragmentMain}\n`
        )
    };

    useFrame(({ clock }) => {
        if (material.userData.shader) {
            material.userData.shader.uniforms.uTime.value = clock.getElapsedTime() / 25
        }
    });

    return (
        <>
            <ambientLight color={'#3AAED8'} intensity={1} />
            <directionalLight color={'#90E2FF'} intensity={1.2} position={[2,2,2]} />
            <mesh ref={mesh} scale={1.5} position={[0, 0, 0]}>
                <icosahedronGeometry args={[isSmallScreen ? 1.4 : 2, 120]} />
                <primitive attach="material" object={material} />
            </mesh>            
        </>
    )
}