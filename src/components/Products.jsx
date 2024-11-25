import { Card } from "flowbite-react";
import { useFetch } from "../hooks/useFetch"

export function Products() {
    const {data, loading} = useFetch("https://api.escuelajs.co/api/v1/products")
    return (
        <div>
            <h1>Products</h1>
            {loading && <p>Loading...</p>}
            {data?.map((product) =>{
                <Card>
                    <div href="#" className="max-w-sm">
                        {product.title}
                    </div>
                </Card>                 
            })}
            
        </div>
    )
}