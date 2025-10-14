import { useLayoutEffect } from 'react'
import {
  AccumulativeShadows,
  Center,
  Environment,
  OrbitControls,
  RandomizedLight,
  useGLTF
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { useThemeConfig } from './active-theme'

function Model({ model }: { model: string }) {
  const { activeTheme } = useThemeConfig()
  const { scene, materials } = useGLTF(model)

  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    )

    materials['BMW_E30_M3_PAINT'].color.set(activeTheme)
  }, [scene, materials, activeTheme])

  return <primitive object={scene} />
}

export default function ModelViewer({ model }: { model: string }) {
  return (
    <Canvas shadows camera={{ position: [3, 0, 4], fov: 35 }}>
      <Center>
        <group scale={1}>
          <Model model={model} />

          <AccumulativeShadows>
            <RandomizedLight ambient={1} position={[100, 0, 0]} />
          </AccumulativeShadows>
        </group>
      </Center>

      <Environment preset="city" />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}
