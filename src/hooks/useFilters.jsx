
import { useContext } from "react"
import { FiltersContext } from "../context/filters"
export function useFilters(products){
    const {filters, setFilters} = useContext(FiltersContext)
    const filterProducts = products!=null && products.filter(product => {
      return product.price >= filters.minPrice && product.price <= filters.maxPrice
    })
    return {filters, filterProducts, setFilters}
}