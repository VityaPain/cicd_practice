import React, { useCallback, useMemo, useState } from 'react'
import Layout from '../../layout/Layout'

import { memo } from 'react'

const Books = () => {
	const [i, setI] = useState(0)
	const getPI = useCallback(iterations => {
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
	}, [])

	const value = useMemo(() => getPI(10000000), [])

	return (
		<Layout>
			<p style={{ color: '#fff' }}>
				Вычисление числа PI при помощи метода Монте-Карло
			</p>
			<p style={{ color: '#fff' }}>{value}</p>
			<button onClick={() => setI(prev => prev + 1)}>
				Количество кликов: {i}
			</button>
		</Layout>
	)
}

export default memo(Books)
