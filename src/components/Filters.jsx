import { useId } from 'react'
import { useFilters } from '../hooks/useFilters.jsx'
import './Filters.css'
function Filters() {
  const { filters, setFilters } = useFilters()
  const minPriceFilterId = useId()
  const handleChangeMinPrice=(event)=>{
    setFilters(prevState=>({
      ...prevState,
      minPrice: event.target.value
    }))
  }
  
  return (
    <section className="filters mb-5">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input 
          type="range" 
          name="price" 
          id={minPriceFilterId} 
          min="0" 
          max="100"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />

        <span>${filters.minPrice}</span>
      </div>
    </section>
  );
}

export default Filters;
