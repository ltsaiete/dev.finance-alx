import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import BalanceCard from '../../components/BalanceCard';
import TransactionsTable from '../../components/TransactionsTable';
import TransactionForm from '../../components/TransactionForm';
import Modal from '../../components/Modal';
import ApiStatus from '../../components/ApiStatus';
import { BalanceContainer, Header, TransactionsContainer, Footer } from './styles';
import logo from '../../assets/logo.svg';

interface BalanceProps {
	income: number;
	expense: number;
	total: number;
}

export default function Home() {
	const [modalOpen, setModalOpen] = useState(false);
	const { data: balance } = useFetch<BalanceProps>('/transactions/balance');

	function onCloseModal() {
		setModalOpen(false);
	}

	return (
		<>
			<Header>
				<img src={logo} alt="logo dev.finance$" />
				<ApiStatus />
			</Header>

			<BalanceContainer>
				<h2 className="sr-only">Balance</h2>
				<BalanceCard title="Incomes" amount={balance?.income || 0} type="income" />
				<BalanceCard title="Expenses" amount={balance?.expense || 0} type="expense" />
				<BalanceCard title="Total" amount={balance?.total || 0} type="total" />
			</BalanceContainer>

			<TransactionsContainer>
				<h2 className="sr-only">Transactions</h2>
				<a href="#" onClick={() => setModalOpen(true)}>
					+ New Transaction
				</a>
				<TransactionsTable />
			</TransactionsContainer>

			<Footer>
				<p>dev.finance$</p>
			</Footer>
			<Modal open={modalOpen} onOpenChange={setModalOpen} title="New Transaction">
				<TransactionForm onCloseModal={onCloseModal} />
			</Modal>
		</>
	);
}
