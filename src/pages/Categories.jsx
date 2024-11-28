import { useFetch } from "../hooks/useFetch"
export default function Categories() {
  const {data, loading} = useFetch("https://api.escuelajs.co/api/v1/categories")
  return <>
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-10">Categories</h1>
      {loading && <p>Loading...</p>}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data && data.map(category => {
          return category.name !== "New Category" ? <div key={category.id}><img src={category.image} /><h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mt-2">{category.name}</h2></div> : ''
        })}
      </div>
    </div>
  </>
}