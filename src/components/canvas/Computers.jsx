import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = ({ isMobile, isIPad }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight
        intensity={0.15}
        groundColor='black'
      />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isIPad ? 0.55 : isMobile ? 0.35 : 0.75}
        position={isIPad ? [0, -2.5, -1] : isMobile ? [0, -1.5, -0.75] : [0, -3.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const computerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isIPad, setisIPad] = useState(false)

  useEffect(() => {
    const mediaQueryMobile = window.matchMedia('(max-width: 550px)')
    setIsMobile(mediaQueryMobile.matches)
    const handleMediaQueryMobileChange = (event) => {
      setIsMobile(event.matches)
    }
    mediaQueryMobile.addEventListener('change', handleMediaQueryMobileChange)

    const mediaQueryIPad = window.matchMedia('(min-width: 550px) and (max-width: 800px)')
    setisIPad(mediaQueryIPad.matches)
    const handleMediaQueryIPadChange = (event) => {
      setisIPad(event.matches)
    }
    mediaQueryIPad.addEventListener('change', handleMediaQueryIPadChange)

    return () => {
      mediaQueryMobile.removeEventListener('change', handleMediaQueryMobileChange)
      mediaQueryIPad.removeEventListener('change', handleMediaQueryIPadChange)
    }
  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} isIPad={isIPad} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default computerCanvas