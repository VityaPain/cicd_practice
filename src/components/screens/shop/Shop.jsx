import React from 'react'
import { FixedSizeGrid as Grid } from 'react-window'
import Layout from '../../layout/Layout'

const IMAGE_COUNT = 1000
const COLUMN_COUNT = 5
const IMAGE_SIZE = 200

const getImageUrl = index => `https://picsum.photos/300/300?random=${index}`

const Cell = ({ columnIndex, rowIndex, style }) => {
	const index = rowIndex * COLUMN_COUNT + columnIndex
	if (index >= IMAGE_COUNT) return null

	return (
		<div style={{ ...style, padding: 4 }}>
			<img
				src={getImageUrl(index)}
				alt={`Random ${index}`}
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					borderRadius: 12,
				}}
				loading='lazy'
			/>
		</div>
	)
}

const ImageGallery = () => {
	const rowCount = Math.ceil(IMAGE_COUNT / COLUMN_COUNT)

	return (
		<Layout>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					gap: '12px',
				}}
			>
				<h1 style={{ fontSize: '26px', color: '#fff' }}>1000 изображений</h1>
				<Grid
					columnCount={COLUMN_COUNT}
					columnWidth={IMAGE_SIZE}
					height={800}
					rowCount={rowCount}
					rowHeight={IMAGE_SIZE}
					width={COLUMN_COUNT * IMAGE_SIZE}
				>
					{Cell}
				</Grid>
			</div>
		</Layout>
	)
}

export default ImageGallery
