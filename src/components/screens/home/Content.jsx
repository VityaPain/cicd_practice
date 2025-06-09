import React from 'react'
import logoImg from './logo.png'

const Content = () => {
	return (
		<div className='mt-7 ml-14 w-1/2'>
			<img
				alt=''
				src={logoImg}
				className='mb-10 ml-14'
				draggable={false}
				style={{ maxHeight: 350 }}
			/>
			<div className='flex ml-5'>
				<p
					className='text-white opacity-70 leading-8 text-lg'
					style={{ maxWidth: '80%' }}
				>
					Хоббит Фродо Бэггинс известен всему Ширу спокойным нравом и добротой,
					но судьба готовит ему куда более опасный путь. Обладая незаурядной
					храбростью, верными друзьями и чистым сердцем, Фродо становится
					хранителем Кольца Всевластия — древнего артефакта, способного
					погрузить весь мир в тьму. Но всё меняется с возвращением тёмного
					властелина Саурона и началом великого похода, в котором решится судьба
					Средиземья.
				</p>
			</div>
		</div>
	)
}

export default Content
