import { useFetch } from "../hooks/useFetch"
import notAvailable from "../assets/Image_not_available.png"
import {Card, Spinner} from 'flowbite-react'
import { Link } from "react-router-dom"
export default function Categories() {
  const {data, loading} = useFetch("https://api.escuelajs.co/api/v1/categories")
  return <>
    <div className="container mx-auto mt-10 mb-10">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-10">Categories</h1>
      {loading && <div className="flex justify-center items-center"><Spinner aria-label="Loading" size="xl" color="purple"/></div>}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data && data.map(category => {
          return category.name !== "New Category" ? 
            <Link to={`/categories/${category.id}`} key={`Category-list-${category.id}`}>
              <Card>
                <img src={category.image=='https://placeimg.com/640/480/any' ? notAvailable : category.image} />
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mt-2">{category.name}</h2>
              </Card>
            </Link> : ''
        })}
      </div>
    </div>
  </>
}