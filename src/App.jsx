import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/screens/home/Home'
import Books from './components/screens/books/Books'
import ImageGallery from './components/screens/shop/Shop'
import { ModalProvider } from './components/ModalProvider'

function App() {
	return (
		<ModalProvider>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/books' element={<Books />} />
					<Route path='/films' element={<ImageGallery />} />
				</Routes>
			</Router>
		</ModalProvider>
	)
}

export default App
