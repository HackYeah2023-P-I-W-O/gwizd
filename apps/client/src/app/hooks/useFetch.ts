import { useState } from 'react';

export function useFetch() {
    const [loading, setLoading] = useState(false);

    const refetch = async (
        URL: string,
        applyFn: (data: Record<string, string>) => void,
    ) => {
        setLoading(true);
        try {
            const res = await fetch(URL);
            const data = await res.json();

            applyFn(data);
        } catch (err) {
            console.error(err);
        }

        setLoading(false);
    };

    return { loading, refetch };
}
