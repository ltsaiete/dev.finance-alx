import { useState, FormEvent } from 'react';
import { ActionsGroup } from './styles';
import Button from '../Button';
import { postItem } from '../../services/api';
import WebApp from '@twa-dev/sdk';
import Input from '../Input';
import Checkbox from '../Checkbox';

interface TransactionFormProps {
	onCloseModal(): void;
}
export default function TransactionForm({ onCloseModal }: TransactionFormProps) {
	const [designation, setDesignation] = useState<string>('');
	const [amount, setAmount] = useState<number>();
	const [completed, setCompleted] = useState(false);
	const [isDefault, setIsDefault] = useState(false);
	const [income, setIncome] = useState(false);

	async function handleSubmitTransaction(e: FormEvent) {
		e.preventDefault();
		if (!designation || !amount) {
			alert('Please, fill all the fields');
			return;
		}

		const type = income ? 'INCOME' : undefined;

		const response = await postItem('/transactions', { designation, amount, completed, isDefault, type });

		if (response.error) alert('Error submitting transaction');
		else {
			alert('Successfully submitted transaction');
			onCloseModal();
		}
	}

	return (
		<form onSubmit={handleSubmitTransaction}>
			<Input label="Designation" name="designation" onChange={(e) => setDesignation(e.target.value)} />
			<Input
				label="Amount"
				name="amount"
				type="number"
				step="0.01"
				// placeholder="0,00"
				onChange={(e) => setAmount(Number(e.target.value))}
			/>

			<Checkbox label="Is completed?" name="completed" onChange={(e) => setCompleted(e.target.checked)} />
			<Checkbox label="Is default?" name="is-default" onChange={(e) => setIsDefault(e.target.checked)} />
			<Checkbox label="Is income?" name="income" onChange={(e) => setIncome(e.target.checked)} />

			<ActionsGroup>
				<Button text="Cancel" buttonType="danger" onClick={onCloseModal} />
				<Button text="Save" type="submit" />
			</ActionsGroup>
		</form>
	);
}
