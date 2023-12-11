import styled from 'styled-components';

export const InputGroup = styled.div`
	margin-top: 0.8rem;
	input {
		color: ${(props) => props.theme.colors.textTitle};
		background-color: ${(props) => props.theme.colors.boxFill};
		border: none;
		border-radius: 0.2rem;
		padding: 0.8rem;
		width: 100%;
	}

	small {
		opacity: 0.9;
	}
`;

export const ActionsGroup = styled.div`
	margin-top: 1.2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Button = styled.button`
	width: 48%;
	height: 50px;
	color: ${(props) => props.theme.colors.white};
	border: none;
	background: ${(props) => props.theme.colors.main};
	padding: 0;
	border-radius: 0.25rem;
	cursor: pointer;

	&:hover {
		background-color: ${(props) => props.theme.colors.mainDark};
	}
`;

export const DangerButton = styled(Button)`
	color: ${(props) => props.theme.colors.red};
	border: 2px solid ${(props) => props.theme.colors.red};
	background: none;
	opacity: 0.4;

	&:hover {
		background: none;
		opacity: 1;
	}
`;
