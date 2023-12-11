import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			main: string;
			mainDark: string;
			textBase: string;
			textTitle: string;
			background: string;
			boxFill: string;
			green: string;
			red: string;
			white: string;
		};
	}
}
