import { DefaultTheme } from 'styled-components/dist/types';
import WebApp from '@twa-dev/sdk';

interface ThemeProps {
	main: string;
	mainDark: string;
}
const lightTheme = {
	main: '#49AA26',
	mainDark: '#2D4A22'
};
const darkTheme = {
	main: '#8257E5',
	mainDark: '#28203E'
};
const themeColors: ThemeProps = WebApp.colorScheme === 'dark' ? darkTheme : lightTheme;

export const theme: DefaultTheme = {
	colors: {
		textBase: '#969cb3',
		textTitle: '#363f5f',
		background: '#f0f2f5',
		boxFill: '#FFFFFF',
		green: '#49AA26',
		red: '#E92929',
		white: '#FFF',
		...themeColors
	}
};
