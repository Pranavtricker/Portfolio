import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Octahedron } from '@react-three/drei'
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'
import { useLoading } from '../context/LoadingContext'
import './Scene3D.css'

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouseRef.current.y * 0.1,
        0.05
      )
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouseRef.current.x * 0.1,
        0.05
      )
    }
  })

  const shapes = useMemo(() => [
    { position: [-4, 2, -2] as [number, number, number], scale: 0.8, speed: 1.2, color: '#c8ff00' },
    { position: [3, -1, -3] as [number, number, number], scale: 0.6, speed: 0.8, color: '#ff6b35' },
    { position: [-2, -2, -1] as [number, number, number], scale: 0.5, speed: 1.5, color: '#c8ff00' },
    { position: [4, 1, -4] as [number, number, number], scale: 0.7, speed: 1, color: '#ff6b9d' },
    { position: [0, 3, -5] as [number, number, number], scale: 0.4, speed: 1.3, color: '#667eea' },
  ], [])

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <Float
          key={i}
          speed={shape.speed}
          rotationIntensity={0.5}
          floatIntensity={1}
          position={shape.position}
        >
          {i % 4 === 0 ? (
            <Torus scale={shape.scale}>
              <MeshDistortMaterial
                color={shape.color}
                attach="material"
                distort={0.3}
                speed={2}
                roughness={0.2}
                metalness={0.8}
              />
            </Torus>
          ) : i % 4 === 1 ? (
            <Octahedron scale={shape.scale}>
              <MeshDistortMaterial
                color={shape.color}
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.1}
                metalness={0.9}
              />
            </Octahedron>
          ) : i % 4 === 2 ? (
            <Box scale={shape.scale}>
              <MeshDistortMaterial
                color={shape.color}
                attach="material"
                distort={0.2}
                speed={2}
                roughness={0.3}
                metalness={0.7}
              />
            </Box>
          ) : (
            <Sphere scale={shape.scale}>
              <MeshDistortMaterial
                color={shape.color}
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0.2}
                metalness={0.6}
              />
            </Sphere>
          )}
        </Float>
      ))}
    </group>
  )
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 500

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
      sizes[i] = Math.random() * 0.05
    }
    
    return [pos, sizes]
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#c8ff00"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#c8ff00" />
      <FloatingShapes />
      <Particles />
      <EffectComposer>
        <Bloom 
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          intensity={0.8}
        />
        <Noise opacity={0.03} />
        <Vignette eskil={false} offset={0.1} darkness={0.8} />
      </EffectComposer>
    </>
  )
}

export default function Scene3D() {
  const { setProgress } = useLoading()

  return (
    <div className="scene3d">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        onCreated={() => {
          setProgress(100)
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
