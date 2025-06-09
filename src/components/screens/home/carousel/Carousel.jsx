import React, { useState } from 'react'
import Controls from './Controls'
import VideosLine from './videosLine/VideosLine'

import t1Img from '../../../../assets/images/thumbnails/img1.jpeg'
import t2Img from '../../../../assets/images/thumbnails/img2.jpg'
import t3Img from '../../../../assets/images/thumbnails/img3.jpg'
import t4Img from '../../../../assets/images/thumbnails/img4.jpg'
import t5Img from '../../../../assets/images/thumbnails/img5.jpg'

const initialSlides = [
	{
		_id: 'wef2we',
		thumbnailPath:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdthCPTSACMD11puVwnrQsfYwyMMx8SDaqTA&s',
		videoUrl:
			'https://sso.kinopoisk.ru/install?uuid=fd9080fe-7312-4aba-8e66-afef6dc30a5e',
	},
	{
		_id: '124fqw',
		thumbnailPath:
			'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/772093e4-7f68-49aa-a805-d654693aee26/600x900',
		videoUrl: 'https://www.kinopoisk.ru/film/312/',
	},
	{
		_id: '125fqw',
		thumbnailPath:
			'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/e410c71f-baa1-4fe5-bb29-aedb4662f49b/600x900',
		videoUrl: 'https://www.kinopoisk.ru/film/3498/',
	},
	{
		_id: '126fqw',
		thumbnailPath:
			'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/0e569ebd-0639-416b-92c5-2afffbd5d089/600x900',
		videoUrl: 'https://www.kinopoisk.ru/film/278522/',
	},
	{
		_id: '127fqw',
		thumbnailPath:
			'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/dd195023-81e0-42bc-9b33-e86ac8abf30e/600x900',
		videoUrl: 'https://www.kinopoisk.ru/film/408876/',
	},
	{
		_id: '128fqw',
		thumbnailPath:
			'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/ee1276c4-6e67-45cd-94db-8bd47bb21da4/600x900',
		videoUrl: 'https://www.kinopoisk.ru/film/694633/',
	},
]

const Carousel = () => {
	const [slides] = useState(initialSlides)
	const [currentIndex, setCurrentIndex] = useState(0)
	return (
		<div className='mt-12'>
			<div className='flex items-center mb-5'>
				<Controls
					slidesLength={slides.length}
					setCurrentIndex={setCurrentIndex}
					currentIndex={currentIndex}
				/>
			</div>
			<VideosLine
				slides={slides}
				setCurrentIndex={setCurrentIndex}
				currentIndex={currentIndex}
			/>
		</div>
	)
}

export default Carousel
