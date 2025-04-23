import React from 'react'
import logoImg from '../../../assets/images/mayor_grom_Doc_Logo.png'

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
					Хоббит Фродо Бэггинс живёт тихой жизнью в Шире, пока не получает от
					своего дяди Бильбо загадочное кольцо, обладающее страшной силой.
					Оказывается, это кольцо Тьмы, созданное некогда повелителем зла
					Сауроном для порабощения всего Средиземья. Чтобы остановить
					надвигающуюся тьму, Фродо вместе с верными друзьями отправляется в
					опасное путешествие, цель которого — уничтожить кольцо в пламени
					Роковой горы.
				</p>
			</div>
		</div>
	)
}

export default Content
