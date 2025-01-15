import { useState, useEffect } from "react"

export function useFetch(url,options={}) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url, options)
            .then(res => res.json())
            .then(data => {setData(data)})
            .catch((err) =>{ 
                setError(err.message)
            })
            .finally(() => setLoading(false))
    },[url, options])
    return { data, loading, error };
}