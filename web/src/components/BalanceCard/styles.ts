import styled from 'styled-components';

export const Container = styled.div<{ $total?: boolean }>`
	background: ${(props) => (props.$total ? props.theme.colors.main : props.theme.colors.boxFill)};
	padding: 1.5rem 2rem;
	border-radius: 0.25rem;
	color: ${(props) => (props.$total ? props.theme.colors.white : props.theme.colors.textTitle)};
	margin-bottom: 2rem;

	h3 {
		font-weight: 400;
		font-size: 1.6rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	p {
		font-size: 2rem;
		font-weight: 500;
		margin-top: 1rem;
		line-height: 3rem;
	}
`;
