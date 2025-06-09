import React from 'react'
import BgImage from '../../assets/images/bgImage.jpeg'
import Modal from '../screens/home/Modal'
import Header from './header/Header'
import SocialMedia from './SocialMedia'

const Layout = ({ children }) => {
	return (
		<div
			className='p-6 relative bg-cover bg-no-repeat'
			style={{
				backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGgOYItNZTeogD10KzxKh3pKr2_yvVwUzwFA&s)`,
				height: '100%',
			}}
		>
			<div className='gradient' />
			<div className='relative z-1'>
				<Header />
				<SocialMedia />
				<Modal />
				{children}
			</div>
		</div>
	)
}

export default Layout
