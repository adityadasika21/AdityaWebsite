import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useFrame, extend, useThree } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import fragmentShader from "../shaders/star_nest.glsl";
import vertexShader from "../shaders/fullscreen_vertex.glsl";

interface StarNestUnifomrs {
	iTime : { value : number}, 
	iResolution : { value : THREE.Vector3 },
	iMouse : { value : THREE.Vector2 }
}

const StarNestMaterial = shaderMaterial(
	{
		iTime: 0,
		formuparam : 0.53,
		zoom : 1.5 ,
		tile : 0.85 ,
		darkmatter : 1.5 ,
		distfading : 0.480,
		iResolution: new THREE.Vector3(1, 1, 1),
		iMouse: new THREE.Vector2(0, 0),
	},
	vertexShader,
	fragmentShader
);

extend({ StarNestMaterial });

export default function StarField() {
	const materialRef = useRef<THREE.ShaderMaterial & { uniforms : StarNestUnifomrs}>();
	const { size, pointer } = useThree();

	const scrollRef = useRef(0);

	useEffect(() => {
		const onScroll = () => {
			scrollRef.current = window.scrollY / window.innerHeight; 
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	})

	useFrame(({ clock }) => {
		if (!materialRef.current) return;
	  
		const elapsedTime = clock.getElapsedTime();
		const scrollFactor = scrollRef.current;

		materialRef.current.uniforms.iTime.value = elapsedTime;
		materialRef.current.uniforms.distfading.value = 0.48 - scrollFactor * 0.1;
		// Update resolution only when necessary (avoid every frame)
		if (materialRef.current.uniforms.iResolution.value.x !== size.width) {
		  	materialRef.current.uniforms.iResolution.value.set(size.width, size.height, 1);
		}
	  
		// Throttle mouse updates to avoid performance drops
		if (pointer) {
		  materialRef.current.uniforms.iMouse.value.lerp(new THREE.Vector2(pointer.x * size.width, pointer.y * size.height), 0.1);
		}
	  });
	  

	return (
		<mesh>
			<planeGeometry args={[2, 2]} />
			{/* @ts-expect-error - extend adds it dynamically */}
			<starNestMaterial ref={materialRef} />
		</mesh>
	);
}
