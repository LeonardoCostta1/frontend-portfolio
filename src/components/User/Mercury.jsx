/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Mercury.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Mercury.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mercury.geometry} material={materials.Mercury} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/Mercury.glb')
