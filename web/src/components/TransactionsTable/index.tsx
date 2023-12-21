import { MinusCircle } from '@phosphor-icons/react';
import { Container, CurrencyColumn } from './styles';
import { theme } from '../../styles/theme';
import useFetch from '../../hooks/useFetch';
import { formatCurrency, formatDate } from '../../utils/formatters';
import { deleteItem } from '../../services/api';
import WebApp from '@twa-dev/sdk';
import useTransactionsData from './useTransactionsData';

export interface TransactionProps {
	id: string;
	description: string;
	amount: number;
	date: Date;
}

export default function TransactionsTable() {
	const { transactions } = useTransactionsData();
	console.log(transactions);

	async function handleDeleteTransaction(idx: number) {
		if (transactions) {
			// const response = await deleteItem(`/transactions/${transactions[idx].id}`);
			// if (response?.error) WebApp.showAlert('Error deleting transaction');
			// else {
			// 	WebApp.showAlert('Successfully deleted transaction');
			// }
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
							<td className="description">{transaction.designation}</td>
							<CurrencyColumn $expense={transaction.type === 'EXPENSE'}>
								{formatCurrency(transaction.amount)}
							</CurrencyColumn>
							<td>{formatDate(new Date(transaction.createdAt))}</td>
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
