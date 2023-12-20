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

