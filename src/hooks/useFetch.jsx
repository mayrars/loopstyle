import { useState, useEffect } from "react"

export function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {setData(data)})
            .finally(() => setLoading(false))
    },[])
    return {data, loading}
}