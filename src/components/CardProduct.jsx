import { Card,Button } from "flowbite-react"
import { Link } from "react-router-dom"
// eslint-disable-next-line react/prop-types
export default function CardProduct({product}) {
    // eslint-disable-next-line react/prop-types
    let image = product.images[0].replaceAll('["','').replaceAll('"]','')
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
                <Button as={Link} to={`/product/${product.id}`} color="blue" pill size="lg" className="h-12">
                    Read more
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