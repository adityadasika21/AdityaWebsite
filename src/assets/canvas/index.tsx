import { Canvas } from '@react-three/fiber'
import Scene from './scene'

export default function BackgroundScene () {

    
    return (
        <Canvas
            camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 8.0] }}
            shadows
        >
           <Scene />
        </Canvas>
    )
}