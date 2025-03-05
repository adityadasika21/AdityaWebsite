import { Canvas } from '@react-three/fiber'

import Stars from './scene'

export default function BackgroundScene () {

    
    return (
        <Canvas
            camera={{ fov: 50, near: 0.1, far: 1000, position: [10,10,10] }}
            shadows
        >
           <Stars />
        </Canvas>
    )
}