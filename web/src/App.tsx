import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import Login from './pages/Login';
import { UserRegistration } from './pages/UserRegistration';

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Home />
				<GlobalStyle />
			</ThemeProvider>
		</>
	);
}

export default App;
