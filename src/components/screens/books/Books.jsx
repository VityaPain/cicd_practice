import React from 'react'
import Layout from '../../layout/Layout'

import { memo } from 'react'

const Books = () => {
	function getPI(iterations) {
		let insideCircle = 0

		for (let i = 0; i < iterations; i++) {
			const x = Math.random()
			const y = Math.random()
			if (x * x + y * y <= 1) {
				insideCircle++
			}
		}

		const pi = (4 * insideCircle) / iterations
		return pi
	}

	return (
		<Layout>
			<p style={{ color: '#fff' }}>
				Вычисление числа PI при помощи метода Монте-Карло
			</p>
			<p style={{ color: '#fff' }}>{getPI(1000)}</p>
		</Layout>
	)
}

export default memo(Books)
