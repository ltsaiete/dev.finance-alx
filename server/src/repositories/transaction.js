import { randomUUID } from 'crypto';
import sql from '../database/index.js';

export default class TransactionRepository {
	async getByUser(userId) {
		const transactions = await sql`SELECT * FROM transactions
		WHERE userId = ${userId}`;

		return transactions;
	}

	async deleteTransaction(transactionId) {
		await sql`DELETE FROM transactions
		WHERE id = ${transactionId}`;
	}

	async create(transaction) {
		const id = randomUUID();
		const { description, amount, date, userId } = transaction;
		await sql`INSERT INTO transactions (id, description, amount, date, userId)
			values(${id}, ${description}, ${amount}, ${date}, ${userId})`;
	}
}
