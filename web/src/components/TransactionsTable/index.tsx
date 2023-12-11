import { MinusCircle } from '@phosphor-icons/react';
import { Container, CurrencyColumn } from './styles';
import { theme } from '../../styles/theme';
import useFetch from '../../hooks/useFetch';
import { formatCurrency, formatDate } from '../../utils/formatters';
import { deleteItem } from '../../services/api';
import WebApp from '@twa-dev/sdk';

export interface TransactionProps {
	id: string;
	description: string;
	amount: number;
	date: Date;
}

export default function TransactionsTable() {
	const { data: transactions } = useFetch<TransactionProps[]>('/transactions');

	async function handleDeleteTransaction(idx: number) {
		if (transactions) {
			const response = await deleteItem(`/transactions/${transactions[idx].id}`);

			if (response?.error) WebApp.showAlert('Error deleting transaction');
			else {
				WebApp.showAlert('Successfully deleted transaction');
			}
		}
	}

	return (
		<Container>
			<thead>
				<tr>
					<th>Description</th>
					<th>Amount</th>
					<th>Date</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{transactions?.map((transaction, idx) => {
					return (
						<tr key={transaction.id}>
							<td className="description">{transaction.description}</td>
							<CurrencyColumn $expense={transaction.amount < 0}>{formatCurrency(transaction.amount)}</CurrencyColumn>
							<td>{formatDate(new Date(transaction.date))}</td>
							<td className="remove" onClick={() => handleDeleteTransaction(idx)}>
								<MinusCircle size={32} color={theme.colors.red} />
							</td>
						</tr>
					);
				})}
			</tbody>
		</Container>
	);
}
