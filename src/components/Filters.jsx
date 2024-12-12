import { useState, useId } from 'react'
import './Filters.css'
function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const handleChangeMinPrice=(event)=>{
    setMinPrice(event.target.value)
    onChange(prevState=>({
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
        />
        <span>${minPrice}</span>
      </div>
    </section>
  );
}

export default Filters;
