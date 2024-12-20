import { Card,Button } from "flowbite-react"
import { Link } from "react-router-dom"
import {useCart} from '../hooks/useCart.jsx'
export default function CardProduct({product}) {
    const {addToCart, cart} = useCart()
    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }
    // eslint-disable-next-line react/prop-types
    let image = product.images[0].replaceAll('["','').replaceAll('"]','')
    const isProductInCart = checkProductInCart(product)
    return (
    <>
        <Card 
            className="mt-10"
            renderImage={() =><Link to={`/product/${product.id}`}><img width={500} height={500} src={image} alt={product.title}/></Link>}
            
        >
            <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h2>
            <div className="grid grid-cols-2 gap-4 justify-center align-middle">
                <div>
                    <p><span className="text-sm">Price:</span></p>
                    <p className="mt-2 text-4xl font-bold text-gray-700 dark:text-gray-300">${product.price}</p>
                </div>
                <button onClick={addToCart(product)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-12 h-12 {isProductInCart ? 'bg-red-200' : ''}}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFF" className="size-6">
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                </button>
                <Button as={Link} to={`/product/${product.id}`} color="blue" pill size="lg" className="h-12">Read more
                    <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                    </svg>
                </Button>
            </div>
        </Card>
    </>
  )
}
