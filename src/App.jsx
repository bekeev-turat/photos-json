import { useEffect, useState } from 'react'
import './Product.css'

function App() {
	const [products, setProducts] = useState([])
	const [results, setResults] = useState(false)
	const [isLauding, setIsLauding] = useState(true)
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/photos?_limit=9')
			.then((json) => json.json())
			.then((res) => {
				setProducts(res)
				setResults(true)
				setIsLauding(false)
			})
			.catch((err) => {
				console.log(err)
				setResults(false)
			})
	}, [])
	console.log(products)

	return (
		<div className='app'>
			{!isLauding ? (
				results &&
				products.map((product) => {
					return (
						<div className='card' key={product.id}>
							<div className='flex'>
								<h2>
									{product.title[0].toUpperCase() + product.title.slice(1)}
								</h2>
								<p className='productId'>{product.id}</p>
							</div>
							<div className='imgWrapper'>
								<img src={product.thumbnailUrl} alt='photo product' />
							</div>
						</div>
					)
				})
			) : (
				<p >загрузка</p>
			)}
		</div>
	)
}
export default App
