import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { Card } from "flowbite-react"
export default function CategoriesList() {
  const params = useParams()
  const {data, loading} = useFetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${params.id}`)
  return <>
    <div className="container mx-auto mt-10 mb-10">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-10"></h1>
      {loading && <p>Loading...</p>}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data && data.map(product => {
          return <Card key={product.id} imgSrc={product.images[0]}>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h2>
          </Card>
        })}
      </div>
    </div>
  </>
}