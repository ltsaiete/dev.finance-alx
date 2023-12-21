import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import Login from './pages/Login';
import { UserRegistration } from './pages/UserRegistration';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
	}, {
		path: "/auth/login",
		element: <Login />,
		errorElement: <ErrorPage />,
	}, {
		path: "/auth/register",
		element: <UserRegistration />,
		errorElement: <ErrorPage />,
	}
]);

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<RouterProvider router={router} />
				<GlobalStyle />
			</ThemeProvider>
		</>
	);
}

export default App;
