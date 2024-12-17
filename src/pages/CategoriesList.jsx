import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { Spinner } from "flowbite-react"
import SideNavbar from "../components/SideNavbar"
import Filters from "../components/Filters"
import {useFilters} from "../hooks/useFilters"
import CardProduct from "../components/CardProduct"

export default function CategoriesList() {
  const params = useParams()  
  const {data, loading} = useFetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${params.id}`)
  const {filterProducts} = useFilters(data)  
  return <>
    <div className="container mx-auto mt-10 mb-10">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-10"></h1>
      {loading && <div className="flex justify-center items-center"><Spinner aria-label="Loading" size="xl" color="purple"/></div>}
      <div className="grid grid-cols-10 gap-4">
        <div className="col-start-1 col-end-3">
          <SideNavbar cat={params.id} />
        </div>
        <div className="col-start-3 col-end-11">
          <Filters />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {filterProducts && filterProducts.map(product => {
              return (
                <CardProduct key={`Product-${product.id}`} product={product} />                    
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </>
}