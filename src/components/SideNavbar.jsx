import { Sidebar, Spinner } from "flowbite-react";
import { useFetch } from "../hooks/useFetch"
export default function SideNavbar({ cat }) {
  const {data, loading} = useFetch(`https://api.escuelajs.co/api/v1/categories`)
  return (
    <>
      {loading && <div className="flex justify-center items-center"><Spinner aria-label="Loading" size="xl" color="purple"/></div>}
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {data && data.map(category => {
              return category.name !== "New Category" ? 
                <Sidebar.Item href={`/categories/${category.id}`}className={cat==category.id && 'bg-gray-200'} key={`Item-${category.id}`}>{category.name}</Sidebar.Item>
              : ''
            })}
            
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}
