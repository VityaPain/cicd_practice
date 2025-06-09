import React from 'react'

const Character = () => {
	return (
		<div className='absolute -right-12 w-1/2' style={{ top: '40%' }}>
			<img
				draggable={false}
				alt=''
				src={
					'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/One_Ring_Blender_Render.png/330px-One_Ring_Blender_Render.png'
				}
				style={{ maxHeight: 750 }}
			/>
		</div>
	)
}

export default Character
