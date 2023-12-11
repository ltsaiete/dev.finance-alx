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
		textBase: WebApp.themeParams.hint_color || '#969cb3',
		textTitle: WebApp.themeParams.text_color || '#363f5f',
		background: WebApp.themeParams.secondary_bg_color || '#f0f2f5',
		boxFill: WebApp.themeParams.bg_color || '#FFFFFF',
		green: '#49AA26',
		red: '#E92929',
		white: '#FFF',
		...themeColors
	}
};
