import { useState, useEffect } from "react";

export function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true; // Control de montaje
        setLoading(true);
        setError(null);

        fetch(url, options)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                if (isMounted) {
                    setData(data);
                }
            })
            .catch((err) => {
                if (isMounted) {
                    console.error(err);
                    setError(err.message);
                }
            })
            .finally(() => {
                if (isMounted) {
                    setLoading(false);
                }
            });

        return () => {
            isMounted = false; // Limpieza
        };
    }, []); // Serialización de options

    return { data, loading, error };
}
