import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedPoints() {
	const ref = useRef<THREE.Points>(null!)

	const sphere = useMemo(() => {
		const positions = new Float32Array(2000 * 3)

		for (let i = 0; i < 2000; i++) {
			const radius = Math.random() * 5 + 2
			const theta = Math.random() * Math.PI * 2
			const phi = Math.acos(Math.random() * 2 - 1)

			const x = radius * Math.sin(phi) * Math.cos(theta)
			const y = radius * Math.sin(phi) * Math.sin(theta)
			const z = radius * Math.cos(phi)

			positions[i * 3] = x
			positions[i * 3 + 1] = y
			positions[i * 3 + 2] = z
		}

		return positions
	}, [])

	useFrame((state, delta) => {
		if (ref.current) {
			ref.current.rotation.x += delta * 0.1
			ref.current.rotation.y += delta * 0.05
		}
	})

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
				<PointMaterial
					transparent
					color='#00ff88'
					size={0.05}
					sizeAttenuation={true}
					depthWrite={false}
					opacity={0.8}
				/>
			</Points>
		</group>
	)
}

export default function ThreeBackground() {
	return (
		<div className='fixed inset-0 -z-10'>
			<Canvas
				camera={{
					position: [0, 0, 10],
					fov: 75,
				}}
				dpr={[1, 2]}
			>
				<AnimatedPoints />
			</Canvas>
		</div>
	)
}
