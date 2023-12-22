import styled from 'styled-components';

export const Container = styled.button`
	width: 48%;
	height: 50px;
	padding: 0;
	border-radius: 0.25rem;
	cursor: pointer;
`;

export const PrimaryButtonContainer = styled(Container)`
	border: none;
	width: 100%;
	height: 40px;
	color: ${({ theme }) => theme.colors.white};
	background: ${(props) => props.theme.colors.main};
	&:hover {
		background-color: ${(props) => props.theme.colors.mainDark};
	}
`;

export const DangerButtonContainer = styled(Container)`
	color: ${({ theme }) => theme.colors.red};
	border: 2px solid ${(props) => props.theme.colors.red};
	background: none;
	opacity: 0.4;
	&:hover {
		opacity: 1;
	}
`;

export const SecondaryButtonContainer = styled(Container)`
	color: ${({ theme }) => theme.colors.main};
	border: 2px solid ${(props) => props.theme.colors.main};
	background: none;
	&:hover {
		color: ${({ theme }) => theme.colors.mainDark};
		border: 2px solid ${(props) => props.theme.colors.mainDark};
	}
`;
