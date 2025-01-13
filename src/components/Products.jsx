import { Spinner } from "flowbite-react"
import { useFetch } from "../hooks/useFetch"
import CardProduct from "../components/CardProduct"

export function Products() {
    const {data, loading} = useFetch("https://api.escuelajs.co/api/v1/products?offset=12&limit=12")
    return (
        <div className="container mx-auto mt-10 p-4">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Top products</h1>
            {loading && <div className="flex justify-center items-center"><Spinner aria-label="Loading" size="xl" color="purple"/></div>}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 mb-16">
            {data?.map(product => {
                return (
                    <CardProduct key={`Product-${product.id}`} product={product}/>                    
                )
            })}
            </div>
            
        </div>
    )
}