import styled from 'styled-components';

export const Container = styled.table`
	width: 100%;
	display: block;
	border-spacing: 0 0.5rem;
	overflow-x: auto;

	thead tr th:first-child {
		border-radius: 0.25rem 0 0 0;
	}

	thead tr th:last-child {
		border-radius: 0 0.25rem 0 0;
	}

	tbody tr:last-child td:first-child {
		border-radius: 0 0 0 0.25rem;
	}

	tbody tr:last-child td:last-child {
		border-radius: 0 0 0.25rem 0;
	}

	th {
		background: ${(props) => props.theme.colors.boxFill};
		font-weight: 400;
		padding: 1rem 2rem;
		text-align: left;
		color: ${(props) => props.theme.colors.textTitle};
	}

	tbody tr {
		opacity: 0.7;
	}

	tbody tr:hover {
		opacity: 1;
	}

	td {
		background: ${(props) => props.theme.colors.boxFill};
		padding: 1rem 2rem;

		&.description {
			color: ${(props) => props.theme.colors.textTitle};
		}

		&.remove {
			cursor: pointer;
		}
	}
`;

export const CurrencyColumn = styled.td<{ $expense: boolean }>`
	color: ${(props) => (props.$expense ? props.theme.colors.red : props.theme.colors.green)};
`;
