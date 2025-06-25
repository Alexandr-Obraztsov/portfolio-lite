import { useState, useEffect, useRef } from 'react'

// Интерактивная сетка с геометрическими элементами
export default function InteractiveGrid() {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
	const animationRef = useRef<number>(0)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		const resizeCanvas = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
		}

		resizeCanvas()
		window.addEventListener('resize', resizeCanvas)

		const handleMouseMove = (e: MouseEvent) => {
			setMousePos({ x: e.clientX, y: e.clientY })
		}

		window.addEventListener('mousemove', handleMouseMove)

		// Параметры сетки
		const gridSize = 80
		const rows = Math.ceil(canvas.height / gridSize) + 2
		const cols = Math.ceil(canvas.width / gridSize) + 2

		// Геометрические элементы
		const shapes = ['circle', 'triangle', 'square', 'diamond', 'cross']

		const drawShape = (
			ctx: CanvasRenderingContext2D,
			shape: string,
			x: number,
			y: number,
			size: number,
			opacity: number
		) => {
			ctx.save()
			ctx.globalAlpha = opacity
			ctx.strokeStyle = '#00ff88'
			ctx.lineWidth = 1

			switch (shape) {
				case 'circle':
					ctx.beginPath()
					ctx.arc(x, y, size, 0, Math.PI * 2)
					ctx.stroke()
					break
				case 'triangle':
					ctx.beginPath()
					ctx.moveTo(x, y - size)
					ctx.lineTo(x - size, y + size)
					ctx.lineTo(x + size, y + size)
					ctx.closePath()
					ctx.stroke()
					break
				case 'square':
					ctx.strokeRect(x - size, y - size, size * 2, size * 2)
					break
				case 'diamond':
					ctx.beginPath()
					ctx.moveTo(x, y - size)
					ctx.lineTo(x + size, y)
					ctx.lineTo(x, y + size)
					ctx.lineTo(x - size, y)
					ctx.closePath()
					ctx.stroke()
					break
				case 'cross':
					ctx.beginPath()
					ctx.moveTo(x - size, y)
					ctx.lineTo(x + size, y)
					ctx.moveTo(x, y - size)
					ctx.lineTo(x, y + size)
					ctx.stroke()
					break
			}
			ctx.restore()
		}

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			// Рисуем сетку и элементы
			for (let row = 0; row < rows; row++) {
				for (let col = 0; col < cols; col++) {
					const baseX = col * gridSize - gridSize / 2
					const baseY = row * gridSize - gridSize / 2

					// Расстояние до курсора
					const dx = mousePos.x - baseX
					const dy = mousePos.y - baseY
					const distance = Math.sqrt(dx * dx + dy * dy)

					// Искажение от курсора
					const maxDistance = 300
					const distortion = Math.max(0, (maxDistance - distance) / maxDistance)

					// Позиция с искажением
					const x = baseX + dx * distortion * 0.1
					const y = baseY + dy * distortion * 0.1

					// Рисуем точки сетки
					ctx.save()
					ctx.globalAlpha = 0.15 + distortion * 0.2
					ctx.fillStyle = '#00ff88'
					ctx.beginPath()
					ctx.arc(x, y, 1 + distortion * 2, 0, Math.PI * 2)
					ctx.fill()
					ctx.restore()

					// Рисуем геометрические элементы на некоторых точках
					if ((row + col) % 4 === 0) {
						const shapeIndex = (row * cols + col) % shapes.length
						const shape = shapes[shapeIndex]
						const size = 4 + distortion * 6
						const opacity = 0.1 + distortion * 0.15

						drawShape(ctx, shape, x, y, size, opacity)
					}

					// Соединяющие линии (очень тонкие)
					if (col < cols - 1) {
						const nextX = (col + 1) * gridSize - gridSize / 2
						const nextDx = mousePos.x - nextX
						const nextDy = mousePos.y - baseY
						const nextDistance = Math.sqrt(nextDx * nextDx + nextDy * nextDy)
						const nextDistortion = Math.max(
							0,
							(maxDistance - nextDistance) / maxDistance
						)
						const nextPosX = nextX + nextDx * nextDistortion * 0.1

						ctx.save()
						ctx.globalAlpha = 0.05 + Math.max(distortion, nextDistortion) * 0.1
						ctx.strokeStyle = '#00ff88'
						ctx.lineWidth = 0.5
						ctx.beginPath()
						ctx.moveTo(x, y)
						ctx.lineTo(nextPosX, y)
						ctx.stroke()
						ctx.restore()
					}

					if (row < rows - 1) {
						const nextY = (row + 1) * gridSize - gridSize / 2
						const nextDx = mousePos.x - baseX
						const nextDy = mousePos.y - nextY
						const nextDistance = Math.sqrt(nextDx * nextDx + nextDy * nextDy)
						const nextDistortion = Math.max(
							0,
							(maxDistance - nextDistance) / maxDistance
						)
						const nextPosY = nextY + nextDy * nextDistortion * 0.1

						ctx.save()
						ctx.globalAlpha = 0.05 + Math.max(distortion, nextDistortion) * 0.1
						ctx.strokeStyle = '#00ff88'
						ctx.lineWidth = 0.5
						ctx.beginPath()
						ctx.moveTo(x, y)
						ctx.lineTo(x, nextPosY)
						ctx.stroke()
						ctx.restore()
					}
				}
			}

			animationRef.current = requestAnimationFrame(animate)
		}

		animate()

		return () => {
			window.removeEventListener('resize', resizeCanvas)
			window.removeEventListener('mousemove', handleMouseMove)
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current)
			}
		}
	}, [mousePos])

	return (
		<canvas
			ref={canvasRef}
			className='absolute inset-0 pointer-events-none opacity-60'
			style={{ mixBlendMode: 'screen' }}
		/>
	)
}
