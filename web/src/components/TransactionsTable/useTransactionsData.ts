import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import api from '../../services/api';

export interface TransactionProps {
	id: string;
	designation: string;
	type: 'EXPENSE' | 'INCOME';
	completed: boolean;
	createdAt: Date;
	amount: number;
}

// interface UseTransactionsDataProps {
// 	transactions: TransactionProps[] | null;
// }

export default function useTransactionsData() {
	const [isLoading, setIsLoading] = useState(false);
	const [transactions, setTransactions] = useState<TransactionProps[] | null>([]);

	useEffect(() => {
		const month = new Date().getMonth();
		api
			.get(`/transactions/month/${month}`)
			.then((response) => {
				setTransactions(response.data);
			})
			.catch((error) => console.log(error))
			.finally(() => setIsLoading(false));
	}, []);

	return {
		transactions,
		isLoading
	};
}
