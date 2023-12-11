import { useEffect, useState } from 'react';
import api from '../services/api';

export default function useFetch<T = unknown>(url: string) {
	const [data, setData] = useState<T | null>(null);
	const [isFetching, setIsFetching] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		api
			.get(url)
			.then((response) => setData(response.data))
			.catch((error) => setError(error))
			.finally(() => setIsFetching(false));
	}, []);

	return { data, isLoading: isFetching, error };
}
