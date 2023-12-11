import { useState, FormEvent } from 'react';
import { InputGroup, ActionsGroup, DangerButton, Button } from './styles';
import { postItem } from '../../services/api';
import WebApp from '@twa-dev/sdk';

interface TransactionFormProps {
	onCloseModal(): void;
}
export default function TransactionForm({ onCloseModal }: TransactionFormProps) {
	const [description, setDescription] = useState<string>('');
	const [amount, setAmount] = useState<number>();
	const [date, setDate] = useState<Date | string>(new Date());

	async function handleSubmitTransaction(e: FormEvent) {
		e.preventDefault();
		if (!description || !amount || !date) {
			WebApp.showAlert('Please, fill all the fields');
			return;
		}
		const response = await postItem('/transactions', { description, amount, date });

		if (response.error) WebApp.showAlert('Error submitting transaction');
		else {
			WebApp.showAlert('Successfully submitted transaction');
			onCloseModal();
		}
	}

	return (
		<form onSubmit={handleSubmitTransaction}>
			<InputGroup>
				<label htmlFor="description" className="sr-only">
					Descrição
				</label>
				<input
					type="text"
					id="description"
					name="description"
					placeholder="Description"
					onChange={(e) => setDescription(e.target.value)}
				/>
			</InputGroup>

			<InputGroup>
				<label htmlFor="amount" className="sr-only">
					Valor
				</label>
				<input
					type="number"
					id="amount"
					name="amount"
					step="0.01"
					placeholder="0,00"
					onChange={(e) => setAmount(Number(e.target.value))}
				/>
				<small className="help">Use the - (minus) signal for expenses and , (comma) For decimal places</small>
			</InputGroup>

			<InputGroup>
				<label htmlFor="date" className="sr-only">
					Descrição
				</label>
				<input type="date" id="date" name="date" placeholder="01/01/2021" onChange={(e) => setDate(e.target.value)} />
			</InputGroup>

			<ActionsGroup>
				<DangerButton type="button" onClick={onCloseModal}>
					Cancel
				</DangerButton>
				<Button type="submit">Save</Button>
			</ActionsGroup>
		</form>
	);
}
