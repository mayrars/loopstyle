import { Spinner } from "flowbite-react"
import { useFetch } from "../hooks/useFetch"
import CardProduct from "../components/CardProduct"

export function Products() {
    const {data, loading} = useFetch("https://api.escuelajs.co/api/v1/products?offset=12&limit=12")
    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Top products</h1>
            {loading && <div className="flex justify-center items-center"><Spinner aria-label="Loading" size="xl" color="purple"/></div>}
            <div className="grid grid-cols-4 gap-4 mb-16">
            {data?.map(product => {
                //get url product image array
                let image = product.images[0].replaceAll('["','').replaceAll('"]','')
                console.log(image)
                return (
                    <CardProduct key={`Product-${product.id}`} product={product} />                    
                )
            })}
            </div>
            
        </div>
    )
}