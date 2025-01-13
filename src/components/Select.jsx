import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";

const SelectCategory = () => {
  const { data, loading } = useFetch("https://api.escuelajs.co/api/v1/categories");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const categoryId = event.target.value;
    if (categoryId) {
      navigate(`/products/${categoryId}`, { replace: true });
    }
  };

  return (
    <div>
      {loading && (
        <div className="flex justify-center items-center">
          <Spinner aria-label="Loading" size="xl" color="purple" />
        </div>
      )}
      <form className="max-w-sm mx-auto">
        <label
          htmlFor="categories"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an option
        </label>
        <select
          id="categories"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Choose a category</option>
          {data &&
            data.map((category) => (
              category.name !== "New Category" && (
                <option key={`category-${category.id}`} value={category.id}>
                  {category.name}
                </option>
              )
            ))}
        </select>
      </form>
    </div>
  );
};

export default SelectCategory;
