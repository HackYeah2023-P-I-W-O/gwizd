import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';

export function useFetch() {
    const [loading, setLoading] = useState(false);

    const refetch = async (
        URL: string,
        applyFn: (data: AxiosResponse) => void,
    ) => {
        setLoading(true);
        try {
            const data = await axios.get(URL);

            applyFn(data);
        } catch (err) {
            console.error(err);
        }

        setLoading(false);
    };

    return { loading, refetch };
}
