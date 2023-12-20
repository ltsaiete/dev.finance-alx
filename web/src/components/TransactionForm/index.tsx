import { useState, FormEvent } from 'react';
import { ActionsGroup } from './styles';
import Button from '../Button';
import { postItem } from '../../services/api';
import WebApp from '@twa-dev/sdk';
import Input from '../Input';

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
			// WebApp.showAlert('Please, fill all the fields');
			return;
		}
		// const response = await postItem('/transactions', { description, amount, date });

		// if (response.error) WebApp.showAlert('Error submitting transaction');
		// else {
		// 	WebApp.showAlert('Successfully submitted transaction');
		// 	onCloseModal();
		// }
	}

	return (
		<form onSubmit={handleSubmitTransaction}>
			<Input label="Description" name="description" onChange={(e) => setDescription(e.target.value)} />
			<Input
				label="Amount"
				name="amount"
				type="number"
				step="0.01"
				// placeholder="0,00"
				onChange={(e) => setAmount(Number(e.target.value))}
			/>

			{/* <InputGroup>
				<label htmlFor="date" className="sr-only">
					Descrição
				</label>
				<input type="date" id="date" name="date" placeholder="01/01/2021" onChange={(e) => setDate(e.target.value)} />
			</InputGroup> */}

			<ActionsGroup>
				<Button text="Cancel" buttonType="danger" onClick={onCloseModal} />
				<Button text="Save" type="submit" />
			</ActionsGroup>
		</form>
	);
}
