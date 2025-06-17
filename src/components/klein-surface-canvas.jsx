import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

const KleinSurface = () => {
  const kleinSurface = useGLTF('./klein-surface/scene.gltf')

  return (
    <primitive
      object={kleinSurface.scene}
      scale={3.25}
      position-x={0.5}
      position-y={-2.25}
    />
  )
}

const KleinSurfaceCanvas = () => (
  <Canvas className='mx-auto aspect-square max-w-xs lg:max-w-full'>
    <Suspense>
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <pointLight position={[-5, 5, 5]} intensity={0.8} />
      <spotLight position={[0, 10, 0]} angle={0.3} intensity={1} castShadow />
      <KleinSurface />
      <Preload all />
    </Suspense>
  </Canvas>
)

export default KleinSurfaceCanvas
