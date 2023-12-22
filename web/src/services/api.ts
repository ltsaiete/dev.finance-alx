import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3333/api/v1' });

api.defaults.headers.common[
	'Authorization'
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1OWU0MGE3NC1iOTE1LTQ2MWMtOGNlZi0xMDA2Zjk0MDgzNDAiLCJpYXQiOjE3MDMxOTQyNjYsImV4cCI6MTcwMzE5Nzg2Nn0._tleKDVIYMGvtymTmirKGul56SkPZ2j65auNmJxvRt4`;
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
