import useFetch from '../../hooks/useFetch';

export default function ApiStatus() {
	const { data: status } = useFetch('/status');
	return (
		<div
			style={{
				height: '0.8rem',
				width: '0.8rem',
				background: status ? 'green' : 'red',
				borderRadius: '50%',
				position: 'absolute',
				top: '1px',
				right: '1px'
			}}
		></div>
	);
}
