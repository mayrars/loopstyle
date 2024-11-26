import { Card } from "flowbite-react"
import { useFetch } from "../hooks/useFetch"

export function Products() {
    const {data, loading} = useFetch("https://api.escuelajs.co/api/v1/products")
    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Products</h1>
            {loading && <p>Loading...</p>}
            <div className="grid grid-cols-4 gap-4">
            {data?.map(product => {
                return (
                    <Card 
                        key={product.id} 
                        className="mt-10"
                        renderImage={() => <img width={500} height={500} src={product.images} alt={product.title}/>}
                    >
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h2>
                        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{product.description}</p>
                        <p className="mt-2 text-4xl font-bold text-gray-700 dark:text-gray-300">${product.price}</p>
                    </Card>
                )
            })}
            </div>
            
        </div>
    )
}