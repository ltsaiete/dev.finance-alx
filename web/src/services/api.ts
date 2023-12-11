import axios from 'axios';

const api = axios.create({ baseURL: 'https://dev-finance-telegram-miniapp.onrender.com' });

export function setAuthHeader(token: string) {
	api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export function postItem<T = any>(url: string, data: any): Promise<T> {
	const response = api
		.post(url, data)
		.then((response) => response.data)
		.catch((e) => e.response.data);

	return response;
}

export function deleteItem(url: string): Promise<void | { error: string }> {
	const response = api
		.delete(url)
		.then((response) => response.data)
		.catch((e) => e.response.data);

	return response;
}

export default api;
