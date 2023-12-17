import prisma from '../db';
import { TransactionType } from '@prisma/client';

interface Transaction {
	id?: string;
	designation: string;
	amount: number;
	type?: TransactionType;
	completed?: boolean;
	userId: string;
}

interface DefaultTransactions {
	transactionId: string;
	userId: string;
}

class TransactionRepository {
	#client;

	constructor() {
		this.#client = prisma.transaction;
	}

	async create(data: Transaction): Promise<Transaction> {
		const transaction = await this.#client.create({
			data
		});
		return transaction;
	}

	async setDefault({ transactionId, userId }: DefaultTransactions) {
		await prisma.defaultTransactions.create({
			data: {
				userId,
				transactionId
			}
		});
	}
}

const transactionRepository = new TransactionRepository();
export default transactionRepository;
