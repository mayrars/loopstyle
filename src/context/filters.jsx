import { createContext, useState } from "react";

export const FiltersContext = createContext()

export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        minPrice: 0,
        maxPrice: 100
    })
    return (
        <FiltersContext.Provider value={{
           filters, setFilters
        }} >
            {children}
        </FiltersContext.Provider>
    )
}