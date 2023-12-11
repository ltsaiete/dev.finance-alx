import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import WebApp from '@twa-dev/sdk';
import { postItem, setAuthHeader } from './services/api';
import Home from './pages/Home';
import ApiStatus from './components/ApiStatus';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

interface SessionProps {
	token: string;
	error: string;
}

function App() {
	const [userLoaded, setUserLoaded] = useState(false);
	const initData = WebApp.initData;
	console.log(initData);

	useEffect(() => {
		handleLoadToken();
	}, []);

	async function handleLoadToken() {
		const response = await postItem<SessionProps>('/sessions', { initData });
		if (response.error) {
			setTimeout(handleLoadToken, 3000);
			return;
		} else {
			setAuthHeader(response.token);
			setUserLoaded(true);
			WebApp.ready();
		}
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				{userLoaded ? (
					<Home />
				) : (
					<>
						<p style={{ textAlign: 'center', paddingTop: '6rem', height: '8rem' }}>Loading user data...</p>
						<ApiStatus />
					</>
				)}
				<GlobalStyle />
			</ThemeProvider>
		</>
	);
}

export default App;
